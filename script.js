document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
        let url = button.dataset.url;

        button.addEventListener('click', () => {
            window.open(url, '_blank');
        });
    });
});
