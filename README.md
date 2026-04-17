# shipyard-hello-fixture

Target repo for the Shipyard walking skeleton. The Shipyard platform opens PRs on this repo and CI validates them.

## Build conventions (agents: read this)

- **ESM**: `package.json` has `"type": "module"`. `tsconfig.json` uses `"module": "NodeNext"` and `"moduleResolution": "NodeNext"`.
- **Import extensions**: imports between local TS files must use the `.js` extension even though the source is `.ts` (NodeNext rule). Example: `import { reverse } from "../lib/reverse.js";` — not `.ts`, not extensionless.
- **Included dirs**: `src/`, `lib/`, and `test/`. If you add code under a new top-level directory, update `tsconfig.json` `include`.
- **Tests**: use Node's built-in runner via tsx — `node --import tsx --test test/*.test.ts`. Test files live under `test/` with the `.test.ts` suffix and use `.js` import extensions (per NodeNext) — tsx resolves them to the actual `.ts` sources at runtime.

Do not edit directly ? this exists as a controlled test surface.
