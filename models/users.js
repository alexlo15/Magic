const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({

    userName: {
        type: String,
        required: true,

    },
    color1: {
        type: String,
        required: true,
    },
    color2: {
        type: String,
        required: true,
    },
    guildMatch: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now        
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;