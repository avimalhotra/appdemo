require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.static('src/public'));
const nunjucks=require('nunjucks');
const path=require('path');

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
    res.status(404).render('error.html',{name:"404 - Page not found"})
})

app.listen(process.env.PORT,()=>{
    console.log(`app running at http://127.0.0.1:${process.env.PORT}`)
});