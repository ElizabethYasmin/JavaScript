"use strict"

//DATOS NUMERICOS
/*
var edad=23;
var cantidad="100";
var nuevaCantidad=Number(cantidad);

//parseInt() //para convertir tus datos a enteros
//parseFloat()//para convertir tus datos a flotante
*/

//DATOS CADENAS DE TEXTOS O STRINGS

/*
var bebida="agua";
var comida='ceviche';

var instruccion = "El platillo se llama 'ceviche'";

var edad = 23;
var edadtxt=String(edad);
*/

//DATOS BOOLEANOS
/*
var activo= false;
var estado=Boolean(10>9);
*/
//FECHAS
/*
var fecha = new Date();
//utilizacion de Gets
//getHours(),getDate(),getDay...
*/
//SIMBOLOS
/*
var simbolo1= Symbol();
var simbolo2= Symbol();

var ambiente =Symbol('dev');
*/


//JSON =>Javascript Object Notation

var persona={nombre: 'Yasmin',twiter:'Elizabeth'};
//accediendo al nombre de persona consola: persona.nombre

var personas=[
    {nombre: 'Fernando',twiter:'Eloy'},
    {nombre: 'Chrsitian',twiter:'Jean'},
    {nombre: 'Joel',twiter:'Jordy'},
    //puedo agregar a persona aqui
    persona
]
//transformando al objeto JSON a string(cadena de texto)

var personaJSON=JSON.stringify(persona);//va convertir todo lo que tenemos en una cadena de texto

//convertiendo a un objetoJSON a objeto 

var nuevaPersona = JSON.parse(personaJSON);


