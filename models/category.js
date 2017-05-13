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
					Category.hasMany(models.Product);
				}
			},
			//timestamps: false
		}
	);

	return Category;
};
