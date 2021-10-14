document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-login").addEventListener('submit', validarCAPTCHA);
    document.getElementById("form-login").addEventListener('submit', login); 
  });

globalThis.registros = [];

function login() {
var correo = document.getElementById('correo').value;
var contrasena = document.getElementById('contrasena').value;


if(correo.length == 0) {
    alert('Error - Campo Correo vacío');
    document.getElementById("correo").value = "";
    correo.focus();
    return false;
}
if (!/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/g.test(correo)) {
    alert("Correo electronico incorrecto");
    document.getElementById("correo").value = "";
    correo.focus();
    return false;
}
if(contrasena.length == 0) {
    alert('Error - Campo Contraseña vacío');
    document.getElementById("contrasena").value = "";
    contrasena.focus();
    return false;
}
if (!/[a-z]/.test(contrasena) || !/[A-Z]/.test(contrasena) || !/[0-9]/.test(contrasena) || password.length <= 8) { 
    alert("Contraseña incorrecta");
    document.getElementById("contrasena").value = "";
    contrasena.focus();
    return false;
}
if (validarCAPTCHA == false){
    alert('No se pudo iniciar sesión');
    return false;
}
else {
    alert('Sesión iniciada con exito');
}
return true;
}

function agregarRegistro() {
    function usuario(nombre,apellido,telefono,correo,contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    var nomHtml = document.getElementById("nombre").value;
    var apellHtml = document.getElementById("apellido").value;
    var telHtml = document.getElementById("telefono").value;
    var corHtml = document.getElementById("correo").value;
    var contHtml = document.getElementById("contrasena").value;

    let newusuario = new usuario(nomHtml, apellHtml, telHtml, corHtml,contHtml);
    registros.push (newusuario);
};

function validarCAPTCHA(arreglo) {
var arreglo = 1000;
if(captcha.length == arreglo){
    alert('CAPTCHA válido');
    return true;
}
alert('CAPTCHA no válido');
return false;

}

//module.exports.login = login;
//module.exports.registros = registros;
//module.exports.validarCAPTCHA = validarCAPTCHA;
//module.exports.agregarRegistro =  agregarRegistro;