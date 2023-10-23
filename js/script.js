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

