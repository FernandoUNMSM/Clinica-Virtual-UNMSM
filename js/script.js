//Menu
const menuContainer = document.querySelector('.menu-container');
const extra = document.querySelector('.extra');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-container .logo img');
const logoContainer = document.querySelector('.logo-container');

const abrirButton = document.querySelector('#abrir');
const cerrarButton = document.querySelector('#cerrar');
const menuOffCanvas = document.querySelector('#menu');

abrirButton.addEventListener('click',()=> {
    menuOffCanvas.classList.toggle('menuNoVisible');
});
cerrarButton.addEventListener('click',()=> {
    menuOffCanvas.classList.toggle('menuNoVisible');
});

//Fin Menu

//Incio Header
const headers = document.querySelectorAll('.headers');


window.onscroll = () => {
    if(window.pageYOffset > 0) {
        menuContainer.classList.add('menuContainer-on');
        menu.classList.add('menu-on');
        extra.classList.add('extra-on');
        logo.classList.add('active');
        logoContainer.classList.add('logo-on');
    }
    else {
        menuContainer.classList.remove('menuContainer-on');
        menu.classList.remove('menu-on');
        extra.classList.remove('extra-on');
        logo.classList.remove('active');
        logoContainer.classList.remove('logo-on');
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

var j=0;
const footerMain = document.querySelector('.footer-main');
const footerContact = document.querySelector('.footer-contact');
const footerInfo = document.querySelector('.footer-info');
const footerResponsive = document.createElement('div');footerResponsive.classList.add('respoFooter')


if(window.innerWidth <= '1000') {
    footerResponsive.appendChild(footerInfo);
    footerResponsive.appendChild(footerContact);
    footerMain.appendChild(footerResponsive);
}


window.onresize = () => {
    
    if(window.innerWidth <= '1000'){
        if(j==0) {
            footerResponsive.appendChild(footerInfo);
            footerResponsive.appendChild(footerContact);
            footerMain.appendChild(footerResponsive);
            j++;
            footerResponsive.classList.add('nyan');
        }
    }else {
        j=0;
        if(footerResponsive.classList.contains('nyan')) {
            footerResponsive.classList.remove('nyan');
            footerMain.removeChild(footerResponsive);
            footerMain.appendChild(footerInfo);
            footerMain.appendChild(footerContact);
        }
    
    }
}

