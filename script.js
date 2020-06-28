//Menu
const menuContainer = document.querySelector('.menu-container');
const extra = document.querySelector('.extra');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-container .logo img');
const logoContainer = document.querySelector('.logo-container');
//Fin Menu

//Incio Header
const headers = document.querySelectorAll('.headers');


window.onscroll = () => {
    if(window.pageYOffset > 0) {
        menuContainer.style.background = "white";
        menu.style.paddingTop = "20px";
        extra.style.top = "-100%";
        logo.style.width="150px";
        logoContainer.style.paddingTop = "20px";
    }
    else {
        menuContainer.style.background = "transparent";
        menu.style.paddingTop = "80px";
        extra.style.top = "0";
        logo.style.width="300px";
        logoContainer.style.paddingTop = "30px";
    }
}

var i = 0;

setInterval(()=>{
    headers[i].style.visibility = "hidden";
    headers[i].style.opacity = "0";
    
    i = (i+1)%headers.length;

    headers[i].style.visibility = "visible";
    headers[i].style.opacity = "1";
},4000);