var db = require("../models");

module.exports = {
	createSeedData: function() {
		// db.sequelize.dropAllTables
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
									img: "https://images-na.ssl-images-amazon.com/images/I/91owLk7WdCL._UY879_.jpg",
									desc: "This shirt is faboulous",
									quantity: 145,
									CategoryId: 1
								},
								{
									name: "Geezys",
									price: 225.55,
									img: "https://images-na.ssl-images-amazon.com/images/I/61YWxenshTL._UY695_.jpg",
									desc: "These Geezys are better than Yeezys",
									quantity: 45,
									CategoryId: 2
								},
								{
									name: "Socks",
									price: 22.99,
									img: "https://images-na.ssl-images-amazon.com/images/I/71-SnpC8e8L._UX679_.jpg",
									desc: "Socks so good theyre socks",
									quantity: 345,
									CategoryId: 3
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
							}).then(function() {
								db.Cart.bulkCreate([
									{
										UserId: 1,
										ProductId: 1,
										quantity: 2
									},
									{
										UserId: 2,
										ProductId: 3,
										quantity: 1
									},
									{
										UserId: 3,
										ProductId: 1,
										quantity: 1

									},
									{
										UserId: 3,
										ProductId: 2,
										quantity: 4
									},
								]);

							}).then(function() {
								db.Billing.bulkCreate([
									{
										orderId: 1,
										billingName: "Fred Lewis",
										billingAddress: "1735 N Wells St",
										billingCity: "Chicago",
										billingState: "IL",
										billingZip: 60610,
										billingCountry: "USA",
										billingPhone: "7734904221"
									},
									
								]);
							}).then(function() {
								db.Shipping.bulkCreate([
									{
										orderId: 1,
										shippingName: "Fred Lewis",
										shippingAddress: "1735 N Wells St",
										shippingCity: "Chicago",
										shippingState: "IL",
										shippingZip: 60610,
										shippingCountry: "USA",
										shippingPhone: "7734904221"
									}
											
								]);
							}).then(function() {
								db.Order.bulkCreate([
									{
									orderId: 1,
									quantity: 2,
									purchasePrice: 2.99,
									ccLast4: 2344,
									ProductId: 1,
									BillingId: 1,
									ShippingId: 1,
									UserId: 1
									}
											
								]);
							});	
					});
			});
		
	}
};
