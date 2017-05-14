module.exports = function(sequelize, DataTypes) {
		var Order = sequelize.define('Order',{
			id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      orderId: {
      	type: DataTypes.INTEGER
      },
      quantity: {
      	type: DataTypes.INTEGER
      },
      price: {
   		  type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {}
      },
      ccLast4: {
         type: DataTypes.INTEGER,
      }

		},
        {
            classMethods: {
                associate: function(models) {
                    Order.belongsTo(models.Product);
                    Order.belongsTo(models.User);
                    Order.belongsTo(models.Billing);
                    Order.belongsTo(models.Shipping);
                }
            },
            timestamps: false
        }
  	);
		return Order;
}