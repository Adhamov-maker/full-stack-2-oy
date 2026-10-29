const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 },
];
const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 },
];

// =============================================================================

// 1-masala. Qimmat mahsulotlar
// Qiyinlik: 2/10
// products massivida narxi 800 dollardan yuqori bo‘lgan mahsulotlarni ajratib, yangi massiv qaytaring.
// filter() metodidan foydalaning. Asl massiv o‘zgarmasligi kerak.

// let qimmatMahsulotlar = products.filter((i) => i.price > 800);
// console.log(qimmatMahsulotlar);

// =============================================================================

// 2-masala. Talabalar ro‘yxati
// Qiyinlik: 2/10
// students massividagi barcha talabalarni forEach() yordamida
// konsolga quyidagi ko‘rinishda chiqaring: Ali —85 ball; Vali — 52 ball;
// Madina — 95 ball. Har bir talaba uchun ism va ball ko‘rsatilishi kerak.

// let chiqar = students.filter((i) => console.log(`${i.name} - ${i.score}ball;`));
// console.log(chiqar);

// =============================================================================

// 3-masala. Chegirmali narxlar
// Qiyinlik: 3/10
// products massiviga asoslanib, har bir mahsulotning chegirmadan
//  keyingi narxini hisoblang va yangi massiv yarating. Yangi obyektlarda
//  name, price, discount va finalPrice maydonlari bo‘lsin. Formula: finalPrice =
// price - (price × discount / 100).

// let chegirmaNarx = products.map((i) => ({
//   ...i,
//   finalPrice: i.price - (i.price * i.discount) / 100,
// }));
// console.log(chegirmaNarx);

// =============================================================================

// 4-masala. Talabani ID orqali topish
// Qiyinlik: 3/10
// students massivida id qiymati 4 ga teng bo‘lgan talabani toping.
// Topilgan talabaning ismi va ballini konsolga chiqaring. Agar talaba topilmasa,
// “Talaba topilmadi” xabarini chiqaring.

// let findStudent = students.find((i) => i.id === 4);

// let xabar = findStudent
//   ? `${findStudent.name} - ${findStudent.score}ball`
//   : "bunday id ga ega oquvchi mavjud emas";
// console.log(xabar);

// =============================================================================

// 5-masala. Omborda mahsulot bormi?
// Qiyinlik: 4/10
// products massividagi kamida bitta mahsulotning stock qiymati 0 ga tengmi? Natija true yoki false bo‘lsin.
// Natijaga qarab “Omborda tugagan mahsulot bor” yoki “Barcha mahsulotlar mavjud” xabarini chiqaring.
// some() metodidan foydalaning.


// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================
