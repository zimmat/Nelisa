
use nelisa;
drop table if exists categories;
drop table if exists products;
drop table if exists sales;

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
    sales_id int primary key auto_increment,Day char(10) not null, Sales_date date not null,
        product_name char(100) not null, no_sold int, sales_price int,
    product_id int,foreign key (product_id) references products(product_id)
)ENGINE=INNODB;



