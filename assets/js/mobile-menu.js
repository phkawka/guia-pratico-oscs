document.addEventListener('DOMContentLoaded', function() {
  const sideNav = document.querySelector('.side-nav');
  const menuToggle = document.createElement('button');
  menuToggle.classList.add('menu-toggle');
  menuToggle.textContent = 'Menu';

  sideNav.insertBefore(menuToggle, sideNav.firstChild);

  menuToggle.addEventListener('click', function() {
    sideNav.classList.toggle('open');
  });
});
