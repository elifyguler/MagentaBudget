<script src="https://smtpjs.com/v3/smtp.js"></script>

function sendemail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "leonida93.pl@gmail.com",
        Password : "gaby2014*",
        To : "leonida93.pl@gmail.com",
        From : document.getElementById("Email").value,
        Subject : "New contact form",
        Body : "name" + document.getElementById("name").value
        + "<br> email: " + document.getElementById("name").value
        + "<br> Message: " + document.getElementById("message").value
    
    }).then(
      message => alert("Message sent succesfully")
    );
}
