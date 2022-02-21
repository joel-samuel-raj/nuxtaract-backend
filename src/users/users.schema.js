"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    photo: String,
    dateJoined: {
        type: Date,
        "default": new Date
    },
    rollNumber: Number,
    batch: Number,
    department: String,
    phoneNumber: Number,
    isAdmin: {
        type: Boolean,
        "default": false
    },
    events: [String],
    role: String,
    team: Number
});
