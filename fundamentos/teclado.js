// arquivo: teclado.js
// Códigos de teclas - aqui vão todos os que forem necessários
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
function Teclado(elemento) {
this.elemento = elemento;
// Array de teclas pressionadas
this.pressionadas = [];
// Registrando o estado das teclas no array
var teclado = this;
elemento.addEventListener('keydown', function(evento) {
teclado.pressionadas[evento.keyCode] = true;
});
elemento.addEventListener('keyup', function(evento) {
teclado.pressionadas[evento.keyCode] = false;
});
}
Teclado.prototype = {
pressionada: function(tecla) {
return this.pressionadas[tecla];
}
}