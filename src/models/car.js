const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return car.init(sequelize, DataTypes);
}

class car extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'car',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "car_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
