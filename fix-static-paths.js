const fs = require('fs');
const path = require('path');

function processDir(dir, baseDir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath, baseDir);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Calculate relative path from this html file to baseDir
      const relativePathToBase = path.relative(path.dirname(fullPath), baseDir);
      let prefix = relativePathToBase ? relativePathToBase.replace(/\\/g, '/') : '.';
      if (!prefix.endsWith('/')) prefix += '/';

      // Replace /_next/ with {prefix}_next/
      content = content.replace(/(href|src|fetchPriority)="\/_next\//g, `$1="${prefix}_next/`);
      content = content.replace(/HL\["\/_next\//g, `HL["${prefix}_next/`);
      content = content.replace(/"\/_next\//g, `"${prefix}_next/`);

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed paths in: ${path.relative(baseDir, fullPath)} (prefix: ${prefix})`);
    }
  }
}

const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  processDir(outDir, outDir);
  console.log('Successfully fixed all relative paths for direct file:// browsing!');
}
