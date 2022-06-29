import express from 'express';
import { getLoginControl, postLoginControl, registerControl, userControl } from '../controller/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';


const router = express.Router();


router.get('/login', verifyToken, getLoginControl)
router.post('/login', verifyToken, postLoginControl)


router.get('/register', registerControl)

router.get('/', userControl)

export default router;