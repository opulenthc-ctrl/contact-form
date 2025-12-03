// Wait for the whole page to load
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop page reload

        // Grab inputs
        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const consent = document.getElementById("consent").checked;
        const queryType = document.querySelector("input[name='queryType']:checked");

        // Basic error handling
        if (!firstName || !lastName || !email || !message) {
            alert("This field isrequired fields ").style.border = "1px solid red";
            return;
        }

        // Email format check (lightweight)
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.").style.border = "1px solid red";
            return;
        }

        if (!queryType) {
            alert("Please select a query type.");
            return;
        }

    if (!message) {
    showError("message", "This field is required").style.border = "1px solid red";
    isValid = false;
  }

        // Data object you can send to backend later
        const formData = {
            firstName,
            lastName,
            email,
            message,
            queryType: queryType.value,
            consent
        };

        console.log("Form submitted:", formData);

        // Success message
        alert("Your message has been sent successfully! ");

        // Clear form
        form.reset();
    });
});
