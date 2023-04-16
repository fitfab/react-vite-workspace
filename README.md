# Monorepo setup

This setup uses yarn "workspaces", "Lerna" and "NX".

Within the "packages" folder we have:

- app -- an Vitejs/Typescript application
- uix -- a UI library setup with vitejs & Typescript

## Lerna

npx lerna run build

### References

Lint-staged: https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo

Remix Deployment tagets: https://andre-landgraf.dev/blog/2022-12-03_different-dimensions-of-remix-deploy-targets
