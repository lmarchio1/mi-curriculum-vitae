document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("nombre").value;
    var lastname = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    if (name === "" || lastname === "" || email === "") {
    document.getElementById("message2").innerHTML = "Por favor, completa todos los campos requeridos";
    } else {
    var message = document.getElementById("message2").value;
    document.getElementById("message2").innerHTML = "Gracias por completar el formulario, " + name + " " + lastname
    }
    });