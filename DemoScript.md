# Demo Script: 2-Minute How-To Video

## Audience

Mixed audience:

- technical buyers evaluating security posture, auditability, and rollout fit
- BMS operators evaluating usability, workflow consistency, and day-to-day engineer efficiency

## Video Objective

Show, in roughly two minutes, how Overlay gives BMS teams a simpler way to access sites without making users operate a patchwork of customer VPNs. The core story is secure, identity-led remote access. The closing beat can briefly mention that the same platform can also support customer-facing portals and recurring revenue opportunities.

This is a live product walkthrough outline, not a word-for-word narration script.

## Flow Overview

1. Open with the current pain: too many VPNs, too much inconsistency, poor auditability.
2. Show the unified Overlay entry point: one login, one estate view.
3. Show selecting a site and a specific resource rather than broad network access.
4. Show session creation and explain the brokered model in simple terms.
5. Reinforce the buyer controls: policy checks, named-user access, audit trail.
6. Briefly reinforce deployment fit across mixed estates and existing network underlays.
7. Close with a short mention that the same platform can support customer portals and monetised services.

## Timed Script Outline

### 0:00-0:15 — Problem And Promise

**Goal**

Set up the pain Overlay solves and establish the promise quickly.

**On-screen**

- Homepage hero or dashboard view
- Fast montage of multiple customer sites or a site list

**Talking points**

- BMS teams often juggle multiple VPNs, credentials, and customer-specific access methods.
- That creates friction for engineers and weakens consistency for security and operations teams.
- Overlay changes the model: one login, one operating workflow, across the estate.

**Buyer takeaway**

This is about control and standardisation, not just convenience.

**Operator takeaway**

The team stops bouncing between different remote-access tools for every customer.

### 0:15-0:35 — Unified Command Center

**Goal**

Show the single-login, unified-estate experience from the homepage messaging.

**On-screen**

- Main dashboard or site list
- Filter/search interaction
- Several sites or customers visible at once

**Talking points**

- After signing in, the user sees the estate in one place instead of hunting for the right VPN client or profile.
- This is the practical “one login, every site” moment.
- The point is not that every site uses the same network underneath; it is that the user workflow becomes consistent above that variation.

**Buyer takeaway**

Overlay reduces operating inconsistency across mixed customer estates.

**Operator takeaway**

Finding the right site becomes a normal product workflow, not a support exercise.

### 0:35-0:55 — Choose A Specific Resource

**Goal**

Demonstrate that access starts with a defined resource, not general network membership.

**On-screen**

- User selects a site
- User chooses a head-end, controller, or machine
- Resource details panel or launch action

**Talking points**

- Instead of joining a broad site network first, the user selects the exact resource they need.
- Overlay is designed around a named user requesting access to a specific target.
- That shift reduces dependence on blanket network reach as the default operating posture.

**Buyer takeaway**

Access scope is narrower and easier to explain than a traditional site-wide VPN pattern.

**Operator takeaway**

The user does not need to think about the underlying access method before getting started.

### 0:55-1:15 — Session Creation And Brokered Access

**Goal**

Explain the core model clearly without overusing internal terminology.

**On-screen**

- Click to start a session
- Launch web access or engineering access
- Optional cut to the access-model diagram from the site

**Talking points**

- When the user starts access, Overlay checks policy, creates a session for that requested resource, and brokers the connection to the target.
- The session is created for that resource and that user, rather than making the user a general member of the site network.
- Under the hood, the site may still use existing VPN-style connectivity, but the user does not operate that complexity as their main control surface.

**Buyer takeaway**

The control plane stays centered on identity, policy, and session context.

**Operator takeaway**

The user gets a straightforward “launch access” workflow instead of manual VPN switching.

### 1:15-1:35 — Security, Policy, And Auditability

**Goal**

Reassure technical buyers that the access flow is controlled and evidenced.

**On-screen**

- Show a policy or access gate moment if available
- Show session state, audit event, or activity panel
- Optional visual cue for MFA or access approval

**Talking points**

- Overlay supports policy checks before access proceeds, including MFA in access-sensitive flows.
- Session initiation is tied to a named user action rather than being just a network event.
- Buyers get clearer evidence of who started access and what was brokered during that session.

**Buyer takeaway**

This is more auditable and governable than fragmented VPN logs plus human process.

**Operator takeaway**

Security controls happen in the background without adding friction to every access attempt.

### 1:35-1:50 — Deployment Fit Across Mixed Estates

**Goal**

Address the common “but every site is different” objection.

**On-screen**

- Compatibility section or site examples
- Quick cuts between different site/resource types

**Talking points**

- Overlay does not require every customer estate to be identical.
- It can work with existing remote-access methods and mixed site environments while preserving the same operator workflow.
- That is why it fits real BMS portfolios rather than just clean, standardised estates.

**Buyer takeaway**

Overlay improves consistency without demanding a full network reset across the portfolio.

**Operator takeaway**

The platform adapts to mixed environments instead of forcing the field team into a brand-new model for every site.

### 1:50-2:00 — Closing Capability And CTA

**Goal**

End on the broader business upside without changing the core story.

**On-screen**

- Brief flash of customer portal or white-label view
- End frame with Book a Demo CTA

**Talking points**

- Once secure remote access is standardised, the same platform can also support customer-facing access and managed service offerings.
- But the core value starts here: one login, specific-resource access, and clearer control across the estate.
- Invite viewers to book a live walkthrough tailored to their environment.

**Buyer takeaway**

Overlay can support both governance and future service expansion.

**Operator takeaway**

The immediate win is simpler remote access; the portal and revenue angle is an added upside.

## Visual Notes / Screens To Capture

- Login or landing entry point
- Unified dashboard with multiple sites/customers visible
- Search or filter interaction
- Site detail view
- Resource list showing head-end, controller, or machine targets
- Session launch flow
- Web or engineering access handoff
- Audit/session evidence view if available
- Brief customer portal or branded portal glimpse for closing
- Final CTA screen pointing to book a demo

## Key Claims To Stay Within

- Access starts with the user, not the tunnel.
- Overlay centers access on a specific resource and session.
- Policy checks such as MFA can be enforced before access proceeds.
- Access is tied to a named user and can be audited at the session level.
- Connector-level evidence exists at the broker layer.
- Overlay can work across mixed estates and existing underlying connectivity methods.
- The user does not need to operate a different VPN workflow for every customer.

## Claims To Avoid

- Do not claim Overlay eliminates every underlying network technology.
- Do not imply that every customer estate uses the same underlay.
- Do not overstate monitoring, policy controls, or enforcement beyond what the docs support.
- Do not make the customer portal / monetisation angle sound like the main security story.
- Do not use repo-internal terms such as connection request, role assignment, or session status in the spoken layer.

## Guardrails For Presenter And Editor

- Keep the pace brisk. Each segment should prove one idea, not explain the whole platform.
- Prefer showing real product actions over abstract explanation.
- Translate technical architecture into buyer-safe language.
- If a screen is not ready or too detailed, use the access-model diagram briefly rather than inventing unsupported UI behavior.
- End on the core operational value first, then the commercial upside second.
