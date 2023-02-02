const authRoutes = require("./auth.routes");
const ProductRoutes = require("./products.routes");


const ecomerceRouter = (app)=>{

    app.use("/api/v1/auth",authRoutes);
    app.use("/api/v1/products",ProductRoutes);
}


module.exports = ecomerceRouter;