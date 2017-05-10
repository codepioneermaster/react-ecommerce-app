var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user',{
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
	},
	{
		instanceMethods: {
			validPassword: function(pwd) {
				return bcrypt.compareSync(pwd, this.pwd);
			}
		},
		hooks: {
			beforeCreate: function(user, options, cb) {
				user.pwd = bcrypt.hashSync(
					user.pwd,
					bcrypt.genSaltSync(10),null);
				cb(null, options);
			}
		}
	});

	return User;
};
