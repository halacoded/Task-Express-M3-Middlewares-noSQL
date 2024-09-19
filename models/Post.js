const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String },
  body: { type: String },
  image: { type: String },
});

module.exports = model("Post", PostSchema);
