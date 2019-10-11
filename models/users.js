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
    },
    timestamp: {
        type: Date,
        default: Date.now        
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;