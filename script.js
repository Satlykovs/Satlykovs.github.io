// Инициализация fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true
});

// Обработка клика по кнопке меню
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

