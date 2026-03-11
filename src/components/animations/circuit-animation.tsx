"use client";

import { useEffect, useRef } from "react";

type Point = {
    x: number;
    y: number;
};

type Pulse = {
    t: number;
};

type CircuitTrace = {
    points: Point[];
    filled: boolean;
    pulses: Pulse[];
    interval: number;
    lastSpawn: number;
};

export function CircuitAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w: number, h: number, cx: number, cy: number, animId: number | null = null, t = 0, lastMs = 0;
        let traces: CircuitTrace[] = [];
        const HUB_R = 68;

        function makeTrace(angle: number, radLen: number, bendDir: number, bendLen: number, extraRad: number, filled: boolean): CircuitTrace {
            const a = (angle * Math.PI) / 180;
            const cs = Math.cos(a), sn = Math.sin(a);
            const px = -sn * bendDir, py = cs * bendDir;

            const p0 = { x: cs * HUB_R, y: sn * HUB_R };
            const p1 = { x: cs * (HUB_R + radLen), y: sn * (HUB_R + radLen) };
            const p2 = { x: p1.x + px * bendLen, y: p1.y + py * bendLen };
            const pts = [p0, p1, p2];

            if (extraRad > 0) {
                pts.push({ x: p2.x + cs * extraRad, y: p2.y + sn * extraRad });
            }

            return {
                points: pts,
                filled,
                pulses: [] as { t: number }[],
                interval: 2.2 + Math.random() * 3.5,
                lastSpawn: -Math.random() * 6,
            };
        }

        function buildTraces() {
            traces = [
                makeTrace(0, 130, 1, 45, 55, true),
                makeTrace(22, 95, -1, 30, 0, false),
                makeTrace(45, 120, 1, 40, 50, true),
                makeTrace(68, 90, -1, 30, 0, false),
                makeTrace(90, 138, 1, 50, 45, true),
                makeTrace(112, 100, -1, 35, 0, false),
                makeTrace(135, 125, 1, 45, 52, true),
                makeTrace(157, 85, -1, 28, 0, false),
                makeTrace(180, 135, 1, 50, 48, true),
                makeTrace(202, 95, -1, 30, 0, false),
                makeTrace(225, 120, 1, 40, 55, true),
                makeTrace(247, 90, -1, 30, 0, false),
                makeTrace(270, 145, 1, 55, 40, true),
                makeTrace(292, 100, -1, 35, 0, false),
                makeTrace(315, 125, 1, 45, 48, true),
                makeTrace(337, 90, -1, 28, 0, false),
            ];
        }

        function traceLen(trace: CircuitTrace) {
            let len = 0;
            for (let i = 1; i < trace.points.length; i++)
                len += Math.hypot(trace.points[i].x - trace.points[i - 1].x,
                    trace.points[i].y - trace.points[i - 1].y);
            return len;
        }

        function tracePos(trace: CircuitTrace, tt: number) {
            const total = traceLen(trace);
            let rem = tt * total;
            for (let i = 1; i < trace.points.length; i++) {
                const dx = trace.points[i].x - trace.points[i - 1].x;
                const dy = trace.points[i].y - trace.points[i - 1].y;
                const seg = Math.hypot(dx, dy);
                if (rem <= seg) {
                    const f = rem / seg;
                    return {
                        x: cx + trace.points[i - 1].x + dx * f,
                        y: cy + trace.points[i - 1].y + dy * f
                    };
                }
                rem -= seg;
            }
            const last = trace.points[trace.points.length - 1];
            return { x: cx + last.x, y: cy + last.y };
        }

        function drawTrace(ctx: CanvasRenderingContext2D, tr: CircuitTrace) {
            const col = "rgba(167, 139, 250, 0.20)";
            ctx.beginPath();
            ctx.moveTo(cx + tr.points[0].x, cy + tr.points[0].y);
            for (let i = 1; i < tr.points.length; i++)
                ctx.lineTo(cx + tr.points[i].x, cy + tr.points[i].y);
            ctx.strokeStyle = col;
            ctx.lineWidth = 1;
            ctx.stroke();

            const last = tr.points[tr.points.length - 1];
            const endX = cx + last.x, endY = cy + last.y;
            if (tr.filled) {
                ctx.beginPath();
                ctx.arc(endX, endY, 4, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(167, 139, 250, 0.30)";
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(endX, endY, 4, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(167, 139, 250, 0.35)";
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }

        function drawHub(ctx: CanvasRenderingContext2D, time: number) {
            const pulse = 0.5 + 0.5 * Math.sin(time * 0.7);
            ctx.beginPath();
            ctx.arc(cx, cy, HUB_R + 6, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(167, 139, 250,${0.25 + pulse * 0.10})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(cx, cy, HUB_R - 8, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(167, 139, 250,${0.35 + pulse * 0.10})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(cx, cy, HUB_R - 20, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167, 139, 250,${0.10 + pulse * 0.05})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(167, 139, 250,${0.25 + pulse * 0.08})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        function drawPulses(ctx: CanvasRenderingContext2D, tr: CircuitTrace) {
            for (const p of tr.pulses) {
                const fade = Math.min(p.t * 10, (1 - p.t) * 10, 1);
                const pos = tracePos(tr, p.t);
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 4.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 250,${fade * 0.15})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(196, 181, 253,${fade * 0.70})`;
                ctx.fill();
            }
        }

        function resize() {
            if (!canvas) return;
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
            cx = w * 0.55;
            cy = h * 0.50;
            buildTraces();
        }

        const frame = (ms: number) => {
            const dt = Math.min((ms - lastMs) / 1000, 0.05);
            lastMs = ms;
            t += dt;

            for (const tr of traces) {
                if (t - tr.lastSpawn > tr.interval) {
                    tr.pulses.push({ t: 0 });
                    tr.lastSpawn = t;
                    tr.interval = 2.2 + Math.random() * 3.5;
                }
                for (const p of tr.pulses) p.t += dt * 0.22;
                tr.pulses = tr.pulses.filter((p) => p.t < 1);
            }

            ctx.clearRect(0, 0, w, h);
            for (const tr of traces) drawTrace(ctx, tr);
            drawHub(ctx, t);
            for (const tr of traces) drawPulses(ctx, tr);

            animId = requestAnimationFrame(frame);
        };

        const section = canvas.closest("section");
        if (section) {
            new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    if (animId === null) { // Check for null explicitly
                        lastMs = performance.now();
                        animId = requestAnimationFrame(frame);
                    }
                } else {
                    if (animId !== null) { // Check for non-null explicitly before canceling
                        cancelAnimationFrame(animId);
                        animId = null;
                    }
                }
            }).observe(section);
        } else {
            // If no section is found, start animation immediately
            lastMs = performance.now();
            animId = requestAnimationFrame(frame);
        }

        window.addEventListener("resize", resize);
        resize();
        // Initial animation start is now handled by the IntersectionObserver or the else block
        // lastMs = performance.now();
        // animId = requestAnimationFrame(frame);

        return () => {
            window.removeEventListener("resize", resize);
            if (animId !== null) { // Ensure animId is not null before canceling
                cancelAnimationFrame(animId);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}
