var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define(
		"User",
		{
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
				unique: true,
				validate: {
					isEmail: true
				}
			},
			pwd: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [5]
				}
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		},
		{
			classMethods: {
				associate: function(models) {
					User.hasMany(models.Cart);
					User.hasMany(models.Order);
				}
			},
			instanceMethods: {
				validPassword: function(pwd) {
					return bcrypt.compareSync(pwd, this.pwd);
				}
			},
			hooks: {
				beforeCreate: function(user, options, cb) {
					user.pwd = bcrypt.hashSync(
						user.pwd,
						bcrypt.genSaltSync(10),
						null
					);
					cb(null, options);
				}
			}
		},
    {
      //timestamps: false
    }
  );

	return User;
};
