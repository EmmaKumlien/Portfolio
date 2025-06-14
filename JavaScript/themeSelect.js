function setTheme(theme) {
    document.body.classList.remove('lightmode', 'darkmode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(prefersDark ? 'darkmode' : 'lightmode');
  }
  
  document.getElementById('toggle-theme').addEventListener('click', () => {
    const current = document.body.classList.contains('darkmode') ? 'darkmode' : 'lightmode';
    const next = current === 'darkmode' ? 'lightmode' : 'darkmode';
    setTheme(next);
  });
  