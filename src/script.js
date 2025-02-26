 
 document.getElementById("contactForm").addEventListener("submit", function(event) {
            let isValid = true;

            // Validate Name
            const name = document.getElementById("name").value.trim();
            if (name === "") {
                document.getElementById("nameError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("nameError").style.display = "none";
            }

            // Validate Email
            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                document.getElementById("emailError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("emailError").style.display = "none";
            }
         // Validate Message
            const message = document.getElementById("message").value.trim();
            if (message === "") {
                document.getElementById("messageError").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("messageError").style.display = "none";
            }

            if (!isValid) {
                event.preventDefault(); // Stop form from submitting if validation fails
            } else {
                document.getElementById("successMessage").style.display = "block";
            }
        });

