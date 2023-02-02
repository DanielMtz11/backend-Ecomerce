const DataTypes = require("sequelize").DataTypes;
const _ProductInOrder = require("./ProductInOrder");
const _car = require("./car");
const _order = require("./order");
const _product = require("./product");
const _productInCar = require("./productInCar");
const _user = require("./user");

function initModels(sequelize) {
  const ProductInOrder = _ProductInOrder(sequelize, DataTypes);
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const productInCar = _productInCar(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);

  productInCar.belongsTo(car, { as: "car", foreignKey: "carId"});
  car.hasMany(productInCar, { as: "productInCar", foreignKey: "carId"});
  ProductInOrder.belongsTo(order, { as: "order", foreignKey: "orderId"});
  order.hasMany(ProductInOrder, { as: "ProductInOrder", foreignKey: "orderId"});
  ProductInOrder.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(ProductInOrder, { as: "ProductInOrder", foreignKey: "productId"});
  productInCar.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(productInCar, { as: "productInCar", foreignKey: "productId"});
  car.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasOne(car, { as: "car", foreignKey: "userId"});
  order.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(order, { as: "orders", foreignKey: "userId"});
  product.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(product, { as: "products", foreignKey: "userId"});

  return {
    ProductInOrder,
    car,
    order,
    product,
    productInCar,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
