console.log("Ejercicio 2");

function promedioStudent(M, calArray) {

    let suma = 0;
 for(var i = 0; i < calArray.length; i ++){
    suma += calArray[i];
 }
 p=suma/6;
 return M.toString() + " " + p.toFixed(2).toString();
    
}