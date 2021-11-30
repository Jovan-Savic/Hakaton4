const monguse = require("mongoose");

const BlogSh = new monguse.Schema({
    Text: {
        type: String,
        trim: true,
        required: true,
    },
    Name: {
        type: String,
        trim: true,
        required: true,
    },
    Likes: {
        type: Number,
        required: true,
    },
    Picture: {
        type: String,
        trim: true,
        required: true,
    },
});

module.exports = monguse.model("Blog_posts", BlogSh);