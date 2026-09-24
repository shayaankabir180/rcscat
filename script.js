/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const menu =
        document.getElementById("nav-menu");

    menu.classList.toggle("active");

}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks =
    document.querySelectorAll("#nav-menu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("nav-menu")
            .classList.remove("active");

    });

});


/* ================= MESSAGE ================= */

function showMessage(message) {

    alert(message);

}
