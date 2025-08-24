const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  const isOpen = hamburger.classList.contains('active');
  mobileMenu.style.display = isOpen ? 'flex' : 'none';
}

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.style.display = 'none';
  });
});