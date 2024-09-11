const fs = require('fs')
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/apple.txt`;

// -------create file--------------------------
// fs.writeFileSync(filepath,'this is apple fruit');

// -------read file----------------------------
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);

// })

// ---------append file------------------------
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated");

// })


// ----------rename file-----------------------------
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err)console.log("filr name is updated")

// })

// ----------delete file----------------------------
fs.unlink(`${dirpath}/fruit.txt`,(err)=>{
    if(!err) console.log("file is deleted");
})