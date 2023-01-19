const hambugerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleBtn(){
    navList.classList.toggle('show')
}

hambugerBtn.addEventListener('click', toggleBtn);

// add class navbarDark on navbar scroll
/*const header = document.getElementById('navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}*/

//send message to gmail
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "woohart02@gmail.com",
        Password : "kvoqeieqjveggpit",
        To : "woohart02@gmail.com",
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : 'Name: ' + document.getElementById('name').value 
        + '<br/> Email: ' + document.getElementById('email').value 
        + '<br/> Subject: ' + document.getElementById('subject').value 
        + '<br/> Message: ' + document.getElementById('message').value;
    }).then(
      message => alert("Message Sent Successfully")
    );
}