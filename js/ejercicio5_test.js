console.log("Ejercicio 5 test");
const ejercicio5Data = [
    [200, 300, 100],
    [468,600,132],
    [120, 500, 380],
    [299, 500, 201],
];

ejercicio5Data.forEach(element => {
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);

const cTest=cambio(element[0], element[1]);

console.log( cTest === element[2] ? "🟢" : "❌", 
         cTest, " | ",
         element[2]             
          );
}) 