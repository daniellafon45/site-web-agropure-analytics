import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "videos");
const mediasSource = join(root, "Medias", "video_1.mp4");
const fallbackSource = join(outDir, "hero.mp4");

const source = existsSync(mediasSource) ? mediasSource : fallbackSource;

if (!existsSync(source)) {
  console.error("Source introuvable : Medias/video_1.mp4 ou public/videos/hero.mp4");
  process.exit(1);
}

if (!ffmpeg) {
  console.error("ffmpeg-static indisponible");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

function encode(args, tmpName) {
  const tmp = join(outDir, tmpName);
  execFileSync(ffmpeg, ["-y", "-i", source, ...args, tmp], { stdio: "inherit" });
  return tmp;
}

function mb(path) {
  return `${(statSync(path).size / 1024 / 1024).toFixed(2)} Mo`;
}

console.log(`Source : ${source}`);

const desktopTmp = encode(
  [
    "-vf",
    "scale=1280:-2:flags=lanczos",
    "-c:v",
    "libx264",
    "-profile:v",
    "main",
    "-level",
    "4.0",
    "-pix_fmt",
    "yuv420p",
    "-crf",
    "30",
    "-preset",
    "slow",
    "-movflags",
    "+faststart",
    "-an",
  ],
  "hero-desktop.tmp.mp4",
);

const mobileTmp = encode(
  [
    "-vf",
    "scale=854:-2:flags=lanczos",
    "-c:v",
    "libx264",
    "-profile:v",
    "baseline",
    "-level",
    "3.1",
    "-pix_fmt",
    "yuv420p",
    "-crf",
    "32",
    "-preset",
    "slow",
    "-movflags",
    "+faststart",
    "-an",
  ],
  "hero-mobile.tmp.mp4",
);

const desktopOut = join(outDir, "hero.mp4");
const mobileOut = join(outDir, "hero-mobile.mp4");

function replaceFile(tmp, dest) {
  if (existsSync(dest)) unlinkSync(dest);
  copyFileSync(tmp, dest);
  unlinkSync(tmp);
}

replaceFile(desktopTmp, desktopOut);
replaceFile(mobileTmp, mobileOut);

console.log(`hero.mp4        → ${mb(desktopOut)}`);
console.log(`hero-mobile.mp4 → ${mb(mobileOut)}`);
console.log("Terminé.");
