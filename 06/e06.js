'use strict'
/*
Escribir un programa que obtenga el nombre de usuario de facebook desde la url.
Ejemplo:
Entrada: facebook.com/nombreuser
Salida: nombreuser
*/

let url = "facebook.com/nombreuser";
let start = url.indexOf('/');
alert(url.slice(start+1));