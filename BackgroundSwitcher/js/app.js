function lightMode() {
    document.querySelector(".container").style.backgroundColor = 'white';
    document.querySelector(".light-text").style.color = 'rgb(17, 17, 68)';
    document.querySelector(".dark-text").style.color = 'rgb(182, 179, 179)';
}

function darkMode() {
    document.querySelector(".container").style.backgroundColor = 'rgb(17, 17, 68)';
    document.querySelector(".dark-text").style.color = 'white';
    document.querySelector(".light-text").style.color = 'rgb(58, 58, 97)';
}