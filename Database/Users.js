const monguse = require("mongoose");

const UserSh = new monguse.Schema({
    User: {
        type: String,
        trim: true,
        required: true,
    },
    Password: {
        
    },
});