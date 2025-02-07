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
  }
});
