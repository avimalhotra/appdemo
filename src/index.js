require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.static('src/public'));
const nunjucks=require('nunjucks');
const path=require('path');
// const mongoose=require('mongoose');
// const dao=require('./dao');
// const Car=require("./models/car");

nunjucks.configure(path.resolve(__dirname,'public'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
});

app.get('/',(req,res)=>{
    res.status(200).render('home.html',{name:"Express App"})
});

app.get('/**',(req,res)=>{
    res.status(404).render('home.html',{name:"404 - Page not found"})
})

app.listen(process.env.PORT,()=>{
    console.log(`app running at http://127.0.0.1:${process.env.PORT}`)
});