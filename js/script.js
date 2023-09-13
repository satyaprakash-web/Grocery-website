let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  login.classList.toggle('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  login.classList.remove('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

function myFunction(contentNumber) {
  var dots = document.getElementById("dots" + contentNumber);
  var moreText = document.getElementById("more" + contentNumber);
  var btnText = document.getElementById("myBtn" + contentNumber);

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else { 
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    991:{
      slidesPerView: 3,
    },
  },
});