const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = path.join(__dirname, "..", "src", "img");
const outDir = path.join(srcDir, "optimized");

const sizes = [480, 800, 1200];

async function ensureOut() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
}

function isImage(file) {
  return /\.(jpe?g|png|webp|avif)$/i.test(file);
}

async function processFile(file) {
  const input = path.join(srcDir, file);
  const base = path.parse(file).name;

  for (const size of sizes) {
    const webpOut = path.join(outDir, `${base}-${size}.webp`);
    const avifOut = path.join(outDir, `${base}-${size}.avif`);

    try {
      await sharp(input)
        .resize({ width: size })
        .webp({ quality: 75 })
        .toFile(webpOut);
      await sharp(input)
        .resize({ width: size })
        .avif({ quality: 60 })
        .toFile(avifOut);
      console.log(`Created ${webpOut} and ${avifOut}`);
    } catch (err) {
      console.error(`Failed to process ${input}:`, err.message);
    }
  }
}

async function run() {
  await ensureOut();
  const files = fs.readdirSync(srcDir).filter((f) => isImage(f));
  for (const file of files) {
    // skip the optimized directory files
    if (file === "optimized") continue;
    await processFile(file);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
