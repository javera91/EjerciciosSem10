'use strict'
/*
Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un laboratorio.
Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica la fila A del laboratorio 2
Entrada: LAB2#B
Salida: C
*/
function generarAsignacion(codigoLab) {
    // Verificar que el formato sea correcto
    let formatoCorrecto = /^LAB\d#([A-Z])$/.test(codigoLab);
  
    if (formatoCorrecto) {
      // Extraer la letra de la fila y convertirla a su siguiente letra
      let letraFila = codigoLab.charAt(codigoLab.length - 1);
      let siguienteLetra = String.fromCharCode(letraFila.charCodeAt(0) + 1);
  
      // Devolver el resultado
      return siguienteLetra;
    } else {
      // Devolver un mensaje de error si el formato no es correcto
      return "Formato incorrecto. Por favor, ingresa un código válido.";
    }
}
  
  // Ejemplo de uso
  let entrada = "LAB2#B";
  let resultado = generarAsignacion(entrada);
  alert(resultado); // Salida: "C"