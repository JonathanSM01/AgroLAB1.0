function initializeNavigation() {

    const buttons = document.querySelectorAll(".menu");

    buttons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();
            e.stopPropagation();

            console.log("CLICK:", button.dataset.view);

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            loadView(button.dataset.view);

        });

    });

}
