module.exports = function(sequelize, DataTypes) {
		var Billing = sequelize.define('Billing',{
			id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      billingName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      billingAddress: {
         type: DataTypes.STRING,
         allowNull: false
      },
      billingCity: {
         type: DataTypes.STRING,
         allowNull: false
      },
      billingState: {
         type: DataTypes.STRING,
         allowNull: false
      },
      billingZip: {
         type: DataTypes.INTEGER,
         allowNull: false,
         validate: {
            len: [5]
         }
      },
      billingCountry: {
         type: DataTypes.STRING,
      },
      billingPhone: {
         type: DataTypes.STRING,
         validate: {
            len: [0,10]
         }
      }

		},
        {
            classMethods: {
                associate: function(models) {
                   Billing.hasMany(models.Order);
                }
            },
            timestamps: false
        }
  	);
		return Billing;
}

