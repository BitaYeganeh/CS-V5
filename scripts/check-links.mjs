import http from 'http';
import { getMenu } from '../src/data/menu.js';

function flatten(items) {
  const out = [];
  for (const it of items) {
    out.push(it.href);
    if (it.children && it.children.length) out.push(...flatten(it.children));
  }
  return out;
}

async function check(baseUrl, lang) {
  const menu = getMenu(lang);
  const hrefs = Array.from(new Set(flatten(menu)));
  console.log(`Checking ${hrefs.length} links for lang=${lang}`);
  const results = [];
  for (const href of hrefs) {
    const url = baseUrl + href;
    try {
      const res = await fetch(url, { method: 'GET' });
      results.push({ href, url, status: res.status });
      console.log(`${res.status}  ${url}`);
    } catch (err) {
      results.push({ href, url, status: 'ERR', error: String(err) });
      console.log(`ERR  ${url}  ${err.message}`);
    }
  }
  return results;
}

async function main() {
  const base = process.env.BASE || 'http://localhost:4322';
  const en = await check(base, 'en');
  const fi = await check(base, 'fi');
  const bad = [...en, ...fi].filter(r => r.status !== 200);
  if (bad.length === 0) {
    console.log('\nAll menu links returned 200 OK for both languages.');
    process.exit(0);
  } else {
    console.log('\nLinks with non-200 responses:');
    for (const b of bad) console.log(b.status, b.url);
    process.exit(2);
  }
}

main();
