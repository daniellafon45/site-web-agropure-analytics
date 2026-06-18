import { createRequire } from "node:module";
import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers/Pages, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// Nitro also exposes bindings on globalThis.__env__ per request. With
// nodejs_compat_populate_process_env, process.env is populated as well.

const require = createRequire(import.meta.url);

function trimEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed || undefined;
}

function readFromCfGlobalEnv(name: string): string | undefined {
  const bindings = (globalThis as { __env__?: Record<string, string> }).__env__;
  return trimEnv(bindings?.[name]);
}

function readFromCloudflareWorkersModule(name: string): string | undefined {
  try {
    const { env } = require("cloudflare:workers") as { env: Record<string, string> };
    return trimEnv(env[name]);
  } catch {
    return undefined;
  }
}

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
  };
}

/** Web3Forms access key — read per-request (Cloudflare injects env at request time). */
export function getWeb3FormsAccessKey(): string | undefined {
  return (
    trimEnv(process.env.WEB3FORMS_ACCESS_KEY) ??
    readFromCfGlobalEnv("WEB3FORMS_ACCESS_KEY") ??
    readFromCloudflareWorkersModule("WEB3FORMS_ACCESS_KEY")
  );
}
