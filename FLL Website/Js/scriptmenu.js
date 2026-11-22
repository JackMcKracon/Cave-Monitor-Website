
function toggleMenu() {

    const dropdown = document.getElementById("dropdown");
    const button = document.getElementById("menuButton");

    dropdown.classList.toggle("active");
    button.classList.toggle("active");

    const isOpen = dropdown.classList.contains("active");

    button.setAttribute("aria-expanded", isOpen);

    button.setAttribute(
        "aria-label",
        isOpen ? "Menü schließen" : "Menü öffnen"
    );
}


// Menü schließen, wenn außerhalb geklickt wird

document.addEventListener("click", function(event) {

    const container = document.querySelector(".menu-container");
    const dropdown = document.getElementById("dropdown");
    const button = document.getElementById("menuButton");

    if (!container.contains(event.target)) {

        dropdown.classList.remove("active");
        button.classList.remove("active");

        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Menü öffnen");

    }

});


// Menü schließen mit ESC

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const dropdown = document.getElementById("dropdown");
        const button = document.getElementById("menuButton");

        dropdown.classList.remove("active");
        button.classList.remove("active");

        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Menü öffnen");

    }

});
