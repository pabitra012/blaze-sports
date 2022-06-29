import path from 'path';
import cors from 'cors';
import express from 'express';

import adminRouter from './routes/adminRouter.js'
import productRouter from './routes/productRouter.js';
import userRouter from './routes/useRouter.js';
import dbConnect from './utils/db.js';


const __dirname = path.resolve();

const app = express();

dbConnect();
app.listen(5000, () => console.log("listening....."));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs"); //ejs 

app.use('/user', userRouter)

// create delete edit operations done in this routes
app.use('/admin', adminRouter)

// only for users
app.use('/product', productRouter)


app.use((req, res) => res.render("404.ejs")) //404 page

//base route
app.get("/", (req, res) => res.send("welcome"))

