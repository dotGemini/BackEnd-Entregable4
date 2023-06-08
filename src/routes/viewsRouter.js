import { Router } from "express";
import { ProductManager } from "../prodManager/ProductManager.js";

const router = Router();

router.get('/', async (req, res) => {
    const productManager = new ProductManager('./src/prodManager/database.json');
    const products = await productManager.getProducts();
    res.render('index', {title: 'ecomerce', products: products})
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {title: 'ecomerce'});
})
export default router;