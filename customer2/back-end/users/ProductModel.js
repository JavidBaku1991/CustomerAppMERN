const mongoose = require('mongoose');


const ProductsSchema=mongoose.Schema({
    saleId:String,
    name: {
    type: String,    },
    date: { type: Date,},
    totalSale:Number,
    descriprion:String
})


module.exports=mongoose.model('products', ProductsSchema);