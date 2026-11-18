const ldtoggle = document.getElementById("ldtoggle");

ldtoggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("dark-theme")) {
        ldtoggle.textContent = "Light Mode";
    } else {
        ldtoggle.textContent = "Dark Mode";
    }
})

window.addEventListener("load", () => {
    const year = document.getElementById("cyear");
    year.innerHTML = new Date().getFullYear();
})