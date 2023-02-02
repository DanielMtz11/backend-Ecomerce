const {Router} = require ('express');
const {createProduct, getProducts} = require("../controllers/products.controllers"); 

const router = Router();

router.post("/new", createProduct);
router.get("/show", getProducts);

module.exports = router;