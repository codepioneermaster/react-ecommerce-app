module.exports = function(sequelize, DataTypes) {
		var Billing = sequelize.define('Billing',{
			id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
      }

		},
        {
            classMethods: {
                associate: function(models) {
                   // Billing.belongsTo(models.Order, {
                   //      foreignKey: {
                   //          allowNull: false
                   //      }
                   //  });
                   Billing.hasMany(models.Order);
                }
            },
            timestamps: false
        }
  	);
		return Billing;
}

