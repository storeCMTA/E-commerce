const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name : String,
  category:String,
  description: String,
  price:Number,
  image:String, //taha (should change it accordingly)
  quantity: Number
},
{
  timestamps: true,
  collection: 'Products'
});

const Product = mongoose.model("Products",itemSchema);
module.exports = {Product}; 
