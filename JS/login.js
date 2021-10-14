globalThis.registros = [];

function  login() {
if(correo.length == 0) {
    alert('Error - Campo Correo vacío');
    return false;
}
if(contrasena.length == 0) {
    alert('Error - Campo Contraseña vacío');
    return false;
}
if (validarCAPTCHA == false){
    return false;
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
    return true;
}
else{
    return false;
}
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro =  agregarRegistro;