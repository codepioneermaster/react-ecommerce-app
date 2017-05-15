module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define('Product',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {}
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {}
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
        {
            classMethods: {
                associate: function(models) {
                    Product.belongsTo(models.Category, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Product.hasMany(models.Cart);
                    Product.hasMany(models.Order);
                }
            },
            //timestamps: false
        }
    );

    return Product;
};
