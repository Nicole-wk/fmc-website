/* FMC Website — main.js v2 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll: header class ─────────────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Active nav link ──────────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === page) link.classList.add('nav-active');
  });

  // ── Mobile menu ───────────────────────────────────────────────
  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ── Scroll reveal ─────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ── Counter animation ─────────────────────────────────────────
  function animateCount(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 28);
  }
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(animateCount);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.hero-stats, .stat-band').forEach(el => counterObserver.observe(el));
  // Also run for any already-visible
  setTimeout(() => {
    document.querySelectorAll('[data-count]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) animateCount(el);
    });
  }, 1200);

  // ── News tabs ─────────────────────────────────────────────────
  document.querySelectorAll('.news-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.news-tab-panel').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const panelId = 'tab-' + this.dataset.tab;
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });

  // ── Filter buttons ────────────────────────────────────────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const bar = this.closest('.filter-bar');
      if (bar) bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ── Newsletter ────────────────────────────────────────────────
  document.querySelectorAll('.newsletter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.previousElementSibling;
      if (input && input.value.includes('@')) {
        this.textContent = 'Subscribed ✓';
        this.style.background = 'linear-gradient(135deg,#2ecc84,#00D084)';
        input.value = '';
        setTimeout(() => { this.textContent = 'Subscribe →'; this.style.background = ''; }, 3000);
      }
    });
  });

  // ── Contact form ──────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        const success = document.getElementById('formSuccess');
        if (success) success.style.display = 'block';
        btn.textContent = 'Message Sent ✓';
      }, 900);
    });
  }

  // ── Hover glow effect on cards ────────────────────────────────
  document.querySelectorAll('.tech-card, .card, .dept-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      this.style.background = this.style.background.replace(/radial-gradient[^,]+,/, '') || this.style.background;
    });
  });

});
