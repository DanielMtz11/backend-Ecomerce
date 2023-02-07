const DataTypes = require("sequelize").DataTypes;
const _ProductInOrder = require("./ProductInOrder");
const _car = require("./car");
const _order = require("./order");
const _product = require("./product");
const _productInCar = require("./productInCar");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const ProductInOrder = _ProductInOrder(sequelize, DataTypes);
  const productInCar = _productInCar(sequelize, DataTypes);

  productInCar.belongsTo(car, { as: "car", foreignKey: "carId"});
  car.hasMany(productInCar, { as: "productInCar", foreignKey: "carId"});
  ProductInOrder.belongsTo(order, { as: "order", foreignKey: "orderId"});
  order.hasMany(ProductInOrder, { as: "ProductInOrder", foreignKey: "orderId"});
  ProductInOrder.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(ProductInOrder, { as: "ProductInOrder", foreignKey: "productId"});
  productInCar.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(productInCar, { as: "productInCar", foreignKey: "productId"});
  car.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasOne(car, { as: "car", foreignKey: "userId"});
  order.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(order, { as: "orders", foreignKey: "userId"});
  product.belongsTo(users, { as: "seller", foreignKey: "userId"});
  users.hasMany(product, { as: "products", foreignKey: "userId"});

  return {
    ProductInOrder,
    car,
    order,
    product,
    productInCar,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
