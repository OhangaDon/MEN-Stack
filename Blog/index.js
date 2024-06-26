const BlogPost = require('./models/BlogPost.js')

const express = require("express")
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser: true})
const app = new express()
const ejs = require('ejs')
app.set('view engine','ejs')
app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(4000,()=>{
    console.log('App listening on port 4000')
})
app.get("/",(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('index');
})
app.get('/about',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})
app.get('/contact',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})
app.get('/post',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})
app.get('/posts/new',(req,res)=>{
    res.render('create')
})
app.post('/posts/store',(req,res)=>{
    // model creates a new doc with browser data 
    BlogPost.create(req.body).
    then(blogpost =>{
        console.log(blogpost)
    res.redirect('/')
    }).
    catch(error => {

    })
})