const Comment = require("../models/comment");

postComment = (req, res) => {
  const body = req.body;
  const id = req.params.id;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a comment",
    });
  }

  const comment = new Comment(body);
  comment.blogID = id;

  if (!comment) {
    return res.status(400).json({ success: false, error: err });
  }

  comment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: comment._id,
        message: "Comment post created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Comment post not created!",
      });
    });
};

module.exports = postComment;
