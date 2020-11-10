$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:false,
    slidesToShow:4,
    infinite:true,
    speed:1500,
    easing:'ease',
    autoplay:true,
    autoplaySpeed:1500,
    responsive:[
      {
        breakpoint: 1220,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint: 605,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});



