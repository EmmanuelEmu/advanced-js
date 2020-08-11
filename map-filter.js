const number = [1,2,3,4,5,6,7];
const output = [];
//number 1 method

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element*element; 
//     output.push(result);
// }

//number 2 method  

// const result = number.map(function(element) {
//     return element*element;
// })

const result = number.map(x => x*x);
console.log(result);

const bigger = number.filter(y => y%2==0 ) ;
console.log(bigger);