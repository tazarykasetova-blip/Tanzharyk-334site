// Сайт толық жүктелген кезде орындалады
document.addEventListener("DOMContentLoaded", function () {

    // Навигациядағы сілтемелер
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Бөлімге өту: " + link.textContent);
        });
    });

    // Батырмаларға қарапайым анимация
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.96)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);
        });
    });

});