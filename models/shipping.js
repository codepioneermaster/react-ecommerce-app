module.exports = function(sequelize, DataTypes) {
		var Shipping = sequelize.define('Shipping',{
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
      }

		},
        {
            classMethods: {
                associate: function(models) {
                    // Shipping.belongsTo(models.Order, {
                    //     foreignKey: {
                    //         allowNull: false
                    //     }
                    // });
                    Shipping.hasMany(models.Order);
                }
            },
            timestamps: false
        }
  	);
		return Shipping;
}

