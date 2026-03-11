# Security and Ops FAQ

## How is this different from a VPN?

A traditional BMS VPN often gives the user general presence on a site network and leaves them to discover the right host, port, and credentials afterwards. Overlay starts from a named user and a specific resource request. The platform evaluates policy, creates a session for that resource, and asks the relevant `Connector` to broker the path.

In practice, the connector may use an underlying VPN-style method to reach the site. The difference is that the user is not operating a generic site VPN as their primary control surface.

## What is exposed at the site?

The current model is built around a connector that brokers access to defined resources such as a `HeadEnd`, `Controller`, or `Machine`. The buyer-facing posture is not "put the user on the whole site network." It is "broker a session to the requested target through the connector path that exists for that site."

## How is access tied to a named user?

The access APIs use authenticated user context, active organization context, and `RoleAssignment` scope before creating a session. Audit metadata is written for the access action, which means session initiation is attached to a named user action rather than being only a network event.

## What can be audited?

The repo supports per-session audit events for access actions and connector access-log review for broker-layer traffic evidence. Together, those give buyers two useful views:

- who initiated access and in what scope
- what the connector observed while brokering that access

## How do connectors fit when sites already use VPN technology?

Connectors abstract that variation away from the user workflow. A site may already rely on OpenVPN, WireGuard, AnyConnect, Tailscale, ZeroTier, or another connectivity pattern. Overlay's value is that the operator still works through the same session-oriented model instead of directly operating each site's remote-access method as the main user experience.

## How does the near-term managed network option fit the model?

The managed hub-and-router concept extends the same architecture when the customer does not already have a suitable path for the connector to use. It is an underlay extension, not a separate security model. Users still authenticate, choose a resource, and start a brokered session through Overlay.

## Does Overlay enforce MFA?

The repo includes MFA policy enforcement on access-sensitive flows. That supports a current-state claim that organization MFA policy can be enforced before certain access actions proceed.

## Can engineering access be restricted further?

Yes. The current code supports an optional engineering-session IP restriction policy. When enabled and when the client IP can be resolved, the session can be limited to the client's current IP range.

## Does this remove the need for every underlying network technology?

No. Overlay standardizes the control plane and operator workflow. It does not claim that every estate uses the same underlay. The buyer benefit is consistency of access control, session brokering, and auditability across those differing underlays.
