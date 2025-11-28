window.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    // === Cypress Test Requirement ===
    inputs[0].focus();

    inputs.forEach((input, index) => {
        
        // INPUT — typing forward
        input.addEventListener("input", (e) => {
            const value = input.value.replace(/\D/g, ""); // keep digits only
            input.value = value;

            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // KEYDOWN — handling backspace exactly per test
        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {

                // CASE 1: If field has value → clear it (but stay)
                if (input.value !== "") {
                    input.value = "";
                    return;
                }

                // CASE 2: If field is empty → move backward
                if (input.value === "" && index > 0) {
                    inputs[index - 1].focus();
                    inputs[index - 1].value = "";
                }
            }
        });

    });
});
