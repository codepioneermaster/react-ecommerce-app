module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define(
    "Cart",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,10]
        }
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Cart.belongsTo(
            models.Product,
            {
              //onDelete: "cascade"
            }
          ), Cart.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
      //timestamps: false
    }
  );
  return Cart;
};
