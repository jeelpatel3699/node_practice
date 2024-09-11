const express = require('express');
// executable 
const app = express();
app.get('',(req,resp)=>{
    // get request value
    // console.log('request sent by broweser',req.query);
    resp.send(`<h1>hello this is home page</h1> 
        <a href="/about">Go to about page </a>
        `)
});
app.get('/about',(req,resp)=>{
    resp.send(`
        <input type="text" placeholder="username" value = ${req.query.name}></input>
        <button>Click me</button>
        <a href ="/">Go to home  page </a>
        `)

});
app.get('/help',(req,resp)=>{
    resp.send([
        {
        name:'jeel',
        email:'jeel@gmail.com'
        },
        {
        name:'kanha',
        email:'kanha@gmail.com'
        }
]);
});
// create server
app.listen(5000)