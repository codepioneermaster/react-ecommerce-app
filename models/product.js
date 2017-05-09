module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("product", {
      	id: {
        	type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
        	type: DataTypes.STRING,
        	allowNull: false,
        	validate: {}
        },
        price: {
        	type: DataTypes.INTEGER,
        	allowNull: false,
        	validate: {}
        },
        img: {
        	type: DataTypes.STRING,
        	allowNull: false,
        	validate: {}
        },
        desc: {
        	type: DataTypes.TEXT,
        	allowNull: false,
        	validate: {}
        },
        category: {
        	type: DataTypes.STRING, 
        	allowNull: false,
        	validate: {}
        }, 
        quantity: {
        	type: DataTypes.INTEGER, 
        	allowNull: false,
        	validate: {}
        },
        {
        classMethods: {
            associate: function(models) {
                Product.belongsTo(models.Category, {
                    foreignKey: {
                        //allowNull: false
                    }
                }
            }
        }
        }

    });

    return Product;

};
