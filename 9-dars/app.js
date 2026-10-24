// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const juft = [];
// const toq = [];

// for (let i of nums) {
//   if (i % 2 == 0) {
//     juft.push(i);
//   } else {
//     toq.push(i);
//   }
// }

// console.log(juft);
// console.log(toq);

// =====================================================================

// let strings = [
//   "olma",
//   "banan",
//   "uzum",
//   "anor",
//   "shaftoli",
//   "nok",
//   "gilos",
//   "behi",
// ];
// let enguzun = "olma";

// function uzuznstring(data) {
//   for (let i of data) {
//     if (i.length > enguzun.length) {
//       enguzun = i;
//     }
//   }
//   console.log(enguzun);
// }

// uzuznstring(strings);
// ============================================================================

// let numbers = [45, 12, 89, 3, 67, 24, 93, 8, 56, 31];
// let kotta = 0;

// function kattaqiymat(data) {
//   for (i of data) {
//     if (i > kotta) {
//       kotta = i;
//     }
//   }
//   console.log(kotta);
// }

// kattaqiymat(numbers);

// ===========================================================================

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 8500000,
    stock: 12,
  },
  {
    id: 2,
    name: "Mouse",
    price: 150000,
    stock: 25,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 350000,
    stock: 8,
  },
  {
    id: 4,
    name: "Monitor",
    price: 2200000,
    stock: 0,
  },
  {
    id: 5,
    name: "Headphones",
    price: 450000,
    stock: 17,
  },
];

// let umumiy = 0;
// let engqimmat = {
//   id: null,
//   name: null,
//   price: null,
//   stock: null,
// };

// const qiymatHisobla = function (data) {
//   for (let i of data) {
//     umumiy += i.price * i.stock;
//     if (i.price > engqimmat.price) {
//       engqimmat = i;
//     }
//   }
//   console.log(umumiy);
//   console.log(engqimmat);
// };

// function qurilmatop(data, request) {
//   for (let i of data) {
//     if (i.name == request) {
//       return console.log(
//         `${i.name} ning narxi hozirda ${i.price}so'mga ga teng`,
//       );
//     }
//   }
// }

// qurilmatop(products, "Laptop");
