import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const assetFile = path.resolve('src/assets/profile.jpg');
const destFile = path.resolve('public/favicon.jpg');

console.log('Public Dir Exists:', fs.existsSync(publicDir));
console.log('Asset File Exists:', fs.existsSync(assetFile));

if (fs.existsSync(assetFile)) {
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
    fs.copyFileSync(assetFile, destFile);
    console.log('Copied file successfully.');
} else {
    console.log('Source file missing!');
}
