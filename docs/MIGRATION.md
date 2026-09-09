# Migration Guide for `@sebastienrousseau/go-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/go-config`.

## Upgrading from Previous Versions

1. Update package version:
   ```bash
   npm install --save-dev @sebastienrousseau/go-config@latest
   ```
2. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/go-config` in your project configuration or config entrypoint.
