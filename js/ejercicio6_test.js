console.log("Ejercicio 6 test");

const ejercicio6Data = [
    [2, 4, 4],
    [4, 3, 6],
    [3, 5, 7.5],
    [9, 10, 45],
];

ejercicio6Data.forEach(element => {
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);

const sTest=sup(element[0], element[1]);

console.log( sTest=== element[2] ? "🟢" : "❌", 
         sTest, " | ",
         element[2]             
          );
}) 