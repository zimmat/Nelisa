
use nelisa;
drop table if exists categories;
drop table if exists products;
drop table if exists sales;
drop table if exists purchases;

create table categories(
    category_id int primary key auto_increment,
    category_name char(100) not null
)ENGINE=INNODB;

create table products (
    product_id int primary key auto_increment,
        product_name char(100) not null,
    category_id int,foreign key (category_id) references categories(category_id)
)ENGINE=INNODB;
create table sales (
    sales_id int primary key auto_increment, Sales_date date not null,
        product_name char(100) not null, quantity int, sales_price decimal(10,2),
    product_id int,foreign key (product_id) references products(product_id)
)ENGINE=INNODB;
create table purchases (
    purchase_id int primary key auto_increment,shopName char(100) not null, purchase_date date not null,
        product_name char(100) not null, quantity int, cost decimal(10,2),totalCost decimal(10,2),
    product_id int,foreign key (product_id) references products(product_id)
)ENGINE=INNODB;

create table users(
    user_id int primary key auto_increment,
    user_name char(100) not null,password char(100) not null
)ENGINE=INNODB;

