document.addEventListener('DOMContentLoaded', () => {
    // AOS (Animate On Scroll) başlatma
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Özel imleç efekti
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Link ve butonlar için imleç efekti
    document.querySelectorAll('a, button, .portfolio-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // Portfolio görsellerini tıklanabilir yap
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                // Görsel overlay efekti
                const overlay = document.createElement('div');
                overlay.className = 'fullscreen-overlay';
                
                const fullImg = document.createElement('img');
                fullImg.src = img.src;
                fullImg.className = 'fullscreen-image';
                
                overlay.appendChild(fullImg);
                document.body.appendChild(overlay);

                overlay.addEventListener('click', () => {
                    overlay.remove();
                });
            }
        });
    });

    // Sayfa yüklendiğinde yükleme animasyonu
    document.body.classList.add('loaded');
});