
let display = document.getElementById("display");

// Add a value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        // Allow only calculator characters
        if (!/^[0-9+\-*/%.()\s]+$/.test(display.value)) {
            display.value = "Error";
            return;
        }

        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        display.value = Number.isFinite(result) ? result : "Error";

    } catch (error) {
        display.value = "Error";
    }
}

