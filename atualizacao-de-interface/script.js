document.addEventListener('DOMContentLoaded', function () {
  var socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      socialLinks.forEach(function (item) { item.classList.remove('is-active'); });
      link.classList.add('is-active');

      if (!link.classList.contains('email-copy')) return;

      event.preventDefault();
      var email = link.getAttribute('data-email');
      var label = link.querySelector('small');
      var originalLabel = label.textContent;

      navigator.clipboard.writeText(email).then(function () {
        label.textContent = 'Copiado';
        link.classList.add('is-copied');
        window.setTimeout(function () {
          label.textContent = originalLabel;
          link.classList.remove('is-copied');
        }, 2200);
      }).catch(function () {
        label.textContent = 'Selecione o email';
      });
    });
  });
});
