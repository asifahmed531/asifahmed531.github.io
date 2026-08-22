/* Asif Ahmmed Joy — site behaviour. No dependencies. */
(function () {
  'use strict';

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

  /* ---- headshot: fall back to initials if the image is missing ---- */
  var photo = document.querySelector('img.photo');
  if (photo) {
    photo.addEventListener('error', function () {
      var ph = document.createElement('div');
      ph.className = 'photo-ph';
      ph.setAttribute('aria-hidden', 'true');
      ph.textContent = 'AJ';
      photo.replaceWith(ph);
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
      .catch(function () { /* decorative — stay silent */ });
  }
})();
