// let ism = prompt("Ismingizni kiriting");

// function teskariIsm(ism) {
//   return ism.split("").reverse().join("");
// }
// console.log(teskariIsm(ism));

// ==================================================================================

// function charCount(str) {
//   let counts = {};

//   for (let i of str) {
//     if (i in counts) {
//       counts[i] += 1;
//     } else counts[i] = 1;
//   }
//   return counts;
// }
// console.log(charCount("asrorjon"));

// ==================================================================================

// let arr = [
//   1, 1, 2, 23, 3445, 6, 4, 332, 2, 2221, 211, 21, 12, 43, 21, 21, 21, 55, 55,
//   55, 55, 76, 24, 76, 24,
// ];

// function birmarta(data) {
//   let id = [];
//   for (let i of data) {
//     if (!id.includes(i)) {
//       id.push(i);
//     }
//   }
//   return id;
// }
// console.log(birmarta(arr));

// ===================================================================================

const products = [
  { id: 1, name: "iPhone 16 Pro", price: 15000000, discount: 10 },
  { id: 2, name: "Samsung Galaxy S25", price: 12000000, discount: 15 },
  { id: 3, name: "MacBook Air M3", price: 18000000, discount: 5 },
  { id: 4, name: "Lenovo IdeaPad", price: 8500000, discount: 20 },
  { id: 5, name: "AirPods Pro 2", price: 3200000, discount: 10 },
  { id: 6, name: "Redmi Note 14", price: 2800000, discount: 5 },
  { id: 7, name: "iPad Air", price: 7500000, discount: 12 },
  { id: 8, name: "Samsung TV", price: 9000000, discount: 18 },
  { id: 9, name: "Apple Watch Series 10", price: 5500000, discount: 8 },
  { id: 10, name: "Sony Headphones", price: 2500000, discount: 25 },
];

let high10 = products.filter((i) => i.discount >= 10);
// console.log(high10);
