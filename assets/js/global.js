function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

  
    const takapediaIG = `<a href="https://www.instagram.com/frederich_eugene/" target="_blank">frederich_eugene</a>`;
    const takapediaWA = `<a href="https://api.whatsapp.com/send?phone=62895411162666" target="_blank">62895411162666</a>`;

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">Follow ig frederich_eugene</p>`,
        `<p class="animation mb-0 text-truncate">IG: ${takapediaIG} / WA: ${takapediaWA}</p>`,
        `<p class="animation mb-0 text-truncate">MPL S12 kalian dukung siapa ges? kalo aku sih dukun ONIC ESPORT`,
        `<p class="animation mb-0 text-truncate">Mabar yuk bang glory</p>`,
        `<p class="animation mb-0 text-truncate">follow ml : 103422199 / Nickname Ml : Michio.</p>`
    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
