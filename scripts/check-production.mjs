import assert from "node:assert/strict";

const base = new URL(process.argv[2] ?? "http://localhost:3100");
const response = await fetch(base);
assert.equal(response.status, 200, "Homepage must return HTTP 200");
const html = await response.text();
for (const id of ["tech-stack-heading", "core-values-heading", "services-heading", "why-heading", "process-heading", "faq-heading"]) {
  assert.ok(html.includes(`id="${id}"`), `Missing server-rendered section: ${id}`);
}
const scripts = [...new Set([...html.matchAll(/<script[^>]+src="([^\"]+)"/g)].map(match => match[1]))];
assert.ok(scripts.length > 0, "Homepage must include its hydration scripts");
const results = await Promise.all(scripts.map(async path => {
  const asset = await fetch(new URL(path, base));
  assert.equal(asset.status, 200, `JavaScript asset failed: ${path}`);
  assert.match(asset.headers.get("content-type") ?? "", /javascript/, `Incorrect JavaScript content type: ${path}`);
  return path;
}));
const imagePath = [...html.matchAll(/<img[^>]+src="([^\"]+)"/g)].map(match => match[1].replaceAll("&amp;", "&")).find(path => path.startsWith("/_next/image"));
assert.ok(imagePath, "Next image optimization must be active");
const image = await fetch(new URL(imagePath, base), { headers: { Accept: "image/webp" } });
assert.equal(image.status, 200, "Optimized image must load");
assert.match(image.headers.get("content-type") ?? "", /^image\//);
console.log(JSON.stringify({ homepage: response.status, serverRenderedSections: 6, scriptAssets: results.length, optimizedImage: image.headers.get("content-type") }, null, 2));
