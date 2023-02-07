const authRoutes = require("./auth.routes");
const ProductRoutes = require("./products.routes");
const carRoutes = require("./car.routes");
// const userRoutes = require("./user.routes");


const ecomerceRouter = (app)=>{

    app.use("/api/v1/auth",authRoutes);
    app.use("/api/v1/products",ProductRoutes);
    app.use("/api/v1/car",carRoutes);
    // app.use("/api/v1/user:/id", userRoutes);
}


module.exports = ecomerceRouter;