// Scroll suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Botão "Voltar ao Topo"
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = "↑";
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.display = "none";
  backToTopButton.style.padding = "10px";
  backToTopButton.style.borderRadius = "50%";
  backToTopButton.style.backgroundColor = "#007bff";
  backToTopButton.style.color = "#fff";
  backToTopButton.style.border = "none";
  backToTopButton.style.cursor = "pointer";
  
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Mensagem de confirmação no formulário
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
  