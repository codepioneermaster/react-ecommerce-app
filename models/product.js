module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define('Product',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {}
        },
        price: {
            type: DataTypes.DECIMAL,
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
                    // Product.belongsToMany(Order, {
                    //  through: 'ProductOrder'
                    // });
                }
            },
            //timestamps: false
        }
    );

    return Product;
};
