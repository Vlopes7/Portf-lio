function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

const btntop = document.getElementById("btntop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btntop.style.display = "block"; 
    } else {
        btntop.style.display = "none"; 
}
};

btntop.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

texto = document.querySelector("#opacidade")
texto1 = document.querySelector("#texto1")
texto2 = document.querySelector("#texto2")

function instagram(){
    texto.style.opacity = "1"
    texto.style.scale = "1.1"
    texto.style.transition = "0.5s"
}

function instagramremove(){
    texto.style.opacity = "0"
    texto.style.scale = "1"
    texto.style.transition = "0.5s"
}

function github(){
    texto1.style.opacity = "1"
    texto1.style.scale = "1.1"
    texto1.style.transition = "0.5s"
}

function githubremove(){
    texto1.style.opacity = "0"
    texto1.style.scale = "1"
    texto1.style.transition = "0.5s"
}

function linkedin(){
    texto2.style.opacity = "1"
    texto2.style.scale = "1.1"
    texto2.style.transition = "0.5s"
}

function linkedinremove(){
    texto2.style.opacity = "0"
    texto2.style.scale = "1"
    texto2.style.transition = "0.5s"
}




