/* =========================
   RCSCAT JAVASCRIPT
   ========================= */


/* MOBILE MENU */

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


/* CLOSE MOBILE MENU */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navMenu")
                    .classList
                    .remove("active");

            }
        );

    });


/* MOCK TEST */

function checkTest() {

    let score = 0;

    const questions = [
        "q1",
        "q2",
        "q3"
    ];


    questions.forEach(question => {

        const answer =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        if (
            answer &&
            answer.value === "correct"
        ) {

            score++;

        }

    });


    const result =
        document.getElementById("result");


    result.style.display = "block";


    if (score === 3) {

        result.innerHTML =
            "🚀 Perfect score! 3 / 3";

    }

    else {

        result.innerHTML =
            "Your score: " +
            score +
            " / 3";

    }

}


/* RESOURCE SEARCH */

function searchResources() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const resources =
        document.querySelectorAll(
            ".resource"
        );


    resources.forEach(resource => {

        const text =
            resource.innerText
                .toLowerCase();


        if (
            text.includes(search)
        ) {

            resource.style.display =
                "block";

        }

        else {

            resource.style.display =
                "none";

        }

    });

}


/* COMING SOON */

function comingSoon(name) {

    alert(
        name +
        " section is coming soon!"
    );

}


/* SUBMISSION FORM */

function submitForm(event) {

    event.preventDefault();


    alert(
        "Thank you for your submission! " +
        "The RCSCAT team will review it."
    );


    event.target.reset();

      }
