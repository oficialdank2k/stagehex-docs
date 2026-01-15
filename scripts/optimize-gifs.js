#!/usr/bin/env node
/**
 * Script para otimizar GIFs usando gifsicle
 * Uso: node scripts/optimize-gifs.js
 */

const { execSync } = require('child_process');
const { glob } = require('glob');
const fs = require('fs');
const path = require('path');

// Configurações de otimização
const CONFIG = {
  optimize: 3,        // Nível de otimização (1-3)
  colors: 128,        // Número de cores (mais cores = melhor qualidade)
  lossy: 30,          // Nível de compressão lossy (0-200, menor = melhor qualidade)
  scale: 1.0,         // Escala (1.0 = manter tamanho original)
  loop: true,         // Loop infinito
};

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function optimizeGif(gifPath) {
  const originalSize = fs.statSync(gifPath).size;
  const tempPath = gifPath.replace('.gif', '.tmp.gif');

  const args = [
    `-O${CONFIG.optimize}`,
    `--colors=${CONFIG.colors}`,
    `--lossy=${CONFIG.lossy}`,
  ];

  if (CONFIG.scale !== 1.0) {
    args.push(`--scale=${CONFIG.scale}`);
  }

  if (CONFIG.loop) {
    args.push('--loopcount=0');
  }

  args.push(`"${gifPath}"`);
  args.push('-o');
  args.push(`"${tempPath}"`);

  try {
    execSync(`gifsicle ${args.join(' ')}`, { stdio: 'pipe' });

    // Substituir original pelo otimizado
    fs.unlinkSync(gifPath);
    fs.renameSync(tempPath, gifPath);

    const finalSize = fs.statSync(gifPath).size;
    const reduction = ((originalSize - finalSize) / originalSize * 100).toFixed(0);

    console.log(`  ✔ ${path.basename(gifPath)}`);
    console.log(`    ${formatSize(originalSize)} → ${formatSize(finalSize)} (${reduction}% redução)`);

    return { original: originalSize, final: finalSize };
  } catch (error) {
    // Limpar arquivo temp se existir
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    console.log(`  ✖ ${path.basename(gifPath)}: ${error.message}`);
    return { original: originalSize, final: originalSize };
  }
}

async function main() {
  console.log('═'.repeat(60));
  console.log('GIF Optimizer (gifsicle via npm)');
  console.log('═'.repeat(60));
  console.log(`\nConfigurações:`);
  console.log(`  • Otimização: -O${CONFIG.optimize}`);
  console.log(`  • Cores: ${CONFIG.colors}`);
  console.log(`  • Lossy: ${CONFIG.lossy}`);
  console.log(`  • Escala: ${CONFIG.scale * 100}%`);
  console.log(`  • Loop: ${CONFIG.loop ? 'infinito' : 'desativado'}`);
  console.log('─'.repeat(60));

  // Encontrar todos os GIFs
  const gifs = await glob('.gitbook/assets/gif/**/*.gif');

  if (gifs.length === 0) {
    console.log('Nenhum GIF encontrado.');
    return;
  }

  console.log(`\nEncontrados ${gifs.length} GIF(s)\n`);

  let totalOriginal = 0;
  let totalFinal = 0;

  for (const gif of gifs) {
    const result = await optimizeGif(gif);
    totalOriginal += result.original;
    totalFinal += result.final;
  }

  console.log('─'.repeat(60));
  const totalReduction = ((totalOriginal - totalFinal) / totalOriginal * 100).toFixed(0);
  console.log(`\nTOTAL: ${formatSize(totalOriginal)} → ${formatSize(totalFinal)} (${totalReduction}% redução)`);
  console.log('Loop infinito aplicado em todos os GIFs!');
}

main().catch(console.error);
