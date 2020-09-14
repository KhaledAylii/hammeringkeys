const express = require('express');
const BlogPost = require('../models/blogPost');

const router = express.Router();

router.get('/api/posts', (req, res) => {
    BlogPost.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.err(err);
        });
});
