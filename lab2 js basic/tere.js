//write a function that takes two aerguments and returns their sum
function sum(a, b) { //nermal function/traditional function
    return a + b;
}
console.log("Sum of 5 and 10 is:", sum(5, 10));

//arrow function => shorter syntax
//variabletype varuiable_name = (parameters) => { function_body };
let sumArrow = (a, b) => a + b;
console.log("Sum of 15 and 25 is:", sumArrow(15, 25));

//write a arrow function that only prints the even indexs from fruites aray
let fruites = ["apple", "banana", "grapes", "mango", "orange", "kiwi"];
let EvenIndexFruits = (fruites) => {
    for (let i = 0; i < fruites.length; i++) {
        if (i % 2 === 0) {
            console.log( fruites[i]);
        }
    }
};
EvenIndexFruits(fruites);
//the filter method to print even indexs is use for this scenario( map + conditions)
fruites.filter((fruit, index) => {   if (index % 2 === 0) {
        console.log(fruit);
    }   });
//print in the even indexs using map function
filterdata = fruites.filter((fruit, index) => index % 2 === 0);
console.log("Filtered Data:", filterdata);

let f1data = (a) => {console.log("Function f1 ", a);};
f1data(19); 

console.log( ...fruites);
console.log(...filterdata);
//spread operator to combine two arrays
console.log("Combined Array:", [...fruites, ...filterdata]);



document.querySelector("h1").innerText="BYE"

// document.querySelector(".btn").addEventListener("click",()=>{
//     alert("Button clicked!")
// })

// attach handlers to all buttons with class .btn
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    // click handler (kept)
    btn.addEventListener("click", () => {
        alert("Button clicked!");
    });

    // hover in
    btn.addEventListener("mouseenter", () => {
        // store previous background so we can restore it on mouseleave
        btn.dataset.prevBg = btn.style.backgroundColor || '';
        btn.style.backgroundColor = 'lightblue';
        btn.style.cursor = 'pointer';
        console.log("Button hovered!", btn);
    });

    // hover out
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = btn.dataset.prevBg || '';
        btn.style.cursor = '';
    });
});
