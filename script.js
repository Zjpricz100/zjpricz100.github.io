/**
 * AI ENGINEER PORTFOLIO — Simplified Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });

    // Nav background on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 1px 10px rgba(45, 90, 71, 0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }, { passive: true });

    // Email copy to clipboard
    const emailLink = document.querySelector('.contact-email');
    if (emailLink) {
        emailLink.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = 'hello@example.com';
            
            try {
                await navigator.clipboard.writeText(email);
                const originalHTML = emailLink.innerHTML;
                emailLink.innerHTML = 'Copied! <span class="email-arrow">✓</span>';
                setTimeout(() => {
                    emailLink.innerHTML = originalHTML;
                }, 2000);
            } catch {
                window.location.href = 'mailto:' + email;
            }
        });
    }

    // Simple fade-in on scroll for project cards
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
