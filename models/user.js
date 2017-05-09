module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("user", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
            primaryKey: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {}
		},
		pwd: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {}
		}
	});
	
	return User;
};
