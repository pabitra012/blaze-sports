import path from 'path';
import FeaturedProduct from '../models/FeaturedProducts.js';
import Product from '../models/Product.js';

const __dirname = path.resolve();

export const createProduct = async (req, res) => {

    const { title, productType, price, discountPrice, discountPercentage, partNumber, idealFor, coverIncluded, color, salesPakage, sportsType } = req.body;


    let imageUrl;

    if (req.file) {
        console.log(req.file.filename)
        imageUrl = `/photos/${req.file.filename}`;
    }

    const newProduct = Product({ title, productType, price, discountPrice, discountPercentage, partNumber, idealFor, coverIncluded, color, salesPakage, sportsType, imageUrl })

    try {
        await newProduct.save();
        return res.status(200).json({message: "Product added successfully!"})
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: error.message})
    }


}

export const createFeaturedProduct = async (req, res) => {
    const { title, productType, price, discountPrice, discountPercentage, description } = req.body;

    let imageUrlMain;
    let imageUrlSideOne;
    let imageUrlSideTwo;
    let imageUrlSideThree;
    let imageUrlSideFour;

    const files = req.files;

    if (files.length > 0) {
        const imageUrls = files.map(item => item.filename)

        imageUrlMain = `/photos/${imageUrls[0]}`;
        imageUrlSideOne = `/photos/${imageUrls[1]}`;
        imageUrlSideTwo = `/photos/${imageUrls[2]}`;
        imageUrlSideThree = `/photos/${imageUrls[3]}`;
        imageUrlSideFour = `/photos/${imageUrls[4]}`;
    }

    const newFeaturedProduct = FeaturedProduct({ title, productType, price, discountPrice, discountPercentage, description, imageUrlMain, imageUrlSideOne, imageUrlSideTwo, imageUrlSideThree, imageUrlSideFour })

    try {
        await newFeaturedProduct.save();
        return res.status(200).json({message: "Feature-Product added successfully!"})
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: error.message})
    }
}














