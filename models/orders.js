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
                    // Order.hasMany(models.Shipping);
                    // Order.hasMany(models.Billing);
                    Order.belongsTo(models.Billing, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Order.belongsTo(models.Shipping, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            },
            timestamps: false
        }
  	);
		return Order;
}