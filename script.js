// Tab Switching with Mobile Drawer auto-close
function switchTab(tabName) {
  // Update Page visibility
  document.querySelectorAll('.page-tab').forEach(el => el.classList.remove('active'));
  const target = document.getElementById('page-' + tabName);
  if (target) target.classList.add('active');

  // Update Desktop Nav
  document.querySelectorAll('.desktop-nav a').forEach(el => el.classList.remove('active'));
  const navItem = document.getElementById('nav-' + tabName);
  if (navItem) navItem.classList.add('active');

  // Update Mobile Nav
  document.querySelectorAll('.mobile-nav-link').forEach(el => el.classList.remove('active'));
  const mobileNavItem = document.getElementById('mobile-nav-' + tabName);
  if (mobileNavItem) mobileNavItem.classList.add('active');

  // Close mobile drawer if open
  closeMobileMenu();

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Drawer Toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('mobile-nav');
  const toggleBtn = document.getElementById('hamburger-btn');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  if (!navMenu || !toggleBtn) return;

  const isOpen = navMenu.classList.contains('open');

  if (isOpen) {
    closeMobileMenu();
  } else {
    navMenu.classList.add('open');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('active');
    document.body.classList.add('nav-locked');
  }
}

// Close Mobile Menu Drawer
function closeMobileMenu() {
  const navMenu = document.getElementById('mobile-nav');
  const toggleBtn = document.getElementById('hamburger-btn');
  const backdrop = document.getElementById('mobile-nav-backdrop');

  if (navMenu) navMenu.classList.remove('open');
  if (toggleBtn) {
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
  if (backdrop) backdrop.classList.remove('active');
  document.body.classList.remove('nav-locked');
}

// Close on Escape key press for accessibility
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

// Contact Form Handler with WhatsApp dispatch
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const brand = document.getElementById('form-brand').value;
  const fabric = document.getElementById('form-fabric').value;
  const message = document.getElementById('form-message').value;

  document.getElementById('form-success').style.display = 'block';

  const waText = encodeURIComponent(`Hola Tela Plus! Mi nombre es ${name} (${brand}). Quisiera cotizar ${fabric}. Consulta: ${message}`);
  setTimeout(() => {
    window.open(`https://wa.me/5491100000000?text=${waText}`, '_blank');
  }, 800);
}
