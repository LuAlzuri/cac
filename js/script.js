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
/*const formulario = document.getElementById("contacto");
const userName = document.getElementById("inputName");
const userEmail = document.getElementById("inputEmail");
const userTel = document.getElementById("inputTel");
const adultos = document.getElementById("inputAdults");
const childs = document.getElementById("inputChilds");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/ ;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


formulario.addEventListener("submit", (e)=> {
    e.preventDefault(); 

    if(regUserName.test(userName.value) || userName.value.trim())
    {
        alert("Solo letras porfavor")
        return
    }

    /*if(!Number.isInteger(userTel) || Number.isInteger(adultos) || Number.isInteger(childs)){
        alert("Solo Números")
        return
    }

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim())
    {
        alert("Porfavor colocar un correo válido")
    }
    
    console.info("Formulario enviado correctamente.");*/

    document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("contacto")
          .addEventListener("submit", validarFormulario);
      });

    function validarFormulario(evento) {
        evento.preventDefault(); // Evita que se envíe el formulario
        var usuario = document.getElementById("usuario").value; //Tomamos los datos del form
        var num = document.getElementById("num").value;     //Tomamos los datos del form
        var mail = document.getElementById("correo").value;//Tomamos los datos del form
        var adulto= document.getElementById("adulto").value;//Tomamos los datos del form
        var niño= document.getElementById("niño").value;//Tomamos los datos del form
        
        const regMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //Exp.Reg (correos)
        const regNum = /^([0-9])*$/; //Expresiones regulares (Numeros)
        let fechaHoy = new Date(new Date().setHours(0,0,0,0));
        fecha = document.getElementById("fecha").value;//Tomamos los datos del form

        //Con esto detectamos que no deje los campos VACIOS
        if (usuario.length === 0 || 
            num.length === 0 ||
            mail.length === 0 ||
            adulto.length === 0 ||
            niño.length === 0) {
            alert("Por favor, todos los campos son requeridos.");
            return;
        }
        //Detectamos que se complete solo palabras
        if(regNum.test(usuario)){
            document.getElementById("usuario").style.border = "red 1px solid";
            return;
        }else{document.getElementById("usuario").style.border= "1px rgb(136, 136, 136) solid";}
        //Detectamos que se complete solo numeros
        if(!regNum.test(num)){
            document.getElementById("num").style.border = "red 1px solid";
            return;
        }else{document.getElementById("num").style.border= "1px rgb(136, 136, 136) solid"}
        //Solo correo
        if(!regMail.test(mail) || !mail.trim()){
            document.getElementById("correo").style.border = "red 1px solid";
            return;
        }else{document.getElementById("correo").style.border= "1px rgb(136, 136, 136) solid"}
        //Solo num adultos
        if(!regNum.test(adulto)){
            document.getElementById("adulto").style.border = "red 1px solid";
            return;
        }else{document.getElementById("adulto").style.border= "1px rgb(136, 136, 136) solid"}
        //Solo num Niños
        if(!regNum.test(niño)){
            document.getElementById("niño").style.border = "red 1px solid";
            return;
        }else{document.getElementById("niño").style.border= "1px rgb(136, 136, 136) solid"}
        //Comparaciones de fechas con la actual.
        if(new Date(fecha.split("-").join("/"))<=fechaHoy){
            document.getElementById("fecha").style.border = "red 1px solid";
            return;
        }
        else{
            document.getElementById("fecha").style.border= "1px rgb(136, 136, 136) solid"
        }

        alert("Todos los datos se completaron con éxito. Nos estaremos comunicando."); //Esto se muestra al completar todo ok

        document.getElementById("usuario").value = ""; //Esto borra los campos
        document.getElementById("num").value = "";    //Esto borra los campos
        document.getElementById("correo").value = "";
        document.getElementById("adulto").value = "";
        document.getElementById("niño").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("mensaje").value = "";
    }

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