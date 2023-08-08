const express = require("express");
const path = require("path");
const fs = require("fs");
const port = 80;
const app = express();

const home = fs.readFileSync('./home.html','utf-8');
const about = fs.readFileSync('./about.html','utf-8');
const services = fs.readFileSync('./services.html','utf-8');
const contact = fs.readFileSync('./contact.html','utf-8');
const login = fs.readFileSync('./login.html','utf-8');
const signup = fs.readFileSync('./signup.html','utf-8');
const blog = fs.readFileSync('./blog.html','utf-8');
const read1 = fs.readFileSync('./read1.html','utf-8');
const read2 = fs.readFileSync('./read2.html','utf-8');
const read3 = fs.readFileSync('./read3.html','utf-8');
const read4 = fs.readFileSync('./read4.html','utf-8');
const read5 = fs.readFileSync('./read5.html','utf-8');
const read6 = fs.readFileSync('./read6.html','utf-8');
const plans = fs.readFileSync('./plans.html','utf-8');
const privacy = fs.readFileSync('./privacy.html','utf-8');
const terms = fs.readFileSync('./terms.html','utf-8');
const subscribe = fs.readFileSync('./subscribe.html','utf-8');
app.use('/static',express.static('static'))
app.use(express.urlencoded());

app.get("/",(req,res)=>
{
    res.send(home);
})
app.get("/about",(req,res)=>{
    res.end(about);
})
app.get("/services",(req,res)=>{
    res.send(services);
})
app.get("/contact",(req,res)=>{
    res.end(contact);
})
app.get("/login",(req,res)=>{
    res.end(login);
})
app.get("/signup",(req,res)=>{
    res.end(signup);
})
app.get("/blog",(req,res)=>{
    res.end(blog);
})
app.get("/read1",(req,res)=>{
    res.end(read1);
})
app.get("/read2",(req,res)=>{
    res.end(read2);
})
app.get("/read3",(req,res)=>{
    res.end(read3);
})
app.get("/read4",(req,res)=>{
    res.end(read4);
})
app.get("/read5",(req,res)=>{
    res.end(read5);
})
app.get("/read6",(req,res)=>{
    res.end(read6);
})
app.get("/plans",(req,res)=>{
    res.end(plans);
})
app.get("/privacy",(req,res)=>{
    res.end(privacy);
})
app.get("/terms",(req,res)=>{
    res.end(terms);
})
app.get("/subscribe",(req,res)=>{
    res.end(subscribe);
})
app.listen(port,()=>
{
    console.log(`The application started successfully on port ${port}`);
})