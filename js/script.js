//alert("Estoy funcionando")
const testimonials = document.querySelectorAll('.testimonial');
let indice = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

showTestimonial(indice);

document.getElementById('prevBtn').addEventListener('click', () => {
    indice = (indice - 1 + testimonials.length) % testimonials.length;
    showTestimonial(indice);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    indice = (indice + 1) % testimonials.length;
    showTestimonial(indice);
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 