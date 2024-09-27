const express = require('express');
const app = express();

const reqFilter=(req,resp,next)=>{
    
    if (!req.query.age){
        resp.send('please provide age')
    }
    else if(req.query.age<18){
        resp.send('you can not access this page')
    }
    else{
        next();
    }
    
}

app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send("This is home page")
})

app.get('/users',(req,resp)=>{
resp.send("welcome to users page")

})

app.listen(4000);