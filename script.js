const items = [
  { name: "egg", price: 250 },
  { name: "noodles", price: 300 },
  { name: "maggi", price: 50 },
  { name: "bread", price: 500 },
  { name: "butter", price: 800 },
  { name: "milk", price: 1000 },
  { name: "tea", price: 700 },
  { name: "sugar", price: 400 },
  { name: "rice", price: 1200 },
  { name: "beans", price: 1000 },
  { name: "yam", price: 1500 },
  { name: "spaghetti", price: 900 },
  { name: "salt", price: 200 },
  { name: "pepper", price: 300 },
  { name: "onion", price: 500 },
  { name: "tomato", price: 600 },
  { name: "chicken", price: 2500 },
  { name: "fish", price: 2000 },
  { name: "beef", price: 2200 },
  { name: "oil", price: 1800 },
];

let userOrder;
let findItem;

// Keep asking until user enters a valid item
while (true) {
  userOrder = prompt("Choose an item to buy:");
  if (!userOrder) {
    alert("Entry cannot be empty.");
    continue; // ask again
  }

  userOrder = userOrder.toLowerCase();
  findItem = items.find((item) => item.name === userOrder);

  if (!findItem) {
    alert(`${userOrder} is not on the menu.`);
  } else {
    break; // valid item found, exit loop
  }
}

let quantity;

// Keep asking until user enters a valid positive number
while (true) {
  quantity = parseInt(prompt("How many do you want?"), 10);

  if (Number.isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid positive number.");
  } else {
    break; // valid quantity
  }
}

let totalPrice = findItem.price * quantity;
alert(`✅ You ordered ${quantity} ${userOrder}(s) at ₦${findItem.price} each.
Total = ₦${totalPrice}`);
console.log(`✅ You ordered ${quantity} ${userOrder}(s) at ₦${findItem.price} each.
Total = ₦${totalPrice}`);