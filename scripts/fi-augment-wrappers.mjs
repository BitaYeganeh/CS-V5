#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function collectFiles(dir){
  const out = [];
  function walk(d){
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for(const e of entries){
      const p = path.join(d, e.name);
      if(e.isDirectory()) walk(p);
      else if(e.isFile() && p.endsWith('.astro')) out.push(p);
    }
  }
  if(fs.existsSync(dir)) walk(dir);
  return out;
}

async function main(){
  const root = path.join('src','pages','fi');
  const files = collectFiles(root);
  let changed = 0;
  for(const f of files){
    const src = fs.readFileSync(f,'utf8');
    if(/import\s+Page\s+from/.test(src) && /<Page\s*\/?\>/.test(src)){
      if(/<!-- FI-AUGMENTED -->/.test(src)) continue;
      const lines = src.split('\n');
      const importLine = lines.findIndex(l=>/import\s+Page\s+from/.test(l));
      if(importLine === -1) continue;
      const m = lines[importLine].match(/from\s+['"](.*)['"]/);
      const rel = m ? m[1] : '..';

      const header = [
        '<!-- FI-AUGMENTED -->',
        '---',
        `import Page from '${rel}';`,
        '---',
        '',
        '<section class="fi-placeholder max-w-4xl mx-auto py-8">',
        '  <h1 class="text-3xl font-bold mb-3">Tämä sivu on saatavilla suomeksi</h1>',
        '  <p class="text-slate-700 mb-4">Suomenkielinen sisältö on työn alla. Alla on englanninkielinen versio varmuuskopiona.</p>',
        '</section>',
        '',
      ].join('\n');

      const newSrc = src.replace(/---[\s\S]*?---\s*/,'');
      const out = header + newSrc;
      fs.writeFileSync(f,out,'utf8');
      changed++;
    }
  }
  console.log(`Processed ${files.length} fi files, augmented ${changed} wrappers.`);
}

main().catch(err=>{console.error(err); process.exit(1);});
