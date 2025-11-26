document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const parentTabs = tab.closest('.tabs');
            const allTabContents = parentTabs.querySelectorAll('.tab-content');
            const allTabs = parentTabs.querySelectorAll('.tab');

            allTabContents.forEach(content => content.classList.remove('tab-content-active'));
            allTabs.forEach(t => t.classList.remove('tab-active'));

            const targetContent = parentTabs.querySelector(`.tab-content[data-content="${tab.getAttribute('data-tab')}"]`);
            if (targetContent) {
                targetContent.classList.add('tab-content-active');

                const nestedTab = targetContent.querySelector('.tab');
                if (nestedTab) {
                    nestedTab.click();
                }
            }
            tab.classList.add('tab-active');
        });
    });

    const toggleButton = document.getElementById('toggle-button');
    const expandableText = document.getElementById('description');

    toggleButton.addEventListener('click', (event) => {
        expandableText.classList.toggle('expanded');
        if (expandableText.classList.contains('expanded')) {
            event.target.classList.add('open');
        } else {
            event.target.classList.remove('open');
        }
    });


    const closeModal = document.getElementById("closeModal");
    const openModal = document.getElementById("openModal");

    const modal = document.getElementById("modal");

    openModal.addEventListener("click", () => {
        const modalContent = modal.querySelector(".modal-content");
        const modalImageContainer = document.getElementById("modalImageContainer");
        const content = document.querySelector('.tab-content-color .tab-content-active img');

        const clonedImage = content.cloneNode(true);
        modalImageContainer.innerHTML = '';
        modalImageContainer.appendChild(clonedImage);

        modal.classList.add("show");
        modalContent.classList.add("show");
    });

    const eventCloseModal = () => {
        const modal = document.getElementById("modal");
        const modalContent = modal.querySelector(".modal-content");
        modal.classList.remove("show");
        modalContent.classList.remove("show");
    };

    closeModal.addEventListener("click", () => {
        eventCloseModal();
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            eventCloseModal();
        }
    });

});
