const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];

const students = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 45 },
  { id: 3, name: "Sardor", score: 92 },
  { id: 4, name: "Madina", score: 60 },
  { id: 5, name: "Malika", score: 88 },
  { id: 6, name: "Aziz", score: 52 },
  { id: 7, name: "Zarina", score: 97 },
  { id: 8, name: "Jasur", score: 34 },
];

const products = [
  { id: 1, name: "Laptop", price: 8500000, stock: 12 },
  { id: 2, name: "Mouse", price: 150000, stock: 5 },
  { id: 3, name: "Keyboard", price: 350000, stock: 8 },
  { id: 4, name: "Monitor", price: 2200000, stock: 15 },
  { id: 5, name: "Headphones", price: 450000, stock: 3 },
];

// ===============================================================

//1-MASALA
// numbers arrayidan faqat tub sonlarni ajratib olib,
// ularni yangi array ko‘rinishida qaytaradigan function yozing.

// function tubAniqla(data) {
//   let tubSonlar = [];
//   for (let i of data) {
//     let count = 0;
//     for (let n = 1; n <= i; n++) {
//       if (i % n == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       tubSonlar.push(i);
//     }
//   }
//   console.log(tubSonlar);
// }

// tubAniqla(numbers);

// ===============================================================

//2-MASALA
// students arrayidan bali 60 yoki undan yuqori bo‘lgan
// talabalarni ajratib, yangi array qaytaradigan function yozing.

// function otganTalabaTop(data){
//   let OtganTalabalar = []
//   for(let i of data){
//     if(i.score>=60){
//       OtganTalabalar.push(i)
//     }
//   }
//   console.log(OtganTalabalar);

// }

// otganTalabaTop(students)

// ===============================================================

//3-MASALA
// numbers arrayidagi barcha sonlarni bir-biriga ko‘paytirib,
// yakuniy natijani qaytaradigan function yozing.

// const kopaytir = function (data) {
//   let kopaytma = 1;
//   for (let i of data) {
//     kopaytma *= i;
//   }
//   console.log(kopaytma);
// };

// kopaytir(numbers);

// ================================================================

// 4-MASALA
// products arrayidan ombordagi soni 10 tadan kam bo‘lgan
// mahsulotlarni tanlab, yangi array qaytaradigan function yozing

// const kamTop = (data) => {
//   let KamMahsulot = [];
//   for (let i of data) {
//     if (i.stock < 10) {
//       KamMahsulot.push(i);
//     }
//   }
//   console.log(KamMahsulot);
// };

// kamTop(products)

// ================================================================

// 5-MASALA
// Function bitta id qabul qilsin. U products arrayidan
// shu ID ga mos mahsulotni topib qaytarsin.

// function findWithID(data, request) {
//     for (let i of data) {
//       if (i.id == request) {
//         console.log(
//           `${request} id dagi Mahsulot ${i.name} va uning Narxi Hozirda ${i.price} ga teng`,
//         );
//       } else return undefined;
//     }
// }

// let request = 1

// findWithID(products, request)

// =================================================================

// 6-MASALA
// students arrayidan eng katta score qiymatiga ega talabani topib,
//  uning objectini qaytaradigan function yozing.

// function highScore(data) {
//   let highStudent = { id: 1, name: "Ali", score: 75 };
//   for (let i of data) {
//     if (i.score > highStudent.score) {
//       highStudent = i;
//     }
//   }
//   console.log(`${highStudent.name}, chunki uning bali ${highStudent.score}`);
// }

// highScore(students)

// ================================================================================

// 7-MASALA

// Yangi talaba objectini qabul qilib, uni students arrayiga
// qo‘shadigan function yozing. Qo‘shilgandan keyin yangilangan arrayni qaytaring.

// function talabaQosh(data, ism, ball) {
//   let yangiTalaba = { id: data.length + 1, name: ism, score: ball };
//   data.push(yangiTalaba);
//   console.log(data);
// }

// talabaQosh(students, "Asrorjon", 100);

// ================================================================================

// 8-MASALA

// products arrayidan narxi 500 000 so‘mdan yuqori bo‘lgan mahsulotlarni tanlab,
// yangi array qaytaradigan function yozing.

// function mahsulotAjrat(data) {
//   let yangiMahsulotlar = [];
//   for (let i of data) {
//     if (i.price > 500000) {
//       yangiMahsulotlar.push(i);
//     }
//   }
//   console.log(yangiMahsulotlar);
// }

// mahsulotAjrat(products);

// ================================================================================

// 9-MASALA

// Har bir talabaning score qiymatiga 10 ball qo‘shib,
//  yangi array qaytaradigan function yozing.
// Asl students arrayi o‘zgarmasligi kerak.

// const ballQosh = function (data) {
//   let yangiBallar = [];
//   for (let i of data) {
//     i.score += 10;
//     yangiBallar.push(i);
//     if (i.score >= 90) {
//       i.score = 100;
//     }
//   }
//   console.log(yangiBallar);
// };
// ballQosh(students);

// =================================================================================

// 10-MASALA
// Har bir mahsulot uchun narxini ombordagi soniga ko‘paytiring.
// Keyin barcha mahsulotlar qiymatini qo‘shib, umumiy summani qaytaradigan function yozing.

// function umumiyTop(data) {
//   let umumiy = 0;
//   for (let i of data) {
//     umumiy += i.price * i.stock;
//   }
//   console.log(`Mahsulotlarning umumiy qiymati: ${umumiy}so'm`);
// }

// umumiyTop(products);
