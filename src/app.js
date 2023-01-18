const hambugerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleBtn(){
    navList.classList.toggle('show')
}

hambugerBtn.addEventListener('click', toggleBtn);