/* FMC Website — main.js */

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ──────────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === page) link.classList.add('active');
    if (page === '' && href === 'index.html') link.classList.add('active');
  });

  // ── Mobile menu ───────────────────────────────────────────────
  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // ── News tabs ─────────────────────────────────────────────────
  document.querySelectorAll('.news-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.news-tabs-nav');
      if (parent) {
        parent.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
      }
      tab.classList.add('active');
    });
  });

  // ── Page tabs (news page) ─────────────────────────────────────
  document.querySelectorAll('.page-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.page-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ── Filter buttons ────────────────────────────────────────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.filter-bar');
      if (parent) parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── Mega menu: close on outside click ─────────────────────────
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.mega-menu').forEach(m => {
        m.style.display = '';
      });
    }
  });

  // ── Newsletter / subscribe form ───────────────────────────────
  document.querySelectorAll('.newsletter-btn, .subscribe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const form = btn.closest('form') || btn.parentElement;
      const input = form ? form.querySelector('input[type="email"], .newsletter-input, .subscribe-input') : null;
      if (input && input.value && input.value.includes('@')) {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Subscribed';
        btn.style.background = '#00D084';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.background = '';
          if (input) input.value = '';
        }, 2500);
      } else if (input) {
        input.style.borderColor = '#e05c5c';
        input.focus();
        setTimeout(() => { input.style.borderColor = ''; }, 2000);
      }
    });
  });

  // ── Contact form submit ───────────────────────────────────────
  document.querySelectorAll('.form-submit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const orig = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Message Sent';
      btn.style.background = '#00D084';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
      }, 3000);
    });
  });

  // ── Scroll: sticky header shadow ─────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 32px rgba(0,0,0,0.4)';
      } else {
        header.style.boxShadow = '';
      }
    }, { passive: true });
  }

  // ── Chip grid animation ───────────────────────────────────────
  const chips = document.querySelectorAll('.chip-cell');
  if (chips.length) {
    setInterval(() => {
      const idx = Math.floor(Math.random() * chips.length);
      chips[idx].style.opacity = Math.random() > 0.5 ? '1' : '0.2';
      setTimeout(() => { chips[idx].style.opacity = ''; }, 800);
    }, 120);
  }

});
