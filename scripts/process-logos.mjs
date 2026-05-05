import sharp from 'sharp';
import { rename } from 'fs/promises';
import { resolve } from 'path';

const ROOT = resolve('public');

async function removeBlackBackground(inputPath, { brightnessBoost = false, threshold = 40 } = {}) {
  let pipeline = sharp(inputPath).ensureAlpha();

  if (brightnessBoost) {
    pipeline = pipeline.modulate({ brightness: 1.25, saturation: 1.15 });
  }

  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r < threshold && g < threshold && b < threshold) {
      // Near-black → fully transparent
      data[i + 3] = 0;
    } else if (r < threshold * 2 && g < threshold * 2 && b < threshold * 2) {
      // Dark edge pixels → partially transparent for smoother anti-aliasing
      const brightness = (r + g + b) / 3;
      data[i + 3] = Math.round((brightness / (threshold * 2)) * 255);
    }
  }

  const tmp = inputPath + '.tmp';
  await sharp(Buffer.from(data), { raw: { width, height, channels } }).png().toFile(tmp);
  await rename(tmp, inputPath);
  console.log(`✓ ${inputPath}`);
}

await removeBlackBackground(`${ROOT}/bird-favicon.png`);
await removeBlackBackground(`${ROOT}/Untitled_design_(5).png`, { brightnessBoost: true });
