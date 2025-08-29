# 🛒 Simple Shopping Order Program

This project is a **JavaScript-based interactive shopping program** that allows users to select an item from a predefined menu, choose a quantity, and see the total cost of their order.  
It uses `prompt()` and `alert()` for user interaction in the browser.

---

## 📌 Features
- Displays a menu of grocery items with their prices.
- Prompts the user to choose an item (case-insensitive).
- Validates input:
  - Prevents empty item entries.
  - Ensures the chosen item exists on the menu.
  - Checks that quantity is a valid positive number.
- Calculates and displays the total price.
- Logs the order details in the browser console.

---

## 🛠️ How It Works
1. User is asked to enter the name of an item (e.g., **rice**, **egg**, **chicken**).
2. If the item is valid, the program then asks for the quantity.
3. Input is validated:
   - If invalid, the program re-prompts until valid input is given.
4. The program calculates the total price = `price × quantity`.
5. Result is shown via:
   - ✅ `alert()` in the browser.
   - ✅ `console.log()` in the developer console.

---

## 🧾 Example Usage
Choose an item to buy: rice
How many do you want? 3
✅ You ordered 3 rice(s) at ₦1200 each.
Total = ₦3600



---

## 🚀 How to Run
1. Copy the code into a file, e.g., `shop.js`.
2. Open it in a browser by linking it in an HTML file:
   ```html
   <script src="script.js"></script>
3. Run the HTML file in any modern browser.
4. Follow the prompts to place your order.


📂 Project Structure
shop.js    # main JavaScript file containing the program
index.html # optional HTML file to run the script in the browser

✅ Future Improvements
Display all available items and prices before prompting.
Allow multiple items in a single order.
Build a user-friendly interface instead of browser prompts.

💡 Author
Created as a beginner-friendly JavaScript project for practicing:

- Arrays
- Loops
- User input validation
- Basic calculations