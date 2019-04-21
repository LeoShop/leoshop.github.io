var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});



function openForm() {
    document.getElementById("myForm").style.display = "block";
  };
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  };

  function openFormReg() {
    document.getElementById("myFormReg").style.display = "block";
  };
  function closeFormReg() {
    document.getElementById("myFormReg").style.display = "none";
  };

  var humburger = document.querySelector('.js-humburger');
var navigation = document.querySelector('.js-navigation');

humburger.addEventListener('click', function () {
    navigation.classList.toggle('active');
    humburger.classList.toggle('active');
})
