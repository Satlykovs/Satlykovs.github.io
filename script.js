
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true
});


document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

