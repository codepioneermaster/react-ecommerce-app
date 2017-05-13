module.exports = function(sequelize, DataTypes) {
		var Order = sequelize.define('Orders',{
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
                // associate: function(models) {
                //     Order.hasMany(models.Product, {
                //         // onDelete: "cascade"
                //     });
                //     Order.hasOne(models.User);
                    
                // }
            },
            timestamps: false
        }
  	);
		return Order;
}