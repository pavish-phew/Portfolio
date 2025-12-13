import fs from 'fs';
import path from 'path';

try {
    const src = path.resolve('src/assets/profile.jpg');
    const dest = path.resolve('public/favicon.jpg');
    fs.copyFileSync(src, dest);
    console.log('Success: Copied profile.jpg to favicon.jpg');
} catch (error) {
    console.error('Error:', error);
}
