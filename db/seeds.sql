CREATE DATABASE ecommerce;

INSERT INTO `ecommerce`.`Categories`
(`name`)
VALUES
("Clothing"),
("Shoes"),
("Assesories");

INSERT INTO `ecommerce`.`Products`
(`name`,`price`,`img`,`desc`,`quantity`,`CategoryId`)
VALUES
("Great Shirt",34.55,"http://","This shirt is faboulous",145,1),
("Geezys",225.55,"http://","These Geezys are better than Yeezys",45,2),
("Socks",22.99,"http://","Socks so good they're socks",45,3);
("Stuff", 1.00, "http://", "Some description", 100, 2);

INSERT INTO `ecommerce`.`Users`
(`firstName`,`lastName`,`email`,`pwd`)
VALUES
("Brad","Carlisle","brad@carlisle.com","$2a$10$SRA8F2QC.Vnsx5N97whEi.nmT1Rz88Bg8rZdTtcegp4WywT9RHT6y"),
("Mike","Flight","mike@gmail.com","$2a$10$QohRiClPJgBWWZjb1KLNx.vwrjVRmnlipSOo9nWNfTs9FrfBpp69y"),
("Jerry","Jepsen","jerry@jepsen.com","$2a$10$W2K0vNA0i24cROeHvaqDeu84UZAJ9EJ87q//xA9.phrhKOyvsKnO6");

