function validar(event) {
  event.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;

  if (nombre == "") {
    alert("Por favor, introduce tu nombre.");
  }

  if (telefono == "") {
    alert("Por favor, introduce tu número de teléfono.");
  }

  if (email == "") {
    alert("Por favor, introduce tu dirección de correo electrónico.");
  }

  alert("El formulario ha sido enviado correctamente.");
}

var form = document.getElementById("Contacto");
form.addEventListener("submit", validar);


