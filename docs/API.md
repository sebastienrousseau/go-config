# `@sebastienrousseau/go-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/go-config`.

---

## Description

Shareable Go configuration standards providing hardened golangci-lint, staticcheck, and revive rules.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/go-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .golangci.yml

- **Description**: Production-grade golangci-lint suite enabling gosec, errcheck, staticcheck, revive, and gocyclo.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. staticcheck.conf

- **Description**: Staticcheck configuration enforcing standard library idiomatic conventions.
- **Scope**: Production & Development
- **Status**: Stable & Active
