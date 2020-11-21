function imageslider(anything){
    document.querySelector('.pepsi').src= anything;
}
function changebgcolor(color){
    const sec = document.querySelector('.sec')
    sec.style.background=color
}

function menuToggle(){
     const togglemenu = document.querySelector('.togglemenu')
     const navigation = document.querySelector('.navigation')
     togglemenu.classList.toggle('active')
     navigation.classList.toggle('active')
}