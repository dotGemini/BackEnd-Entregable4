import { ProductManager } from "./prodManager/ProductManager.js";

const productsUpdated = async (io) => {
    const productManager = new ProductManager('./src/prodManager/database.json');
    const products = await productManager.getProducts();
    io.emit('productsUpdated', products)
};

export { productsUpdated };