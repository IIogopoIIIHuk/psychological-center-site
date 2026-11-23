(function () {
    var button = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".mobile-nav-dropdown");
    if (!button || !menu) return;

    button.addEventListener("click", function () {
        var open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", open ? "false" : "true");
        menu.classList.toggle("open", !open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            button.setAttribute("aria-expanded", "false");
            menu.classList.remove("open");
        });
    });
})();
