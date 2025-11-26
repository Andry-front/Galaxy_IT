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
});
