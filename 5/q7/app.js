 let Priceofitem1 = 650;

 let Orderedquantityofitem1 = 3;

 let Priceofitem2 = 100;
 
 let OrderedQuantityofitem2 = 7;

 let Shippingcharges = 100;

 let Shopping = (`Price of item 1 = ${Priceofitem1} </br> Quantity of item 1 = ${Orderedquantityofitem1} </br> Price of item 2 = ${Priceofitem2} </br> Quantity of item 2 = ${OrderedQuantityofitem2} </br> Shipping charges = ${Shippingcharges} </br>`)

 document.write( Shopping  )

 document.write(`Total cost of your order = ${Priceofitem1*Orderedquantityofitem1+Priceofitem2*OrderedQuantityofitem2+Shippingcharges}`)