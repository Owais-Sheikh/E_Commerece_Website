"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true }
}, { timestamps: true });
mongoose.models = {};
exports["default"] = mongoose.model("Product", productSchema);
