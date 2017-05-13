module.exports = function(sequelize, DataTypes) {
		var Order = sequelize.define('Order',{
			id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            shippingName: {
               type: DataTypes.STRING,
            },
            shippingAddress: {
               type: DataTypes.STRING,
            },
            shippingCity: {
               type: DataTypes.STRING,
            },
            shippingState: {
               type: DataTypes.STRING,
            },
            shippingZip: {
               type: DataTypes.INTEGER,
            },
            shippingCountry: {
               type: DataTypes.STRING,
            },
            shippingPhone: {
               type: DataTypes.STRING,
            },
            billingName: {
               type: DataTypes.STRING,
            },
            billingAddress: {
               type: DataTypes.STRING,
            },
            billingCity: {
               type: DataTypes.STRING,
            },
            billingState: {
               type: DataTypes.STRING,
            },
            billingZip: {
               type: DataTypes.INTEGER,
            },
            billingCountry: {
               type: DataTypes.STRING,
            },
            billingPhone: {
               type: DataTypes.STRING,
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
                    
                }
            },
            timestamps: false
        }
  	);
		return Order;
}