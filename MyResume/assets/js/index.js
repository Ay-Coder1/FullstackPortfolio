Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ayomidebabarinde07@gmail.com",
    Password : "oluwasegun33",
    To : 'ayomidebabarinde07@gmail.com',
    From : "document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
