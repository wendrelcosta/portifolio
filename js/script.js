document.addEventListener('DOMContentLoaded', function () {
  // 1. Seções (Acordeão)
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      const header = section.querySelector('.section-header');
      const content = section.querySelector('.section-content');
      const arrow = header.querySelector('.arrow');

      if (header && content && arrow) { // Verifica se os elementos existem
          header.addEventListener('click', () => {
              content.style.display = content.style.display === 'block' ? 'none' : 'block';
              arrow.classList.toggle('active');
          });
      }
  });

  // 2. Animação de fundo e cor lateral
  const lateral = document.querySelector('.lateral');
  const imagens = ['./assets/imagens/plano_de_fundo.jpg',
    './assets/imagens/plano_de_fundo2.jpg',
    './assets/imagens/plano_de_fundo3.jpg',
    './assets/imagens/plano_de_fundo4.jpg',
    './assets/imagens/plano_de_fundo5.jpg'
  ];
  const colors = [ '#662DB0',
    '#7770a4',
    '#5C3979',
    '#A931D1',
    '#8D6E74' ];
  let imageIndex = 0;

  function changeBackgroundImage() {
      if (document.body && lateral) { // Verifica se os elementos existem
          document.body.style.backgroundImage = `url('${imagens[imageIndex]}')`;
          lateral.style.backgroundColor = colors[imageIndex];
      }
      imageIndex = (imageIndex + 1) % imagens.length;
  }

  if (lateral) { // Verifica se o elemento existe antes de iniciar o intervalo
      setInterval(changeBackgroundImage, 3000);
  } else {
      console.error("Elemento .lateral não encontrado!");
  }

  // 3. Carrossel de imagens
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carrosel-item");
    const indicators = document.querySelectorAll(".indicator");

    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));

        slides[n].classList.add("active");
        indicators[n].classList.add("active");

        currentSlide = n;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            showSlide(index);
        });
    });

    // Garante que o primeiro slide está visível ao carregar
    showSlide(0);
});


  // 4. Link Mentoria
  const link = document.querySelector('#mentoria-link');

  if (link) { // Verifica se o elemento existe
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Impede a navegação imediata
          window.open(link.href, '_blank');
      });
  } else {
      console.error("Elemento #mentoria-link não encontrado!");
  }
});