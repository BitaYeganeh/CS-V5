import fs from 'fs';
import path from 'path';
import { getMenu } from '../src/data/menu.js';

function flatten(items) {
  const out = [];
  for (const it of items) {
    out.push(it.href);
    if (it.children && it.children.length) out.push(...flatten(it.children));
  }
  return out;
}

function existsForHref(href) {
  // normalize
  if (href === '/') return fs.existsSync(path.join('src','pages','index.astro')) || fs.existsSync(path.join('src','pages','index.md'));
  const parts = href.replace(/^\//, '').split('/');
  // try src/pages/<parts>.astro
  const tryPaths = [];
  // direct file
  tryPaths.push(path.join('src','pages', ...parts) + '.astro');
  tryPaths.push(path.join('src','pages', ...parts) + '.md');
  // index file in directory
  tryPaths.push(path.join('src','pages', ...parts, 'index.astro'));
  tryPaths.push(path.join('src','pages', ...parts, 'index.md'));
  // nested fi locale
  tryPaths.push(path.join('src','pages','fi', ...parts) + '.astro');
  tryPaths.push(path.join('src','pages','fi', ...parts, 'index.astro'));

  for (const p of tryPaths) {
    if (fs.existsSync(p)) return { ok: true, found: p };
  }
  return { ok: false, tried: tryPaths };
}

function checkLang(lang='en') {
  const menu = getMenu(lang);
  const hrefs = Array.from(new Set(flatten(menu)));
  const results = [];
  for (const href of hrefs) {
    const res = existsForHref(href);
    results.push({ href, ok: res.ok, found: res.found, tried: res.tried });
  }
  return results;
}

function main() {
  console.log('Checking link targets exist for en and fi...');
  const en = checkLang('en');
  const fi = checkLang('fi');
  const bad = [...en,...fi].filter(r => !r.ok);
  if (bad.length === 0) {
    console.log('All menu hrefs have matching page files (en + fi).');
    process.exit(0);
  }
  console.log('Missing pages for the following hrefs:');
  for (const b of bad) {
    console.log('-', b.href);
  }
  process.exit(2);
}

main();
