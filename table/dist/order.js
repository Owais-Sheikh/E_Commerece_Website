"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
            productId: { type: String },
            quantity: { type: Number, "default": 1 }
        }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, "default": 'Pending', required: true }
}, { timestamps: true });
mongoose.models = {};
exports["default"] = mongoose.model("Order", OrderSchema);
