/* Asif Ahmmed Joy — site behaviour. No dependencies. */
(function () {
  'use strict';

  /* ---- current year ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- scroll spy: highlight the section you're reading ---- */
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navAnchors.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-70px 0px -65% 0px', threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---- publication filter ---- */
  var filterBar = document.querySelector('.pub-filter');
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-f]');
      if (!btn) return;
      var f = btn.dataset.f;

      filterBar.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      document.querySelectorAll('.pub').forEach(function (p) {
        var tags = (p.dataset.tags || '').split(/\s+/);
        p.hidden = !(f === 'all' || tags.indexOf(f) !== -1);
      });

      /* hide a year heading whose papers are all filtered out */
      document.querySelectorAll('.pub-year').forEach(function (h) {
        var list = h.nextElementSibling;
        if (!list) return;
        var any = Array.prototype.some.call(list.querySelectorAll('.pub'), function (p) {
          return !p.hidden;
        });
        h.hidden = !any;
        list.hidden = !any;
      });
    });
  }

  /* ---- visitor counter (GoatCounter public endpoint) ---- */
  var GC = window.GOATCOUNTER_CODE;
  var out = document.getElementById('visit-count');
  if (GC && out) {
    fetch('https://' + GC + '.goatcounter.com/counter/TOTAL.json')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (d) {
        if (!d || !d.count) return;
        out.textContent = d.count + ' visits';
        out.hidden = false;
      })
      .catch(function () { /* counter is decorative — stay silent */ });
  }
})();
