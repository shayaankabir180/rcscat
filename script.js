/* ================= MOBILE MENU ================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("menu-btn");

    const menu =
        document.getElementById("nav-menu");


    /* Open / close menu */

    menuButton.addEventListener("click", function () {

        menu.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    const navLinks =
        document.querySelectorAll("#nav-menu a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("active");

        });

    });

});


/* ================= MESSAGE ================= */

function showMessage(message) {

    alert(message);

}
