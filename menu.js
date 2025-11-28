document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

console.log("menu.js cargado");

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggleButton.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  let visible = false;

  toggle.addEventListener("click", () => {
    if (!visible) {
      menu.classList.remove("hide");
      menu.classList.add("show");
      visible = true;
    } else {
      menu.classList.remove("show");
      menu.classList.add("hide");

      menu.addEventListener(
        "animationend",
        () => {
          if (menu.classList.contains("hide")) {
            menu.style.display = "none";
          }
        },
        { once: true }
      );

      visible = false;
    }

    if (visible) {
      menu.style.display = "block";
    }
  });
});