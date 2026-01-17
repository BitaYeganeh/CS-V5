#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const root = path.join('src','pages','fi');
const bakSuffix = '.bak-placeholder';
let modified = [];

async function walk(dir){
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for(const ent of entries){
    const full = path.join(dir, ent.name);
    if(ent.isDirectory()) await walk(full);
    else if(ent.isFile() && full.endsWith('.astro')) await processFile(full);
  }
}

async function processFile(file){
  let s = await fs.readFile(file, 'utf8');
  if(!s.includes('<!-- FI-AUGMENTED -->')) return;

  const original = s;
  // remove the FI-AUGMENTED comment
  s = s.replace(/<!--\s*FI-AUGMENTED\s*-->/i, '');

  // remove following section with class containing fi-placeholder
  s = s.replace(/<section\b[\s\S]*?class=["'][^"']*fi-placeholder[^"']*["'][\s\S]*?<\/section>\s*/i, '');

  // remove leading blank lines (up to 2) after frontmatter
  s = s.replace(/\n{3,}/g, '\n\n');

  if(s !== original){
    await fs.copyFile(file, file + bakSuffix);
    await fs.writeFile(file, s, 'utf8');
    modified.push(file);
    console.log('updated', file);
  }
}

(async ()=>{
  try{
    await walk(root);
    console.log(`Done. Updated ${modified.length} files.`);
    if(modified.length) console.log(modified.join('\n'));
  }catch(err){
    console.error('error', err.message);
    process.exit(2);
  }
})();
