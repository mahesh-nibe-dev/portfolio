const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (content.includes('react-reveal')) {
      const isComponent = filePath.includes(path.join('src', 'components')) && !filePath.includes(path.join('src', 'components', 'motion'));
      const isContainer = filePath.includes(path.join('src', 'containers'));
      
      let relativePath = '../../components/motion/Reveal';
      if (isComponent) {
        relativePath = '../motion/Reveal';
      }

      content = content.replace(/from "react-reveal"/g, `from "${relativePath}"`);
      content = content.replace(/from 'react-reveal'/g, `from '${relativePath}'`);
      
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
      }
    }
  }
});
