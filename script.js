const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');



document.addEventListener('mousemove', (e) => {
    if (e.clientX < 200) {
        menu.style.left = '0';
    } else {
        if (menu.style.left === '0px') {
            menu.style.left = '-200px';
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");

    
    setTimeout(function() {
        loader.style.display = "none";
    }, 500);
});