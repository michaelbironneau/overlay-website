# Overlay Connectivity Docs

This folder contains buyer-facing documentation for Overlay's identity-based connectivity model in BMS environments.

## Audience

These documents are written for technical buyers evaluating:

- security posture
- operational fit
- rollout complexity
- auditability
- how Overlay differs from traditional BMS VPN access

## Reading Order

1. [Identity-Based Connectivity Model](./identity-based-connectivity-model.md)
2. [Overlay vs Traditional BMS VPN](./overlay-vs-traditional-bms-vpn.md)
3. [Connector Architecture and Session Flow](./connector-architecture-and-session-flow.md)
4. [Security and Ops FAQ](./security-and-ops-faq.md)
5. [Managed Network Extension](./managed-network-extension.md)

## Scope Boundary

This documentation set separates current product behavior from near-term architecture:

- Current behavior: connector-brokered access, scoped roles, MFA enforcement, per-session audit, connector access logs, optional engineering IP restriction, and managed hub-and-router network model for customers that do not already have suitable site connectivity.

The managed network material is included as an extension to the same identity-first model. It should not be read as part of the baseline product claim unless explicitly marked otherwise.

## Source Alignment

Terminology in this folder follows the existing product concepts in the repo, including `Connector`, `HeadEnd`, `Controller`, `Machine`, `SessionStatus`, `ConnectionRequest`, `RoleAssignment`, and `OrganizationSettings`.
