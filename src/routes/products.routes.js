const {Router} = require ('express');
const {createProduct, getProducts, deleteProducts, addToCar} = require("../controllers/products.controllers"); 

const router = Router();

router.post("/new", createProduct);
router.get("/show", getProducts);
router.delete("/delete", deleteProducts);

module.exports = router;