#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function collectFiles(dir, exts=['.astro','.md','.ts','.js','.mjs']){
  const out = [];
  function walk(d){
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for(const e of entries){
      const p = path.join(d, e.name);
      if(e.isDirectory()) walk(p);
      else if(e.isFile() && exts.includes(path.extname(p))) out.push(p);
    }
  }
  if(fs.existsSync(dir)) walk(dir);
  return out;
}

async function main(){
  const root = 'src';
  const files = collectFiles(root);
  let changed = 0;
  for(const f of files){
    let src = fs.readFileSync(f,'utf8');
    if(src.includes('\uFFFD')){
      const out = src.replace(/\uFFFD+/g,'');
      fs.writeFileSync(f,out,'utf8');
      changed++;
      console.log('Fixed', f);
    }
  }
  console.log(`Scanned ${files.length} files; fixed ${changed} files with replacement characters.`);
}

main().catch(err=>{console.error(err); process.exit(1);});
