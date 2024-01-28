var customerFirstName = "John";
customerLastName = "Smith";
subscription = "Prime";
customerCounrty = "USA";
Phone = "3344555";
email = "john@gmail.com";
customerStreetAddress = "555 fifth street";
customerCity = "LA";
customerState = "CA";
CustomerZipCode = "90001";
productName = "Labtop";
quantity = 2;
price = 800.61;
total = quantity * price;
orderDate = new Date();
orderYear = orderDate.getFullYear();
orderMonth = orderDate.getMonth() + 1;
orderDay = orderDate.getDate();
deliveryDate = new Date();
// delivery date is after 5 days of order day
deliveryDate.setDate(orderDate.getDate() + 5);
deliveryYear = deliveryDate.getFullYear();
deliveryMonth = deliveryDate.getMonth() + 1;
deliverDay = deliveryDate.getDate();

document.write(
	`
    <h1>amazon</h1>
    <h2> Customer: </h2>
    <p> Name: ${customerFirstName}, ${customerLastName} </p>
    <p> Subscription: ${subscription} </p>
    <p> Country: ${customerCounrty} </p>
    <p> Phone Number: ${Phone} </p>
    <p> Email: ${email} <p/>
    <p> Adress: ${customerStreetAddress}<br>
    ${customerCity} , ${customerState} ${CustomerZipCode} </p>
    
    `
);
document.write(
	`<h2>Order Detals:</h2>
    <table>
    <tr>
        <td>Name</td>
        <td>quantity</td>
        <td>price</td>
        <td>Toatal Price</td>
        <td>Order date</td>
        <td>Delivery date</td>
        <Delivery Address: </td>
    </tr>
    <tr>
    <td>${productName}</td>
    <td>${quantity}</td>
    <td>$${price}</td>
    <td>$${total}</td>
    <td>${orderMonth}-${orderDay}-${orderYear}</td>
    <td>${deliveryMonth}-${deliverDay}-${deliveryYear}</td>
</tr>
</table>

    `
);
