function sendEmail(){
  emailjs.init('ZTRPJ_BPmuMqljYzn');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send("service_4t2cypd", "template_84u23jq", params).then(function() {
    alert("Email sent!");
    // Optionally reset form here
    document.querySelector('.contact-form').reset();
  }).catch(function() {
    alert("Failed to send email!");
  });
}
