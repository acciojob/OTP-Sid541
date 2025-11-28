const inputs = document.querySelectorAll(".code");

// Auto-focus first field
inputs[0].focus();

inputs.forEach((input, index) => {
    
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, ""); // Only digits

        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();  // Move forward
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                inputs[index - 1].focus();  // Move backward
                inputs[index - 1].value = ""; 
            }
        }
    });

});
