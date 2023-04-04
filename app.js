document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting

    // Get form data
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    // Perform validation
    var usernameExists = sessionStorage.getItem(username);
    if (usernameExists) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    var usernamePattern = /^\S+$/;
    if (!usernamePattern.test(username)) {
        alert("Username cannot contain spaces.");
        return;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least 1 number, 1 uppercase letter, and 1 special character.");
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email must be in a valid format.");
        return;
    }

    var phonePattern = /^07\d{8}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must start with '07' and be 10 digits long.");
        return;
    }

    // Save form data to session storage
    sessionStorage.setItem(username, JSON.stringify({
        password: password,
        email: email,
        phone: phone
    }));

    alert("Registration successful!");
    document.getElementById("registration-form").reset();
});
