module.exports = function(sequelize, DataTypes) {
	var Category = sequelize.define(
		"Category",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
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
			}
		}
	);

	return Category;
};
