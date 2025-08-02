// Advanced Loader & Preloader Handler
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const preloader = document.getElementById("preloader");
  if (loader) {
    setTimeout(() => loader.style.display = "none", 2000);
  }
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("fade-out");
      document.body.style.overflow = "auto";
    }, 2000);
  }
});

// Animate on Scroll with Intersection Observer
const animatedItems = document.querySelectorAll("[data-animate]");
if (animatedItems.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedItems.forEach(item => observer.observe(item));
}

// Team Member Popup (Event Delegation)
document.addEventListener('mouseover', e => {
  const member = e.target.closest('.team-member');
  const popup = document.getElementById('popup-image');
  if (member && popup) {
    const imageSrc = member.getAttribute('data-image');
    const popupImg = popup.querySelector('img');
    if (popupImg && imageSrc) {
      popupImg.src = imageSrc;
      popup.style.display = 'block';
    }
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('.team-member')) {
    const popup = document.getElementById('popup-image');
    if (popup) popup.style.display = 'none';
  }
});

// Ripple Effect (Debounced)
let lastRipple = 0;
document.addEventListener('mousemove', function(e) {
  const now = Date.now();
  if (now - lastRipple > 30) { // Debounce for performance
    lastRipple = now;
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }
});
