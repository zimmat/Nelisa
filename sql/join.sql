select sales.sales_id,sales.sales_date,products.product_name,sales.quantity,sales.sales_price,sales.product_id
from products inner join sales on products.product_id = sales.product_id order by sales_date;
