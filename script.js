
// Task 13: JavaScript - Check Whether a Given Number is Even or Odd


// Part 1: Predefined Variables & if-else Statements
// Using 4 different variables as required by the assignment


// Variable 1
let num1 = 5;
if (num1 % 2 === 0) {
    console.log("The number " + num1 + " is even.");
} else {
    console.log("The number " + num1 + " is odd.");
}

// Variable 2
let num2 = 10;
if (num2 % 2 === 0) {
    console.log("The number " + num2 + " is even.");
} else {
    console.log("The number " + num2 + " is odd.");
}

// Variable 3
let num3 = 17;
if (num3 % 2 === 0) {
    console.log("The number " + num3 + " is even.");
} else {
    console.log("The number " + num3 + " is odd.");
}

// Variable 4
let num4 = 24;
if (num4 % 2 === 0) {
    console.log("The number " + num4 + " is even.");
} else {
    console.log("The number " + num4 + " is odd.");
}



// Part 2: Interactive Webpage Number Checker
// Allows users to test any number in the browser

if (typeof document !== "undefined") {
    const form = document.getElementById("evenOddForm");
    const numInput = document.getElementById("numInput");
    const screen = document.querySelector(".screen");
    const resultDisplay = document.getElementById("resultDisplay");
    const outNumber = document.getElementById("outNumber");
    const outCalc = document.getElementById("outCalc");
    const outResult = document.getElementById("outResult");

    // Function to reset the display back to initial state
    function resetDisplay() {
        screen.classList.remove("even-bg", "odd-bg");
        resultDisplay.textContent = "Enter a Number";
        outNumber.textContent = "-";
        outCalc.textContent = "-";
        outResult.textContent = "-";
        outResult.className = "";
    }

    // Function to check whether the input number is even or odd
    function checkEvenOrOdd(event) {
        if (event) {
            event.preventDefault();
        }

        const rawValue = numInput.value.trim();

        if (rawValue === "") {
            alert("Please enter a valid number.");
            return;
        }

        const number = Number(rawValue);

        if (!Number.isFinite(number)) {
            alert("Please enter a valid finite number.");
            return;
        }

        // Remove previous styling classes
        screen.classList.remove("even-bg", "odd-bg");

        // Use if-else statement to determine even or odd
        if (number % 2 === 0) {
            // Number is Even
            console.log("The number " + number + " is even.");

            screen.classList.add("even-bg");
            resultDisplay.textContent = "The number " + number + " is even.";

            outNumber.textContent = number;
            outCalc.textContent = number + " % 2 = 0 (Divisible by 2)";
            outResult.textContent = "Even Number";
            outResult.className = "even-text";
        } else {
            // Number is Odd
            console.log("The number " + number + " is odd.");

            screen.classList.add("odd-bg");
            resultDisplay.textContent = "The number " + number + " is odd.";

            const remainder = Math.abs(number % 2);
            outNumber.textContent = number;
            outCalc.textContent = number + " % 2 = " + (number % 2) + " (Leaves remainder " + remainder + ")";
            outResult.textContent = "Odd Number";
            outResult.className = "odd-text";
        }
    }

    // Attach event listeners
    form.addEventListener("submit", checkEvenOrOdd);

    form.addEventListener("reset", function () {
        setTimeout(resetDisplay, 0);
    });
}
