import path from 'path';
import express from 'express';
import multer from 'multer';

import { createFeaturedProduct, createProduct } from '../controller/adminController.js';

const __dirname = path.resolve(); 
console.log(__dirname) 

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/photos");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
})

const upload = multer({storage: fileStorageEngine})

const router = express.Router();

router.post('/addProduct', upload.single("image"), createProduct)

router.post('/addFeaturedProduct', upload.array("images"), createFeaturedProduct)

export default router;