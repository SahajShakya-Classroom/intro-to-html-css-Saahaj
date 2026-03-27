// console.log("Hellowold")
function varstest() {      
    if (true) {
        var a=10
       
} console.log("Condition is true",a);
    }
    varstest();

//  function letstest() {      
//         if (true) {
//             let b=20
//         }
//         console.log("Condition is true",b);
//     }
//     letstest();

var c=10;
c=20;
console.log(c);

const d=30;
// d=40;
console.log(d);

let e=50;
e=60;
console.log(e);
//this is the aray example
fruites=["apple","banana","grapes"];
fruites.push("mango");
console.log(fruites);
//this is string variable example
let fruit="orange";
console.log(fruit);
fruit = "kiwi";
console.log(fruit);
//this is the array reinitialization example{using objtect}
fruites= new Array("papaya","pear");
console.log(fruites);
//using for loop to iterate the array
for (let i = 0; i < fruites.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + fruites[i]);
}
for ( fruit of fruites) {
    console.log("Fruit Item: " + fruit);
}
fruites.push("watermelon");
//printining using map function
fruites.map(i=>console.log( i));