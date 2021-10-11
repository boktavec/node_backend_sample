const express = require("express");
const GetBlogs = require("../controller/getBlogs");
const PostBlog = require("../controller/PostBlog");
const GetComments = require("../controller/getComments");
const PostComment = require("../controller/postComment");

const router = express.Router();

router.post("/blog/:id", GetBlogs);
router.get("/blog/post", PostBlog);
router.post("/blog/post/:id/comment", GetComments);
router.get("/blog/post/:id/comment", PostComment);

module.exports = router;
