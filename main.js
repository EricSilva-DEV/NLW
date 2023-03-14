/* Abrir e fechar menu ao clicar */
const nav = document.querySelector('#header nav')
const toggle =  document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* esconder o menu ao clicar */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* Testimonials slider swiper */
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
    el: '.swiper-pagination'
   },
   mousewhell: true,
   keyboard: true
  });

  /* ScrollReveal: Mostrar elementos quando der scroll na página */
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
    reset: true
})

  scrollReveal.reveal(
    '#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials, #contact .text, #contact .links',
    { interval: 100 }
  
)