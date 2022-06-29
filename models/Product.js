import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({    
    title: {
        type:String,
        required:true
    },
    productType: {
        type:String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    discountPrice: {
        type: Number,
        required:true
    },
    discountPercentage: {
        type: Number,
        required:true
    },
    partNumber: {
        type:String,
        required:true
    },
    idealFor: {
        type:String,
        required:true
    },
    coverIncluded: {
        type:String,
        required:true
    },
    color: {
        type:String,
        required:true
    },
    salesPakage: {
        type:String,
        required:true
    },
    sportsType: {
        type:String,
        required:true
    },
    imageUrl: {
        type:String,
        required:true
    }
}) 

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;