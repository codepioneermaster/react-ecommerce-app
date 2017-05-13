module.exports = function(sequelize, DataTypes) {
		var Order = sequelize.define('Orders',{
		// 		id: {
  //           type: DataTypes.INTEGER,
  //           autoIncrement: true,
  //           primaryKey: true
  //       }
		// },
  //       {
  //           classMethods: {
  //               associate: function(models) {
  //                   Order.hasMany(models.Product, {
  //                       // onDelete: "cascade"
  //                   });
  //                   // Order.belongsToMany(Product, {
  //                   // 	through: 'ProductOrder'
  //                   // });
  //               }
  //           },
  //           timestamps: false
        }
  	);
		return Order;
}