/**
 * MLBB Winrate Pro - Global Logic
 * Developed by Frederich Eugene
 */

// Inisialisasi Cookie/LocalStorage dengan cara yang lebih singkat
const checkLS = () => {
    if (!localStorage.getItem('cookies')) {
        localStorage.setItem('cookies', '0');
    }
};

// Fungsi Eksekusi Utama
const res = () => {
    // Fungsi ini dipanggil saat tombol klik
    // Menjalankan validasi utama dari file JS hitung masing-masing
    if (typeof validation === "function") {
        validation();
    } else {
        console.error("Fungsi validation() tidak ditemukan!");
    }
};

// Slider Pesan Selamat Datang (Welcome Message)
const welcomeMsg = () => {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    if (!welcomeMsgEl) return;

    let currentIndex = 0;
    
    const contact = {
        ig: '<a href="https://www.instagram.com/frederich_eugene/" target="_blank" rel="noopener" class="text-white fw-bold">frederich_eugene</a>',
        wa: '<a href="https://api.whatsapp.com/send?phone=6285217032371" target="_blank" rel="noopener" class="text-white fw-bold">0895-4111-62666</a>'
    };

    const messages = [
        `Follow Instagram: ${contact.ig}`,
        `Support/Mabar? IG: ${contact.ig} | WA: ${contact.wa}`,
        `MPL Season 17? Tetap dukung tim jagoan kalian ges! 🏆`,
        `Gas push rank sampai Immortal! 🚀`,
        `ID ML: <span class="text-warning fw-bold">103422199</span> (Eujine.)`
    ];

    // Fungsi untuk mengganti teks dengan sedikit efek transisi (opacity)
    const updateText = () => {
        welcomeMsgEl.style.opacity = 0; // Menghilang sebentar
        
        setTimeout(() => {
            welcomeMsgEl.innerHTML = `<p class="mb-0 text-truncate px-3">${messages[currentIndex]}</p>`;
            welcomeMsgEl.style.opacity = 1; // Muncul kembali
            
            currentIndex = (currentIndex + 1) % messages.length;
        }, 500);
    };

    // Jalankan pertama kali
    updateText();
    
    // Interval ganti pesan setiap 5 detik
    setInterval(updateText, 5000);
};

// Google Analytics Setup
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-206846692-3');

// Jalankan fungsi saat DOM sudah siap
document.addEventListener("DOMContentLoaded", () => {
    checkLS();
    welcomeMsg();
    
    // Event listener untuk tombol hasil jika ada
    const btnHasil = document.querySelector("#hasil");
    if (btnHasil) {
        btnHasil.addEventListener("click", res);
    }
});
