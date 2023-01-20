const hambugerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleBtn(){
    navList.classList.toggle('show')
}

hambugerBtn.addEventListener('click', toggleBtn);


//send message to gmail
function sendEmail(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let subject=document.getElementById("subject");
    let text=document.getElementById("text-area"); 
    Email.send({
        SecureToken: "32b3e27e-a111-4d0c-b2d5-dd895e7e2655",
        To : "woohart02@gmail.com",
        From : email,
        Subject : subject,
        Body : "Name: " + name.value
        + "<br/> Email: " + email.value 
        + "<br/> Subject: " + subject.value 
        + "<br/> Message: " + text.value
    }).then(
      message => alert("Message Sent Successfully")
    );
}