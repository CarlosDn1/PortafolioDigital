function FondoImagen() {
    if (document.body.style.backgroundImage === 'none') {
        document.body.style.backgroundImage = 'url("Imagenes/pxfuel3.jpg")'; // Cambiar por la ruta
      } else {
        document.body.style.backgroundImage = 'none';
      }
}

const colorLink = document.getElementById('color-seleccionar');
    const colorOptions = document.getElementById('colores');

    colorLink.addEventListener('click', () => {
        if (colorOptions.classList.contains('coloresVer')) {
            colorOptions.classList.remove('coloresVer');
        } else {
            colorOptions.classList.add('coloresVer');
        }
    });
    
    

  function cambiarColor(num) {
    var a = document.querySelector('.caja1');
    var b = document.querySelector('.caja2');
    var c = document.querySelector('.caja3');
    var d = document.querySelector('.caja4');
    var e = document.querySelector('.contenedor_skills');
    var f = document.querySelector('.cajaproyectos');
    var g = document.querySelector('.caja2proyectos');
    var h = document.querySelector('.caja5servicios');
    var i = document.querySelector('.caja6formulario');
    if(num === 1){
      a.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      b.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      c.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      d.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      e.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      f.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      g.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      h.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
      i.style.background = 'linear-gradient(to right, #9dff00, #315c00)';
     }
     if(num === 2){
      a.style.background = 'linear-gradient(to right, #132133, #03080E)';
      b.style.background = 'linear-gradient(to right, #132133, #03080E)';
      c.style.background = 'linear-gradient(to right, #132133, #03080E)';
      d.style.background = 'linear-gradient(to right, #132133, #03080E)';
      e.style.background = 'linear-gradient(to right, #132133, #03080E)';
      f.style.background = 'linear-gradient(to right, #132133, #03080E)';
      g.style.background = 'linear-gradient(to right, #132133, #03080E)';
      h.style.background = 'linear-gradient(to right, #132133, #03080E)';
      i.style.background = 'linear-gradient(to right, #132133, #03080E)';
     }
     if(num === 3){
      a.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      b.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      c.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      d.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      e.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      f.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      g.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      h.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
      i.style.background = 'linear-gradient(to right, #ffffff, #2578dd)';
     }
     if(num === 4){
      a.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      b.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      c.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      d.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      e.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      f.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      g.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      h.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
      i.style.background = 'linear-gradient(to right, #c96334, #ff0000)';
     }
}

let fuenteActual = 'poppins'; // Fuente actual

function cambiarFuente() {
  let nuevaFuente;
  if (fuenteActual === 'poppins') {
    nuevaFuente = 'times new roman';
  } else {
    nuevaFuente = 'poppins';
  }
  document.querySelector('style').textContent = `* { font-family: '${nuevaFuente}', sans-serif !important; }`;
  fuenteActual = nuevaFuente;
}

let idiomaActual = 'es';

function cambiarIdioma() {
  if (idiomaActual === 'es') {
    idiomaActual = 'en';
  } else {
    idiomaActual = 'es';
  }

  if (idiomaActual === 'es') {
    document.getElementById('texto1').textContent = 'Ingeniero En Sistemas Computacionales';
    document.getElementById('texto2').textContent = 'Opciones';
    document.getElementById('texto3').textContent = 'Sobre mi';
    document.getElementById('texto4').textContent = 'Nombre completo: Carlos Daniel Muñiz Osorio';
    document.getElementById('texto5').textContent = 'Edad: 18';
    document.getElementById('texto6').textContent = 'Pais: Mexico';
    document.getElementById('texto7').textContent = 'Idiomas: Español, Ingles';
    document.getElementById('texto8').textContent = 'Numero: 7225533495';
    document.getElementById('texto9').textContent = 'Correo: carlosdm123212@ gmail.com';
    document.getElementById('texto10').textContent = 'Direccion: Toluca de lerdo. Izcalli Blanco 43';
    document.getElementById('texto11').textContent = 'Biografia';
    document.getElementById('texto12').textContent = 'Soy un programador siempre me ha encantado resolver problemas desde toda la logica que hay que aplicar y plantear una posible solucion en tu mente de como podrias crear el codigo del programa para que funcione cada parte y como se conecta todo entre si para conseguir que el programa realize una tarea especifica eso fue lo que me llevo a escojer esta carrera, Los lenguajes de programacion que mas domino son Java, C, JavaScript con HTML CSS un poco de php, este es mi portafolio digital que cree yo mismo usando HTML con CSS Pero para trabajar en un proyecto estoy dispuesto a seguir aprendiendo de cualquier lenguaje de programacion y de cualquier framework, tengo 2 certificados de NETACAD, Soy bueno para los trabajos en equipo y colaborar con otras personas para un proyecto en conjunto, Creo en la importancia de la comunicación efectiva y la capacidad de trabajar en entornos dinámicos y colaborativos. Mi objetivo es convertirme en un programador versátil capaz de desarrollar una amplia gama de aplicaciones y sitios web funcionales y atractivos.';
    document.getElementById('texto13').textContent = 'Habilidades';
    document.getElementById('texto14').textContent = 'Certificados';
    document.getElementById('texto15').textContent = 'Certificado NE';
    document.getElementById('texto16').textContent = 'Certificado IOT';
    document.getElementById('texto17').textContent = 'Mis Proyectos';
    document.getElementById('texto18').textContent = 'Proyecto 1';
    document.getElementById('texto19').textContent = 'Proyecto 2';
    document.getElementById('texto20').textContent = 'Servicios';
    document.getElementById('texto21').textContent = 'Desarrollo Web';
    document.getElementById('texto22').textContent = 'Desarrollo De Aplicaciones';
    document.getElementById('texto23').textContent = 'Integracion de APIS';
    document.getElementById('texto24').textContent = 'Desarrollo Backend';
    document.getElementById('texto25').textContent = 'Formulario De Contacto';
    document.getElementById('texto26').textContent = 'Nombre';
    document.getElementById('texto27').textContent = 'Correo';
    document.getElementById('texto28').textContent = 'Mensaje';
    document.getElementById('texto29').textContent = 'Enviar';
  } else {
    document.getElementById('texto1').textContent = 'Computer Systems Engineer';
    document.getElementById('texto2').textContent = 'Options';
    document.getElementById('texto3').textContent = 'About me';
    document.getElementById('texto4').textContent = 'Full name: Carlos Daniel Muñiz Osorio';
    document.getElementById('texto5').textContent = 'Age: 18';
    document.getElementById('texto6').textContent = 'Country: Mexico';
    document.getElementById('texto7').textContent = 'Languages: Spanish, English';
    document.getElementById('texto8').textContent = 'Number: 7225533495';
    document.getElementById('texto9').textContent = 'Mail: carlosdm123212@ gmail.com';
    document.getElementById('texto10').textContent = 'Address: Toluca de lerdo. Izcalli Blanco 43';
    document.getElementById('texto11').textContent = 'Biography';
    document.getElementById('texto12').textContent = 'I am a programmer, I have always loved solving problems from all the logic that must be applied and proposing a possible solution in your mind of how you could create the code of the program so that each part works and how everything is connected together to make the program I performed a specific task that was what led me to choose this career. The programming languages ​​that I master the most are Java, C, JavaScript with HTML CSS a little bit of PHP, this is my digital portfolio that I created myself using HTML with CSS But to work on a project I am willing to continue learning any programming language and any framework, I have 2 NETACAD certificates, I am good at teamwork and collaborating with other people for a joint project, I believe in the importance of effective communication and the ability to work in dynamic and collaborative environments. My goal is to become a versatile programmer capable of developing a wide range of functional and attractive applications and websites.';
    document.getElementById('texto13').textContent = 'Skills';
    document.getElementById('texto14').textContent = 'Certificates';
    document.getElementById('texto15').textContent = 'Certificate NE';
    document.getElementById('texto16').textContent = 'Certificate IOT';
    document.getElementById('texto17').textContent = 'My Projects';
    document.getElementById('texto18').textContent = 'Project 1';
    document.getElementById('texto19').textContent = 'Project 2';
    document.getElementById('texto20').textContent = 'Services';
    document.getElementById('texto21').textContent = 'Web Development';
    document.getElementById('texto22').textContent = 'Applications Development';
    document.getElementById('texto23').textContent = 'APIS Integration';
    document.getElementById('texto24').textContent = 'Backend Development';
    document.getElementById('texto25').textContent = 'Contact Form';
    document.getElementById('texto26').textContent = 'Name';
    document.getElementById('texto27').textContent = 'Mail';
    document.getElementById('texto28').textContent = 'Message';
    document.getElementById('texto29').textContent = 'Send';
  }
}