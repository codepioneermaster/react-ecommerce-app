var db = require("../models");

module.exports = {
	createSeedData: function() {
		db.sequelize.sync({ force: true }).then(function() {
			db.Category
				.bulkCreate([
					{
						name: "Clothing"
					},
					{
						name: "Shoes"
					},
					{
						name: "Assesories"
					}
				])
				.then(function() {
					db.Product
						.bulkCreate([
							{
								name: "Great Shirt",
								price: 34.55,
								img: "https://",
								desc: "This shirt is faboulous",
								quantity: 145,
								CategoryId: 1
							},
							{
								name: "Geezys",
								price: 225.55,
								img: "https://",
								desc: "These Geezys are better than Yeezys",
								quantity: 45,
								CategoryId: 2
							},
							{
								name: "Socks",
								price: 22.99,
								img: "https://",
								desc: "Socks so good theyre socks",
								quantity: 345,
								CategoryId: 3
							},
							{
								name: "Stuff",
								price: 11,
								img: "https://",
								desc: "description",
								quantity: 345,
								CategoryId: 2
							}
						])
						.then(function() {
							db.User.bulkCreate([
								{
									firstName: "Brad",
									lastName: "Carlisle",
									email: "brad@carlisle.com",
									pwd: "$2a$10$SRA8F2QC.Vnsx5N97whEi.nmT1Rz88Bg8rZdTtcegp4WywT9RHT6y"
								},
								{
									firstName: "Mike",
									lastName: "Flight",
									email: "mike@gmail.com",
									pwd: "$2a$10$QohRiClPJgBWWZjb1KLNx.vwrjVRmnlipSOo9nWNfTs9FrfBpp69y"
								},
								{
									firstName: "Jerry",
									lastName: "Jepsen",
									email: "jerry@jepsen.com",
									pwd: "$2a$10$W2K0vNA0i24cROeHvaqDeu84UZAJ9EJ87q//xA9.phrhKOyvsKnO6"
								}
							]);
						})
						.then(function() {
							db.Cart.bulkCreate([
								{
									UserId: 1,
									ProductId: 1
								},
								{
									UserId: 2,
									ProductId: 3
								},
								{
									UserId: 3,
									ProductId: 1
								},
								{
									UserId: 3,
									ProductId: 2
								},
							]);
						})
				});
		});
	}
};