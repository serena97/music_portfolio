var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Post = require('./database/models/Post');
const fs = require('fs')
var fileupload = require("express-fileupload");

var app = express();
app.use(fileupload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hi')
});

app.post('/api/post/createpost', (req, res) => {
  const { image } = req.files
  // mv() method places file in upload dir
  image.mv(path.resolve(__dirname, 'blog_images', image.name), (error) => {
    Post.create({
      ...req.body,
      image: `blog_images/${image.name}`
     } , (error, post) => {
      res.redirect('/')
    })
  })
});

app.get('/api/get/allposts', async (req, res) => {
  const posts = await Post.find({})
  res.send(posts)
})

app.get('/api/get/post', async (req, res) => {
  console.log('getting postid', req.query.id)
  const post = await Post.findById(req.query.id).lean();
  post.createdAt = post.createdAt.toDateString() // move to utilities
  const fileName = post.image
  console.log(fileName)
  // post.image = fs.readFileSync('blog_images', fileName)
  res.sendFile(fileName, {root: __dirname})
  // return res.send(post)
})

mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true })
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.error('Something went wrong', err))

module.exports = app;
