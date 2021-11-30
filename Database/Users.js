const monguse = require("mongoose");

const UserSh = new monguse.Schema({
    Username: {
        type: String,
        trim: true,
        required: true,
    },
    Password: {
        type: String,
        trim: true,
        required: true,
    },
});

module.exports = monguse.model("User", UserSh);