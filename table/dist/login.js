"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var LoginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });
mongoose.models = {};
exports["default"] = mongoose.model("login", LoginSchema);
