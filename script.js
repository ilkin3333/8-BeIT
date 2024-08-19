document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const barsIcon = menuIcon.querySelector('.fa-bars');
    const xmarkIcon = menuIcon.querySelector('.fa-xmark');
    const altnavbar = document.querySelector('.alt-navbar');
    const header = document.querySelector('#header');

    menuIcon.addEventListener('click', function() {
        if (barsIcon.style.display !== 'none') {
            barsIcon.style.display = 'none';
            altnavbar.classList.add('show'); // 'show' sınıfını ekleyin
            xmarkIcon.style.display = 'block';
            header.style.height = 'calc(100vh + 300px)'; // Yüksekliği arttır
        } else {
            barsIcon.style.display = 'block';
            altnavbar.classList.remove('show'); 
            header.style.height = '100vh'; // Yüksekliği varsayılan yap
            xmarkIcon.style.display = 'none';
        }
    });
});


document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const targetPosition = document.getElementById('about-us').offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Milisaniye cinsinden süre (1 saniye)
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    });

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});
