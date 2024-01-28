// VALIDATION
// Function to validate email
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

// Function to handle form submission
function validateForm(event) {
    var isValid = true;
    var messages = [];


    // Validate First Name
    var firstName = document.querySelector('input[name="first-name"]').value;
    if (!firstName || firstName.length < 2) {
        messages.push("First Name must be at least 2 characters long");
        isValid = false;
    }

    // Validate Last Name
    var lastName = document.querySelector('input[name="last-name"]').value;
    if (!lastName || lastName.length < 2) {
        messages.push("Last Name must be at least 2 characters long");
        isValid = false;
    }

    // Validate Email
    var email = document.querySelector('input[name="email"]').value;
    if (!validateEmail(email)) {
        messages.push("Invalid email address");
        isValid = false;
    }

    // Validate Address
    var address = document.querySelector('input[name="address"]').value;
    if (!address) {
        messages.push("Address is required");
        isValid = false;
    }

    // Validate City
    var city = document.querySelector('input[name="city"]').value;
    if (!city) {
        messages.push("City is required");
        isValid = false;
    }

    // Validate Country
    var country = document.querySelector('input[name="country"]').value;
    if (!country) {
        messages.push("Country is required");
        isValid = false;
    }

    // Validate ZIP Code
    var zipCode = document.querySelector('input[name="zip-code"]').value;
    if (!zipCode) {
        messages.push("ZIP Code is required");
        isValid = false;
    }

    // Validate Telephone
    var telephone = document.querySelector('input[name="tel"]').value;
    if (!telephone || !/^\d{10}$/.test(telephone)) {
        messages.push("Telephone must be a 10 digit number");
        isValid = false;
    }

    // Check if Terms & Conditions is checked
    var termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
        messages.push("You must accept the terms & conditions");
        isValid = false;
    }

    // If not valid, prevent form submission and show error messages
    if (!isValid) {
        event.preventDefault();
        alert(messages.join("\n"));
    }

        // Kiểm tra xem biểu mẫu có hợp lệ không
        if (isValid) {
            document.getElementById('success-message').style.display = 'block';
    
            // Ẩn thông báo sau 5 giây
            setTimeout(function() {
                document.getElementById('success-message').style.display = 'none';
            }, 5000);
        } else {
            event.preventDefault();
            alert(messages.join("\n"));
        }
    
}



// Attach the function to the form submission event
document.getElementById('place-order-btn').addEventListener('click', validateForm);




