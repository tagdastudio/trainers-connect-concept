import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");

/**
 * Next's static export writes the route's RSC payload at
 * `__next.<route>/__PAGE__.txt`, while the client asks for
 * `__next.<route>.__PAGE__.txt`. Copy the payload to the flat name so
 * prefetched navigations resolve on a plain static host (Cloudflare Pages).
 */
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.") && fs.existsSync(path.join(full, "__PAGE__.txt"))) {
      fs.copyFileSync(path.join(full, "__PAGE__.txt"), path.join(dir, `${entry.name}.__PAGE__.txt`));
    }
    walk(full);
  }
}

if (fs.existsSync(root)) {
  walk(root);
  console.log("flatten-rsc: copied RSC page payloads for static hosting");
}
