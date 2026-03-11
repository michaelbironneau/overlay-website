"use client";

import { useEffect, useRef } from "react";

export function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w: number, h: number;
        const PURPLE = "#7C3AED";
        const PINK = "#EC4899";
        const ORANGE = "#F97316";
        const traces: Trace[] = [];

        class Trace {
            points: { x: number; y: number }[] = [];
            color: string = PURPLE;
            segments: number = 0;
            width: number = 0;
            alpha: number = 0;
            targetAlpha: number = 0;
            fadeSpeed: number = 0.008;
            packets: { progress: number; speed: number }[] = [];
            maxPackets: number = 1;

            constructor() {
                this.init();
            }

            init() {
                // Edge-biased spawning: favor left/right 30% to keep center clean
                let edgeX;
                if (Math.random() < 0.7) {
                    edgeX = Math.random() < 0.5 ? Math.random() * 0.3 * w : (0.7 + Math.random() * 0.3) * w;
                } else {
                    edgeX = Math.random() * w;
                }

                this.points = [{
                    x: edgeX,
                    y: Math.random() * h
                }];

                const rand = Math.random();
                if (rand > 0.4) this.color = PURPLE;
                else if (rand > 0.2) this.color = PINK;
                else this.color = ORANGE;

                this.segments = Math.floor(Math.random() * 3) + 2;
                this.width = Math.random() * 0.4 + 0.6;
                this.alpha = 0;
                this.targetAlpha = Math.random() * 0.1 + 0.25;

                let curX = this.points[0].x;
                let curY = this.points[0].y;
                for (let i = 0; i < this.segments; i++) {
                    const angle = (Math.floor(Math.random() * 8) * 45) * Math.PI / 180;
                    const len = Math.random() * 100 + 50;
                    curX += Math.cos(angle) * len;
                    curY += Math.sin(angle) * len;
                    this.points.push({ x: curX, y: curY });
                }

                this.packets = [];
            }

            update() {
                if (this.alpha < this.targetAlpha) {
                    this.alpha += this.fadeSpeed;
                }

                for (let i = this.packets.length - 1; i >= 0; i--) {
                    this.packets[i].progress += this.packets[i].speed;
                    if (this.packets[i].progress >= 1) this.packets.splice(i, 1);
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                if (this.alpha <= 0) return;
                ctx.beginPath();
                ctx.lineWidth = this.width;
                ctx.strokeStyle = this.hexToRGBA(this.color, this.alpha);
                ctx.moveTo(this.points[0].x, this.points[0].y);
                for (let i = 1; i < this.points.length; i++) {
                    ctx.lineTo(this.points[i].x, this.points[i].y);
                }
                ctx.stroke();

                this.drawPad(ctx, this.points[0].x, this.points[0].y);
                this.drawPad(ctx, this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);

                for (const p of this.packets) {
                    const pos = this.getPositionAt(p.progress);
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = Math.min(1, (this.alpha / this.targetAlpha) + 0.5);
                    ctx.shadowBlur = 18;
                    ctx.shadowColor = this.color;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, this.width * 2.8, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.globalAlpha = 1.0;
                }
            }

            drawPad(ctx: CanvasRenderingContext2D, x: number, y: number) {
                ctx.fillStyle = this.hexToRGBA(this.color, this.alpha * 1.5);
                ctx.beginPath();
                ctx.arc(x, y, this.width * 2.5, 0, Math.PI * 2);
                ctx.fill();
            }

            getPositionAt(progress: number) {
                const totalPoints = this.points.length;
                const segmentCount = totalPoints - 1;
                const targetSegment = Math.floor(progress * segmentCount);
                const segmentProgress = (progress * segmentCount) % 1;

                const p1 = this.points[Math.min(targetSegment, segmentCount)];
                const p2 = this.points[Math.min(targetSegment + 1, segmentCount)];

                return {
                    x: p1.x + (p2.x - p1.x) * segmentProgress,
                    y: p1.y + (p2.y - p1.y) * segmentProgress
                };
            }

            hexToRGBA(hex: string, alpha: number) {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${Math.max(0, alpha)})`;
            }
        }

        const resize = () => {
            if (!canvas) return;
            w = canvas.width = window.innerWidth;
            h = canvas.height = 800; // Fixed height for hero animation or dynamic based on section
        };

        window.addEventListener("resize", resize);
        resize();

        for (let i = 0; i < 45; i++) traces.push(new Trace());

        let animationId: number;
        const frame = () => {
            ctx.clearRect(0, 0, w, h);

            let activePackets = 0;
            for (const tr of traces) activePackets += tr.packets.length;

            for (const t of traces) {
                if (activePackets < 4 && Math.random() > 0.99 && t.packets.length < t.maxPackets && t.alpha > 0.1) {
                    t.packets.push({ progress: 0, speed: Math.random() * 0.003 + 0.0015 });
                    activePackets++;
                }
                t.update();
                t.draw(ctx);
            }
            animationId = requestAnimationFrame(frame);
        };
        frame();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                maskImage: "radial-gradient(circle at center, transparent 5%, black 50%)",
                WebkitMaskImage: "radial-gradient(circle at center, transparent 5%, black 50%)",
            }}
            aria-hidden="true"
        />
    );
}
