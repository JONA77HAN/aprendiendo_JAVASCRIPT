//variables en Javascript
 string = 'esto es un string';
 number = 35;
 booleano = true; //o false, paso señal o no paso señal, 0 o 1.

//var let y const   var tiene valor global, const no se puede cambiar, let es local
let numero2;
numero2 = 29;
//podemos declararla en la misma linea
let numero = 29;

//undefind  no esta definida ni inicializada
//null esta vacio, es un valor vacio y esta inicializada
//Nan   not a number
nombre = prompt('¿cual es tu nombre?');
//En este, mostraremos por pantalla, el alert sale en eso muismo un alerta.
frase = `hola ${nombre} como estas?` 
//backtick's se hace con alt96
document.write(frase);

let nombre = 'jonathan'
let pregunta = '¿cual es tu color favorito?'

document.write(`${nombre} queria preguntarte ${pregunta}`)
