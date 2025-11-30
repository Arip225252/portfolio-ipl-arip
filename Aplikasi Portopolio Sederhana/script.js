document.addEventListener('DOMContentLoaded', () => {

    // Menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Form kontak
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const name = nameInput.value || "Tamu";
        const messageBox = document.getElementById('form-message');

        messageBox.textContent = `Pesan dari ${name} telah diterima! (Ini hanya simulasi).`;
        messageBox.classList.remove('hidden');
        messageBox.classList.add('bg-green-100', 'text-green-800');

        nameInput.value = '';

        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 5000);
    });

});
