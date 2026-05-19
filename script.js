const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error Elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset Errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Email Validation
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Message Validation
    if (message === "") {
        messageError.textContent = "Message is required";
        valid = false;
    }

    // Success
    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }

});