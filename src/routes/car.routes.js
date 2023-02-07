const {Router} = require('express');
const {getcars, deleteCar, addToCar, getProductsIncar} = require("../controllers/car.controllers");
const router = Router();

router.get("/", getcars);
router.delete("/delete", deleteCar);
router.post("/addProduct", addToCar);
router.get("/user/:id", getProductsIncar); //obtener los products que un user tiene en su car


module.exports = router;
