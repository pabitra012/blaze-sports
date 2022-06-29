import mongoose from 'mongoose';

const featureProductSchema = new mongoose.Schema({
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
    description: {
        type:String,
        required:true
    },
    imageUrlMain: {
        type:String,
        required:true
    },
    imageUrlSideOne: {
        type:String,
        required:true
    },
    imageUrlSideTwo: {
        type:String,
        required:true
    },
    imageUrlSideThree: {
        type:String,
        required:true
    },
    imageUrlSideFour: {
        type:String,
        required:true
    },
})

const FeatureProductModel = mongoose.model("featureProduct", featureProductSchema);
export default FeatureProductModel;