import path from 'path';
import jwt from "jsonwebtoken";
const TOKEN_KEY = "sdhidhfdv";


const __dirname = path.resolve(); 
console.log(__dirname)

const user_id = "54454444";
const email = "jyotirmoysamadder712@gmail.com";

export const getLoginControl = ( req, res ) => {

    console.log(req.isTokenValid)

    return res.sendFile(path.join(__dirname,'views','user/login.html'))
}

export const postLoginControl = ( req, res ) => {

    console.log(req.isTokenValid)

    const token = jwt.sign({ user_id, email }, TOKEN_KEY, {
        expiresIn: "30d",
    });

    // return res.sendFile(path.join(__dirname,'views','user/login.html'))
    res.json(token)
}

export const registerControl = ( req, res ) => {
    res.sendFile(path.join(__dirname,'views','user/register.html'))
}

export const userControl = ( req, res ) => {
    res.sendFile(path.join(__dirname,'views','user/user.html'))
}