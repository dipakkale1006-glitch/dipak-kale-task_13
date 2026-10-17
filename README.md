# Task 13: JavaScript - Check Whether a Given Number is Even or Odd

## About the Project
This project is created as part of the **MERN Stack Course**. The objective of this assignment is to write a JavaScript program that checks whether a given number is **even or odd** using variables, arithmetic/modulo operators, and `if-else` conditional statements. 

The project includes:
1. **Predefined Variables (Static)**: Four different variables checked using `if-else` statements and logged to the browser console.
2. **Interactive Webpage Checker**: A modern, responsive user interface where users can input any number, click a button, and immediately see whether the number is even or odd, along with mathematical remainder details.

---

## Logic and Concept

In mathematics and programming:
- An **even number** is an integer that is exactly divisible by `2` without leaving any remainder (`number % 2 === 0`).
  - Examples: `2, 4, 6, 8, 10, ...`
- An **odd number** is an integer that is not divisible by `2` and leaves a remainder of `1` (or `-1` for negative numbers) when divided by `2` (`number % 2 !== 0`).
  - Examples: `1, 3, 5, 7, 9, ...`

### Code Logic:
```javascript
if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
} else {
    console.log("The number " + number + " is odd.");
}
```

---

## Variables Used

As required by the assignment guidelines, four different variables are declared and checked:

| Variable | Value | Condition (`num % 2 === 0`) | Output |
| :--- | :--- | :--- | :--- |
| `num1` | `5` | `5 % 2 === 1` (False) | The number 5 is odd. |
| `num2` | `10` | `10 % 2 === 0` (True) | The number 10 is even. |
| `num3` | `17` | `17 % 2 === 1` (False) | The number 17 is odd. |
| `num4` | `24` | `24 % 2 === 0` (True) | The number 24 is even. |

---

## Console Output Sample

When `index.html` is opened in a web browser, the JavaScript script automatically executes and prints the following messages to the browser console:

```text
The number 5 is odd.
The number 10 is even.
The number 17 is odd.
The number 24 is even.
```

---

## Features

- **Standard if-else Logic**: Uses standard JavaScript `if-else` conditional statements and the `%` (modulus) operator.
- **Multiple Variables**: Demonstrates testing with multiple numbers (5, 10, 17, 24).
- **Interactive UI**:
  - Input field to test any custom number.
  - Dynamic result banner that changes color (green for even, orange for odd).
  - Detailed breakdown showing the remainder calculation.
  - Reset button to clear inputs and return to initial state.
- **Responsive & Clean Design**: Styled with custom CSS following standard layout principles.

---

## Technologies Used

- **HTML5**: Semantic webpage structure, forms, and input elements.
- **CSS3**: Modern layout, cards, color-coded status badges, and responsive design.
- **JavaScript (ES6)**: Variables (`let`), modulus operator (`%`), `if-else` conditional statements, console logging (`console.log()`), and DOM event listeners.

---

## Project Files

Inside the `DIPAK KALE Task_13` folder:
- `index.html` – Webpage layout with linked CSS and JS files
- `style.css` – Modern styling and responsive CSS rules
- `script.js` – Predefined variable checks, console output, and interactive DOM logic
- `README.md` – Documentation, logic explanation, and instructions

---

## How to Run & Test the Code

1. Navigate to the `DIPAK KALE Task_13` directory.
2. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, etc.).
3. **To view console output**:
   - Press **F12** on your keyboard (or right-click anywhere on the page and select **Inspect**).
   - Click on the **Console** tab.
   - You will see the messages:
     ```text
     The number 5 is odd.
     The number 10 is even.
     The number 17 is odd.
     The number 24 is even.
     ```
4. **To test interactive input**:
   - Enter any number into the input box and click **Check Number**.
   - The result and calculation will be displayed on screen and logged to the console.

---

**Author:** Dipak Kale  
**Course:** MERN Stack Course
