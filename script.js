function toggleMenu() {
    const navLinks = document.getElementById('nav-links');

    if (!navLinks.classList.contains('open')) {
        const height = navLinks.scrollHeight + 'px';
        navLinks.style.height = height;

        navLinks.classList.add('open');
        navLinks.style.opacity = '1';
    } else {
        navLinks.style.height = '0';
        navLinks.classList.remove('open');
        navLinks.style.opacity = '0';
    }
}

window.onload = function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.height = '0';
    navLinks.style.opacity = '0';
};
