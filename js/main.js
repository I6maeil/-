document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // Sticky Header
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Language Switcher (Mock for visual demonstration)
  const langSwitch = document.querySelector('.lang-switch');
  const html = document.documentElement;
  
  if (langSwitch) {
    langSwitch.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = html.getAttribute('lang');
      
      if (currentLang === 'fr') {
        // Switch to Arabic
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langSwitch.textContent = 'FR';
        
        // In a real app, we would translate texts here or redirect
        // For demonstration, we'll just show an alert or let CSS handle layout mirroring
        console.log("Switched to Arabic layout");
      } else {
        // Switch to French
        html.setAttribute('lang', 'fr');
        html.setAttribute('dir', 'ltr');
        langSwitch.textContent = 'العربية';
        console.log("Switched to French layout");
      }
      
      // Re-trigger AOS to fix animations after layout change
      if (typeof AOS !== 'undefined') {
        setTimeout(() => AOS.refresh(), 300);
      }
    });
  }

  // Counter Animation
  const counters = document.querySelectorAll('.counter-num');
  const speed = 200; // The lower the slower

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  // Trigger counter animation when element is in viewport
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const counterSection = document.querySelector('.stats-section');
  if (counterSection) {
    counterObserver.observe(counterSection);
  }
});
