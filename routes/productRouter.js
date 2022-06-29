import path from 'path';
import express from 'express';
import { getAllProduct, getProduct  } from '../controller/productController.js';

const __dirname = path.resolve(); 
console.log(__dirname) 

const router = express.Router();

// router.get('/test', (req,res) => res.render("product/backpacks/index.ejs", {products: []}))

router.get('/:name', getAllProduct);

router.get('/:name/:id', getProduct);


export default router;