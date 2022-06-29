import path from 'path';
import Product from '../models/Product.js';
import FeaturedProduct from '../models/FeaturedProducts.js';

import mongoose from 'mongoose';

const __dirname = path.resolve();

export const getAllProduct = async (req, res) => {

    const name = req.params.name;
    const featuredName = name + "Featured";

    try {
        const products = await Product.find({ productType: name });

        try {
            const FeaturedProducts = await FeaturedProduct.find({ productType: featuredName });

            return res.render("product/index.ejs", { products: products, FeaturedProducts:FeaturedProducts })
        } catch (error) {
            console.log(err)
            res.send("not okay")
        }
    } catch (err) {
        console.log(err)
        res.send("not okay")
    }


}


export const getProduct = async (req, res) => {

    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        return res.render("product/backpack.ejs", { product: product })
    } catch (err) {
        console.log(err)
        res.send("not okay")
    }
}