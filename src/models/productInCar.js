const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return productInCar.init(sequelize, DataTypes);
}

class productInCar extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'car',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productInCar',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productInCar_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
