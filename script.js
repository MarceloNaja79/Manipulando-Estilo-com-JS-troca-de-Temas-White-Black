const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Modo Claro";
    } else {
        darkModeBtn.textContent = "Modo Escuro";
    }
});

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".movie-card");
        card.classList.toggle("favorited");
    });
});