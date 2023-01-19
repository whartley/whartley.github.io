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
var btn = document.getElementById('btn');

btn?.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;
    email.send({
        Host : "smtp.gmail.com",
        Username : "woohart02@gmail.com",
        Password : "kvoqeieqjveggpit",
        To : 'woohart02@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})
