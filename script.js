function toggleMenu() {
    const navLinks = document.getElementById('nav-links');

    if (!navLinks.classList.contains('open')) {
        navLinks.style.height = 'auto';
        const height = navLinks.scrollHeight + 'px';
        navLinks.style.height = '0';

        setTimeout(() => {
            navLinks.style.height = height;
        }, 10);

        navLinks.classList.add('open');
        navLinks.style.opacity = '1';
    } else {
        navLinks.style.height = navLinks.scrollHeight + 'px';
        setTimeout(() => {
            navLinks.style.height = '0';
        }, 10);
        
        navLinks.classList.remove('open');
        navLinks.style.opacity = '0';
    }
}
