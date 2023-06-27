function checkUserAndPassword() {
  var username = document.getElementById("typedUsername").value;
  var password = document.getElementById("typedPassword").value;

  if (username === "hala" && password === "123") {
    alert("welcome");
  } else if (username === "hala" && password === "hala3112") {
    window.location.href = "loop.html";
  } else {
    alert(" You cannot enter.");
  }
}

// (function ($) {
//   // Begin jQuery
//   $(function () {
//     // DOM ready
//     // If a link has a dropdown, add sub menu toggle.
//     $("nav ul li a:not(:only-child)").click(function (e) {
//       $(this).siblings(".nav-dropdown").toggle();
//       // Close one dropdown when selecting another
//       $(".nav-dropdown").not($(this).siblings()).hide();
//       e.stopPropagation();
//     });
//     // Clicking away from dropdown will remove the dropdown class
//     $("html").click(function () {
//       $(".nav-dropdown").hide();
//     });
//     // Toggle open and close nav styles on click
//     $("#nav-toggle").click(function () {
//       $("nav ul").slideToggle();
//     });
//     // Hamburger to X toggle
//     $("#nav-toggle").on("click", function () {
//       this.classList.toggle("active");
//     });
//   }); // end DOM ready
// })(jQuery); // end jQuery

let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  function slide(){
    plusSlides(1)
    setTimeout(slide, 5000);
}

slide();