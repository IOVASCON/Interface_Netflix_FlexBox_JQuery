$(document).ready(function () {
  $('.carousel').slick({
    dots: true, // Adiciona os pontos de navegação
    infinite: true, // Loop infinito
    speed: 300, // Velocidade da transição
    slidesToShow: 3, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides ao rolar
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
