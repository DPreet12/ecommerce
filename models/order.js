const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:"User" },
    products: [{ product: { type: Schema.Types.ObjectId, ref:"Product"}, 
    quantity: { type: Number, required: true } }],
    total: { type: Number, required: true}
})

module.exports = mongoose.model("Order", orderSchema);
