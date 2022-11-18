const puppeteer = require('puppeteer');
let express=require("express");
let app=new express();

app.get('/',(req,res)=>{
  res.send("hello");
});

app.get('/run',(req,res)=>{
  console.log('run');
  (async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
  
    page.goto("https://youtube.com/");
    page.screenshot({path:'./test.png'})
  
    await browser.close();
  })();
  res.send("running")
});

app.get('/listFile',(req,res)=>{
  const fs = require('fs');

  fs.readdir('.', (err, files) => {
    res.send(files)
  });
})

app.listen(8080,()=>console.log('aaa'))