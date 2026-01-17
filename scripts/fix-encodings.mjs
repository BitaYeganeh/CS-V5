#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const exts = new Set(['.astro','.md','.html','.js','.ts','.json','.css','.svelte','.txt','.jsx','.tsx']);

const git = execSync('git ls-files', { encoding: 'utf8' }).split('\n').filter(Boolean);
let files = git.filter(f => exts.has(path.extname(f).toLowerCase()));

const fixed = [];
for (const file of files) {
  try {
    const buf = fs.readFileSync(file);
    let utf8str;
    try {
      utf8str = buf.toString('utf8');
    } catch (e) {
      utf8str = null;
    }

    // Heuristics for mojibake / non-utf8 content
    const hasReplacement = utf8str && utf8str.includes('\uFFFD');
    const hasMojibake = utf8str && /Ã[\x80-\xBF]|Â|â|â|Å|Ã¤|Ã¶|Ã¥/.test(utf8str);
    const missingUtf8 = !utf8str;

    if (missingUtf8 || hasReplacement || hasMojibake) {
      const latin = buf.toString('latin1');
      // If latin contains nordic characters but utf8 didn't, it's a good sign
      const latinHasNordic = /[äöåÄÖÅ]/.test(latin);
      const utf8HasNordic = utf8str && /[äöåÄÖÅ]/.test(utf8str);

      if (missingUtf8 || hasReplacement || (latinHasNordic && !utf8HasNordic) || hasMojibake) {
        const backup = file + '.bak-encoding';
        if (!fs.existsSync(backup)) fs.copyFileSync(file, backup);
        fs.writeFileSync(file, latin, 'utf8');
        fixed.push(file);
        console.log('fixed:', file);
      }
    }
  } catch (err) {
    // ignore unreadable files
    console.error('error reading', file, err.message);
  }
}

console.log(`Done. Fixed ${fixed.length} files.`);
process.exit(0);
