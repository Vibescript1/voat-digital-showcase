import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', '22 stickers black bg.png');
    
    // Check if the input file exists
    if (!fs.existsSync(inputPath)) {
      console.log('Logo file not found. Using existing favicon.ico');
      return;
    }
    
    // Create apple touch icon (180x180)
    await sharp(inputPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
    
    // Create favicon 32x32
    await sharp(inputPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
    
    // Create favicon 16x16
    await sharp(inputPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));
    
    // Create favicon.ico by copying the 32x32 PNG and renaming it
    const source = path.join(__dirname, 'public', 'favicon-32x32.png');
    const destination = path.join(__dirname, 'public', 'favicon.ico');
    
    // Check if the source file exists before copying
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, destination);
      console.log('Favicon.ico created by copying favicon-32x32.png');
    }
    
    console.log('Favicon files created successfully!');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

convertFavicon();