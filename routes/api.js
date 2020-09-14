const express = require('express');
const BlogPost = require('../models/blogPost');
const postsRouter = require('./posts');

const router = express.Router();

router.use('/api', postsRouter);

module.exports = router;
