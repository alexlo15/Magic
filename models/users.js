const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({

    userName: {
        type: String
    },
    color1: {
        type: String
    },
    color2: {
        type: String
    },
    guildMatch: {
        type: String
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;