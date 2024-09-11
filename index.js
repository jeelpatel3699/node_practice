// const app = require('./app');
// console.log(app.x)

// const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write('hello this is jeel patel');
//     resp.end();

// }).listen(5000);
 const express = require('express');
 const path = require('path')
 const app = express();
 const publicpath = path.join(__dirname,'Public');
//  console.log(publicpath)

// ---------static loads static file---------
// app.use(express.static(publicpath));

// --------Remove extention from url-------

app.get('/home',(req,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)

})
app.get('*',(req,resp)=>{
resp.sendFile(`${publicpath}/nofile.html`)

})


 app.listen(5000)
