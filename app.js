const fs = require('fs'),
 zlib=require('zlib'),

compress=zlib.createGzip(),
decompress=zlib.createGunzip(),
readstream=fs.createReadStream('./data.txt');

function compressFile(){
  var writeStream=fs.createWriteStream('./data.txt.gz');

  readstream.pipe(compress).pipe(writeStream);

}
function decompressFile(){
  var writeStream=fs.createWriteStream('./data.txt');
  readstream.pipe(decompress).pipe(writeStream);
}


//decompressFile();
compressFile();
