var db = require("../models");

module.exports = {
	createSeedData: function() {
		// db.sequelize.dropAllTables
			db.sequelize.sync({ force: true }).then(function() {
				db.Category
					.bulkCreate([
						{
							name: "Chocolate"
						},
						{
							name: "Hard Candy"
						},
						{
							name: "Chewy & Gummy"
						},
						{
							name: "Bubblegum"
						},
							{
							name: "Haribo!"
						}


					])
					.then(function() {
						db.Product
							.bulkCreate([
								{
									name: "Truffles",
									price: 15.59,
									img: "https://www.candywarehouse.com/assets/item/regular/french-mint-filled-dark-chocolate-truffles.jpg",
									desc: "Succulent morsels of decadent dark chocolate with exquisite truffle fillings",
									quantity: 145,
									CategoryId: 1
								},
								{ 
									name: "Pico-Balla",
									price: 5.19,
									img: "https://images-na.ssl-images-amazon.com/images/I/613pCvZqzDL.jpg",
									desc: "Great and tasty Gummy candiesThis lot contains one pack. Free shipping worldwide. Package weight is 175g",
									quantity: 100,
									CategoryId: 5
								},
								{
									name: "Kisses",
									price: 13.59,
									img: "https://images-na.ssl-images-amazon.com/images/I/61JudlWjJDL._AC_US436_QL65_.jpg",
									desc: "An American Classic, Hershey KISSES are bite-sized PIECES of chocolate with a unique shape and wrapped in colorful foil.",
									quantity: 100,
									CategoryId: 1
								},
								{ 
									name: "Baerchen",
									price: 4.77,
									img: "https://images-na.ssl-images-amazon.com/images/I/911Jj5qqvLL._SX522_.jpg",
									desc: "Imported from Germany",
									quantity: 100,
									CategoryId: 5
								},
								{
									name: "Gummy Bears",
									price: 24.99,
									img: "https://s3.amazonaws.com/kidzworld_photo/images/2016323/5b89be7a-ff3c-45c6-a065-aec7839c9e97/gummybears-inarow.jpg",
									desc: "An American Classic, Hershey KISSES are bite-sized PIECES of chocolate with a unique shape and wrapped in colorful foil.",
									quantity: 345,
									CategoryId: 3
								},
								{ 
									name: "Gummy Worms",
									price: 24.99,
									img: "https://nuts.com/images/auto/510x340/assets/a5ffff18e31d4576.jpg",
									desc: "Fat free candy worms made with real fruit juice and colors from natural sources",
									quantity: 245,
									CategoryId: 3
								},
								{ 
									name: "Weinland",
									price: 4.58,
									img: "https://images-na.ssl-images-amazon.com/images/I/91W6D8gGNWL._SY679_.jpg",
									desc: "Haribo Weinland Weingummi, 1er Pack (1 x 200 g Beutel)",
									quantity: 100,
									CategoryId: 5
								},
								{ 
									name: "Peanut Nougat",
									price: 13.99,
									img: "https://i0.wp.com/kitchensanctuary.com/wp-content/uploads/2015/10/Chocolate-peanut-nougat-square-2.jpg",
									desc: "Rich, creamy whipped nougat with peanut bits",
									quantity: 245,
									CategoryId: 1
								},
								{ 
									name: "Jawbreakers",
									price: 13.75,
									img: "https://images-na.ssl-images-amazon.com/images/I/61SS7N8hC1L._AC_US320_FMwebp_QL65_.jpg",
									desc: "Longlasting, multiple layered candy balls",
									quantity: 200,
									CategoryId: 2
								},
								{ 
									name: "Little Cupcakes",
									price: 6.09,
									img: "https://images-na.ssl-images-amazon.com/images/I/71vZb6hftAL._SX522_.jpg",
									desc: "imported from Germany - Not available in US-Stores Original Germany Haribo sweets175g/6.17oz",
									quantity: 100,
									CategoryId: 5
								},
								{ 
									name: "Dubble Bubble Gum",
									price: 14,
									img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQidRDqlsb6e3X36Wzq29GDdn4EDVcR58-fmMbODtcZ377KcHF8yv-C3i2b-3sZyrWdVoaKb4DR&usqp=CAE",
									desc: "Chewing gum, designed to freshen breath and to be inflated out of the mouth as a bubble",
									quantity: 100,
									CategoryId: 4
								},
								{ 
									name: "Fizzy Cola",
									price: 5.76,
									img: "https://images-na.ssl-images-amazon.com/images/I/9168m9gMN1L._SX522SX522_SY628_CR,0,0,522,628_PIbundle-12,TopRight,0,0_SX522_SY628_CR,0,0,522,628_SH20_.jpg",
									desc: "Happy-Cola gummies with sour, sweet, and tangy coating",
									quantity: 100,
									CategoryId: 5
								},
								{ 
									name: "Saure Pommes",
									price: 5.56,
									img: "https://images-na.ssl-images-amazon.com/images/I/91ze9qBQDRL._SY679_.jpg",
									desc: "Haribo Saure Pommes Gummi Candy 200 g",
									quantity: 100,
									CategoryId: 5
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
