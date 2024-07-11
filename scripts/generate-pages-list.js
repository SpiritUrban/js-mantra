// scripts/generate-pages-list.js
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.cwd(), 'pages/source');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Failed to read directory', err);
    process.exit(1);
  }

  const pageFiles = files.filter(file => file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'));

  fs.writeFileSync(
    path.join(process.cwd(), 'pages/api/pages-list.json'),
    JSON.stringify({ files: pageFiles }, null, 2)
  );

  console.log('Pages list generated successfully.');
});
