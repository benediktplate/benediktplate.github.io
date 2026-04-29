// Theme toggle (persistent) — shares localStorage key 'bp-theme' with main page
(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('bp-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('bp-theme', next);
    });
  }
})();
