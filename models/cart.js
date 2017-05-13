module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define(
    "Cart",
    {

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
