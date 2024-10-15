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

                // Sub Menu
                const waktuSholatLink = document.getElementById('waktu-sholat-link');
                const anime = document.getElementById('anime-link');
                const bully = document.getElementById('bully-link');
                const warcraft3 = document.getElementById('warcraft3-link');
                const warriors = document.getElementById('warriors-link');
                const htmlElement = document.getElementById('html-element-link');

                // Cek apakah URL saat ini mengandung 'index.html' untuk menambahkan class 'active'
                if (currentURL.includes('waktu-sholat.html')) {
                    waktuSholatLink.classList.add('active');
                } else if (currentURL.includes('bully.html')) {
                    bully.classList.add('active');
                } else if (currentURL.includes('anime.html')) {
                    anime.classList.add('active');
                } else if (currentURL.includes('warcraft3.html')) {
                    warcraft3.classList.add('active');
                } else if (currentURL.includes('warriors.html')) {
                    warriors.classList.add('active');
                } else if (currentURL.includes('html-element.html')) {
                    htmlElement.classList.add('active');
                } else {
                    waktuSholatLink.classList.add('active');
                }
            } else {
                console.error("Sidebar container not found");
            }

            // Sidebar

            const searchSidebar = document.getElementById('searchSidebar')
            const Items = document.querySelectorAll('#navbarItem li');

            searchSidebar.addEventListener('input', function () {
                const query = searchSidebar.value.toLowerCase();

                Items.forEach(item => {
                    // Ambil semua teks dari elemen dalam card
                    const textContent = item.textContent.toLowerCase();

                    // Tampilkan atau sembunyikan item berdasarkan pencarian
                    if (textContent.includes(query)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
