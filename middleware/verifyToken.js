import jwt from "jsonwebtoken";
const TOKEN_KEY = "sdhidhfdv";

export const verifyToken = (req, res, next) => {
    const {token} = req.body;

    // if (!token) return res.status(401).json('Unauthorize user')
    if (!token) {
        req.isTokenValid = false;
        return next()
    }

    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded
        console.log(decoded)
        req.isTokenValid = true;
        next();        
    } catch (e) {
        // res.status(400).json('Token not valid')
        req.isTokenValid = false;
        next();
    }
}