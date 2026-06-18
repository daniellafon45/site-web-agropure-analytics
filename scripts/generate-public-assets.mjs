import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const logoPath = [
  join(root, "src/assets/logo-agropure.png"),
  join(root, "src/assets/logo-agropure-white.png"),
].find(existsSync);

const BRAND = "#1b5e3b";

async function main() {
  if (!logoPath) {
    console.warn("generate-public-assets: logo not found, skipping");
    return;
  }

  mkdirSync(publicDir, { recursive: true });

  await sharp(logoPath)
    .resize(48, 48, { fit: "contain", background: BRAND })
    .png()
    .toFile(join(publicDir, "favicon.png"));

  await sharp(logoPath)
    .resize(180, 180, { fit: "contain", background: BRAND })
    .png()
    .toFile(join(publicDir, "apple-touch-icon.png"));

  const logoBuffer = await sharp(logoPath).resize(420, 120, { fit: "inside" }).png().toBuffer();

  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: BRAND },
  })
    .composite([{ input: logoBuffer, gravity: "center" }])
    .png()
    .toFile(join(publicDir, "og-image.png"));

  const contactPng = join(root, "src/assets/contact-formulaire.png");
  if (existsSync(contactPng)) {
    await sharp(contactPng)
      .resize(1600, undefined, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(join(root, "src/assets/contact-formulaire.webp"));
    console.log("Wrote src/assets/contact-formulaire.webp");
  }

  console.log(
    "Wrote public/favicon.png, apple-touch-icon.png, og-image.png",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
