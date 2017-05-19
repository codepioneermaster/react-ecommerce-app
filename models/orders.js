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
      purchasePrice: {
   		  type: DataTypes.DECIMAL(10,2),
        allowNull: false
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
                    Order.belongsTo(models.Billing, {
                        foreignKey: {
                            allowNull: false,
                            targetKey: 'orderId'
                        }
                    });

                    Order.belongsTo(models.Shipping, {
                        foreignKey: {
                            allowNull: false,
                            targetKey: 'orderId'
                        }
                    });
                }
            },
            // timestamps: false
        }
  	);
		return Order;
}