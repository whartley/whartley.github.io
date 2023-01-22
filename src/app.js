const hambugerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleBtn(){
    navList.classList.toggle('show')
}

hambugerBtn.addEventListener('click', toggleBtn);

//Send email with EmailJs
function sendEmail(){
    const serviceID = 'service_i7l8bnv';
    const templateID = 'template_yrxjlo2';
    var tempParams = {
        from_name: document.getElementById('name').value,
        to_name: 'Woodie',
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('text-area').value,
    };
    
emailjs
    .send(serviceID,templateID,tempParams)
    .then((res) => {
        document.getElementById('name').value,
        document.getElementById('email').value,
        document.getElementById('subject').value,
        document.getElementById('text-area').value
        alert("Message Sent Successfully");
        console.log(tempParams,res.status, res.text);
    }).catch((err) => {console.log(JSON.stringify(err));});
}
