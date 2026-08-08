// Menu mobile: abrir/fechar

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('no-scroll');

    if (sidebar.classList.contains('open')) {
        menuIcon.src = 'assets/images/icon-close.svg';
        menuToggle.setAttribute('aria-label', 'Fechar Menu');
    } else {
        menuIcon.src = 'assets/images/icon-menu.svg';
        menuToggle.setAttribute('aria-label', 'Abrir Menu');
    }
});

// Botão Copy: copia a senha do wifi

const copyButton = document.querySelector('.copy-button');
const passwordText = document.querySelector('.wifi-row-password span');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordText.textContent.trim())
    .then(() => {
      const originalText = copyButton.textContent;
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1500);
    })
    .catch(() => {
      console.error('Não foi possível copiar a senha.');
    });
});