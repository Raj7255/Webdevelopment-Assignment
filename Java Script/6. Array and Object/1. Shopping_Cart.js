const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat");
shoppingCart.push("sugar");
shoppingCart.splice(4,1)
shoppingCart.splice(3,1,'Green Tea')
console.log(shoppingCart);
