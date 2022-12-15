const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  Skills: {
    type: String,
    required: true
  },
  gmail: {
    type: String,
    required: true
  },
  contactnumber: {
    type: String,
    required: true
  },
  refferedby: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;