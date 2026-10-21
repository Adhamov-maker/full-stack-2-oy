// let max = 255;

// let a = Math.trunc(Math.random()*max)
// let b = Math.trunc(Math.random()*max)
// let c = Math.trunc(Math.random()*max)

// console.log(`rgb(${a} ${b} ${c})`);

let max = 15;
let rang = "#";

let lugat = "123456789abcdef";

for (let i = 0; i <= 5; i++) {
  let son = Math.trunc(Math.random() * max);
  let xullas = lugat[son];
  rang += xullas;
}

console.log(rang);
