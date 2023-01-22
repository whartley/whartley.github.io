const hambugerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleBtn(){
    navList.classList.toggle('show')
}

hambugerBtn.addEventListener('click', toggleBtn);

//Modal Functionality
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modalClose();
      }
    });

//Send email with EmailJs with Modal success message
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
        openModal();
        console.log(tempParams,res.status, res.text);
    }).catch((err) => {console.log(JSON.stringify(err));});
}


