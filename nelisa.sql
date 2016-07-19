
use nelisa;
drop table if exists categories;
drop table if exists products;

create table categories(
    category_id int primary key auto_increment,
    category_name char(100) not null
);

create table products (
    product_id int primary key auto_increment,
        product_name char(100) not null,
    category_id int,foreign key (category_id) references categories(category_id)
);



