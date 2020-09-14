const express = require('express');
const BlogPost = require('../models/blogPost');

const router = express.Router();

router.get('/posts', (req, res) => {
    BlogPost.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.err(err);
        });
});

router.post('/posts/create', (req, res) => {
    const newBlogPost = new BlogPost({
        title: req.body && req.body.title,
        body: req.body && req.body.body,
    });
    newBlogPost
        .save()
        .then(res.json('Success'))
        .catch((err) => {
            res.err(err);
        });
});

module.exports = router;
