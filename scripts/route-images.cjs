#!/usr/bin/env node
/**
 * Rotina de roteamento de imagens:
 * - Para cada arquivo em .images/, procura um arquivo com mesmo nome em .gitbook/assets/**
 * - Se encontrar: mv (sobrescreve)
 * - Se for um dos casos especiais com rename conhecido: aplica o rename
 * - Se não encontrar: deixa em .images/ pro usuário decidir
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, '.images');
const ASSETS = path.join(ROOT, '.gitbook', 'assets');

// Renames especiais (origem -> destino completo com nome novo)
const SPECIAL = {
  '4-interface-export-mvr.png': path.join(ASSETS, 'sketchup', 'export-interface', 'export-mvr.png'),
  '5-interface-export-ma2.png': path.join(ASSETS, 'sketchup', 'export-interface', 'export-ma2.png'),
};

function findInAssets(name) {
  const stack = [ASSETS];
  while (stack.length) {
    const dir = stack.pop();
    if (!fs.existsSync(dir)) continue;
    for (const e of fs.readdirSync(dir)) {
      const full = path.join(dir, e);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) stack.push(full);
      else if (e === name) return full;
    }
  }
  return null;
}

const files = fs.readdirSync(SRC).filter(f => /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(f));

const moved = [];
const renamed = [];
const orphaned = [];

for (const name of files) {
  const src = path.join(SRC, name);
  if (SPECIAL[name]) {
    fs.renameSync(src, SPECIAL[name]);
    renamed.push(`${name} -> ${path.relative(ROOT, SPECIAL[name])}`);
    continue;
  }
  const dst = findInAssets(name);
  if (dst) {
    fs.renameSync(src, dst);
    moved.push(`${name} -> ${path.relative(ROOT, path.dirname(dst))}`);
  } else {
    orphaned.push(name);
  }
}

console.log(`=== Movidas (${moved.length}) ===`);
for (const m of moved) console.log('  ' + m);
console.log(`\n=== Renomeadas (${renamed.length}) ===`);
for (const r of renamed) console.log('  ' + r);
console.log(`\n=== Deixadas em .images/ para você decidir (${orphaned.length}) ===`);
for (const o of orphaned) console.log('  ' + o);
