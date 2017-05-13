module.exports = function(sequelize, DataTypes) {
	var Category = sequelize.define(
		"Category",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {}
			}
		},
		{
			classMethods: {
				associate: function(models) {
					Category.hasMany(
						models.Product,
						{
						//onDelete: "cascade"
						}
					);
				}
			},
			//timestamps: false
		}
	);

	return Category;
};
