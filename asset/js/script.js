document.addEventListener("DOMContentLoaded", function () {
    fetch('../layout/sidebar.html')  // Pastikan path benar
        .then(response => response.text())
        .then(data => {
            const sidebarContainer = document.getElementById('sidebar-container');
            if (sidebarContainer) {
                sidebarContainer.innerHTML = data;
                // Mendapatkan URL halaman saat ini
                const currentURL = window.location.href;

                // Mendapatkan elemen link sidebar
                const waktuSholatLink = document.getElementById('waktu-sholat-link');
                const bully = document.getElementById('bully-link');

                // Cek apakah URL saat ini mengandung 'index.html' untuk menambahkan class 'active'
                if (currentURL.includes('waktu-sholat.html')) {
                    waktuSholatLink.classList.add('active');
                } else if (currentURL.includes('bully.html')) {
                    bully.classList.add('active');
                } else {
                    waktuSholatLink.classList.add('active');
                }
            } else {
                console.error("Sidebar container not found");
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
