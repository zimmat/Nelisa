USE nelisa;
DROP TABLE IF EXISTS products;
CREATE TABLE products (id int primary key auto_increment,description char(100) not null,price decimal(10,2),Category_id int,foreign key (Category_id) references Categories(id));

SELECT * FROM products;
