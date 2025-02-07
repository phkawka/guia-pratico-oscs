document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.page-header');
  var mainContent = document.querySelector('.main-content');
  var nav = document.querySelector('.side-nav');

  if (header && mainContent && nav) {
    // Move o nav para antes do main-content
    mainContent.parentNode.insertBefore(nav, mainContent);

    // Envolve o nav e o main-content em um novo div
    var wrapper = document.createElement('div');
    wrapper.className = 'main-content-wrapper';
    mainContent.parentNode.insertBefore(wrapper, mainContent);
    wrapper.appendChild(nav);
    wrapper.appendChild(mainContent);

    // Ajusta a posição do menu lateral baseado na altura do cabeçalho
    function adjustSideNav() {
      var headerHeight = header.offsetHeight;
      nav.style.top = headerHeight + 'px';
      nav.style.height = 'calc(100vh - ' + headerHeight + 'px)';
    }

    // Chama a função inicialmente e adiciona um listener para redimensionamento
    adjustSideNav();
    window.addEventListener('resize', adjustSideNav);
  }
});
