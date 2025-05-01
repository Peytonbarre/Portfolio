const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 180];
const inputFile = path.join(__dirname, '../public/favicon.svg');
const outputDir = path.join(__dirname, '../public');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate PNG favicons
sizes.forEach(size => {
  const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
  sharp(inputFile)
    .resize(size, size)
    .png()
    .toFile(outputFile)
    .then(() => console.log(`Generated ${outputFile}`))
    .catch(err => console.error(`Error generating ${outputFile}:`, err));
});

// Generate Apple touch icon
const appleOutputFile = path.join(outputDir, 'apple-touch-icon.png');
sharp(inputFile)
  .resize(180, 180)
  .png()
  .toFile(appleOutputFile)
  .then(() => console.log(`Generated ${appleOutputFile}`))
  .catch(err => console.error(`Error generating ${appleOutputFile}:`, err)); 