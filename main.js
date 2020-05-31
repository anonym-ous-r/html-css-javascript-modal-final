const allTargets = document.querySelectorAll("[data-target]");

for (const target of allTargets) {
    target.addEventListener("click", () => {
        const modalId = target.getAttribute("data-target");
        document.getElementById(modalId).classList.add("is-visible");
    });
}

const activeModals = document.querySelectorAll(".modal");

for (const activeModal of activeModals) {
    activeModal.addEventListener("click", (e) => {
        if (e.target.classList == "modal-close") {
            activeModal.classList.remove("is-visible");
        }
    });

    activeModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("is-visible")) {
            activeModal.classList.remove("is-visible");
        }
    });
}
