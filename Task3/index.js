const fs = require('fs');


fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  
  const words = data.split(/\s+/).filter(word => word.trim() !== '');
  const wordCount = words.length;

 
  console.log('Total word count:', wordCount);
});
