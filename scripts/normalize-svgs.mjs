#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function collectFiles(dir, exts = ['.astro', '.svelte']){
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

function ensureXmlns(svg){
  if(/<svg[^>]*xmlns=/.test(svg)) return svg;
  return svg.replace(/<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
}

async function main(){
  const root = path.join('src','components');
  const files = collectFiles(root);
  let fixed = 0;
  for(const f of files){
    const src = fs.readFileSync(f,'utf8');
    if(src.includes('<svg') && !src.includes('xmlns="http://www.w3.org/2000/svg"')){
      const out = ensureXmlns(src);
      if(out !== src){
        fs.writeFileSync(f,out,'utf8');
        fixed++;
      }
    }
  }
  console.log(`Scanned ${files.length} component files, fixed ${fixed} svg(s) missing xmlns.`);
}

main().catch(err=>{console.error(err); process.exit(1);});
