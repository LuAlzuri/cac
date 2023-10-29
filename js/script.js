//alert("Estoy funcionando")
const testimonials = document.querySelectorAll('.testimonial');
let indice = 0;

// Precios de recorridos en dolares
const recorridoNaturalEnDolares = 3
const recorridoArquitectonicoEnDolares = 4
const recorridoMonumentalEnDolares = 5


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


//Validación del form**************************************
const formulario = document.getElementById("contacto");
const userName = document.getElementById("inputName");
const userEmail = document.getElementById("inputEmail4");
const userLname = document.getElementById("inputLname");
const userTel = document.getElementById("inputTel");

const alertName = document.getElementById("alertName");
const alertTel = document.getElementById("alertTel");
const alertEmail = document.getElementById("alertEmail");
const alertSucces = document.getElementById("alertSucces");
const alertLname = document.getElementById("alertLname");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/ ;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

function validarTel (){
    let valueInt = parseInt(userTel.value);
    if(!Number.isInteger(valueInt)){
        return false;
    }
    else{
        userTel.value = valueInt;
        return true;
    }
}

const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
};

const pintarMensajeExito = () => {
    alertSucces.classList.remove('d-none');
};

formulario.addEventListener("submit", (e)=> {
    e.preventDefault(); 
    const errores = [];

    if(!regUserName.test(userName.value) || !userName.value.trim())
    {
        userName.classList.add("is-invalid");
        errores.push({
            tipo: alertName,
            msg: "Formato no válido, solo letras."
        })
    }else{
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        alertName.classList.add('d-none');
    }
    if(!regUserName.test(userLname.value) || !userLname.value.trim())
    {
      userLname.classList.add("is-invalid");
        errores.push({
            tipo: alertLname,
            msg: "Formato no válido, solo letras."
        })
    }else{
        userLname.classList.remove('is-invalid');
        userLname.classList.add('is-valid');
        alertLname.classList.add('d-none');
    }

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim())
    {
        userEmail.classList.add('is-invalid');
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        })
    }else{
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        alertEmail.classList.add('d-none');
    }

    if(errores.length!==0){
        pintarMensajeError(errores);
        return;
    }

    console.info("Formulario enviado correctamente.");
    pintarMensajeExito();
})
//Validación del form


//API Dolar
fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => {
        let dolarBlue = data.venta
        let recorridoNatural = document.getElementById("recorrido-natural")
        recorridoNatural.innerText = "Precio: $" + (dolarBlue * recorridoNaturalEnDolares)
        let recorridoArquitectonico = document.getElementById("recorrido-arquitectonico")
        recorridoArquitectonico.innerText = "Precio: $" + (dolarBlue * recorridoArquitectonicoEnDolares)
        let recorridoMonumental = document.getElementById("recorrido-monumental")
        recorridoMonumental.innerText = "Precio: $" + (dolarBlue * recorridoMonumentalEnDolares)
    })
    .catch(() => {
        let recorridoNatural = document.getElementById("recorrido-natural")
        recorridoNatural.innerText = "Consultar precio"
        let recorridoArquitectonico = document.getElementById("recorrido-arquitectonico")
        recorridoArquitectonico.innerText = "Consultar precio"
        let recorridoMonumental = document.getElementById("recorrido-monumental")
        recorridoMonumental.innerText = "Consultar precio"
    })