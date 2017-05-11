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



