const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Input and output paths
const inputPath = path.join(__dirname, "public/images/logos/worklink-logo.png");
const outputPath = path.join(
  __dirname,
  "public/images/logos/worklink-logo-no-bg.png"
);

// Process the logo - remove white background
sharp(inputPath)
  .removeAlpha()
  .toFile(outputPath, (err, info) => {
    if (err) {
      console.error("Error processing image:", err);
    } else {
      console.log("Logo processed successfully:", info);
    }
  });

// Alternative: Create optimized SVG-friendly version
console.log("Processing logo...");
