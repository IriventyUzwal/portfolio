// --- NEW: Code to auto-close navbar on link click ---
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Add click event to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // If the mobile menu checkbox is checked, uncheck it to close the menu
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
});


// --- UPDATED: sendEmail function with validation ---
function sendEmail() {
  // Get the form fields and trim whitespace
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // --- Start: Added Validation ---
  
  // 1. Check if any fields are empty
  if (name === '' || email === '' || message === '') {
    alert("Please fill out all fields before sending.");
    return; // Stop the function if validation fails
  }

  // 2. Check for a valid email format using a regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return; // Stop the function if validation fails
  }
  
  // --- End: Added Validation ---

  // If validation passes, proceed to send the email
  const serviceID = "service_4t2cypd";
  const templateID = "template_84u23jq";
  const publicKey = "ZTRPJ_BPmuMqljYzn"; // Your EmailJS public key

  const params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Initialize EmailJS with your Public Key
  emailjs.init(publicKey);

  // Send the email
  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      alert("SUCCESS! Your message has been sent.");
      document.querySelector('.contact-form').reset(); // Clear the form on success
    })
    .catch(function(error) {
      alert("FAILED to send the message. Please try again. Error: " + JSON.stringify(error));
    });
}