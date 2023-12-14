'use strict'
/*
Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.
Entrada: https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link
Salida: 1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1
*/

let ubiID = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let start = ubiID.indexOf('1');
let finish = ubiID.indexOf('/view');
alert(ubiID.slice(start,finish));