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
  { id: 2, name: "Vali", age: 17, score: 42 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 27 },
  { id: 5, name: "Aziza", age: 17, score: 47 },
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

// let mahsulotBormi = products.some((i) => i.stock === 0);

// if (mahsulotBormi) {
//   console.log("omdorda tugagan mahsulot bor");
// } else console.log("omborda barcha mahsulotlar mavjud");

// =============================================================================

// 6-masala. Barcha talabalar imtihondan o‘tganmi?
// Qiyinlik: 4/10
// Imtihondan o‘tish uchun talaba kamida 60 ball olishi kerak. Barcha talabalar 60 yoki undan yuqori ball
// olganini tekshiring. Natija true yoki false bo‘lsin va mos xabar chiqaring.
// every() metodidan foydalaning.

// let otganmi = students.every((i) => i.score > 60);
// if (otganmi) {
//   console.log(true);
// } else console.log(false);
// =============================================================================

// 7-masala. Mahsulotlarni narx bo‘yicha saralash
// Qiyinlik: 5/10
// products massivini narxi bo‘yicha eng arzondan eng qimmatga qarab saralang. Mahsulot nomi va narxini
// chiqaring.
// sort() metodidan foydalaning. Eslatma: sort() massivni o‘z joyida o‘zgartiradi.

// function tartibla(arr) {
//   let tartibla = arr.sort((a, b) => a.price - b.price);
//   return tartibla.forEach((element) => {
//     console.log(`${element.name}ning narxi - ${element.price}$ ga teng`);
//   });
// }
// console.log(tartibla(products));

// =============================================================================

// 8-masala. Yuqori ball olgan talabalar
// Qiyinlik: 5/10
// students massivida 70 va undan yuqori ball olgan talabalarni ajrating. Ularni ballari bo‘yicha kamayish
// tartibida saralang. Natijada faqat talabalarning ismi va balli bo‘lgan yangi massiv hosil qiling.
// filter(), sort() va map() metodlaridan foydalaning.

// function sarala(arr) {
//   let tozala = arr.filter((i) => i.score >= 70);
//   let tartibla = tozala.sort((a, b) => b.score - a.score);
//   return tartibla.map((i) => ({ name: i.name, score: i.score }));
// }

// console.log(sarala(students));

// =============================================================================

// 9-masala. Chegirmali mahsulotlarni tekshirish
// Qiyinlik: 7/10
// products massividan chegirmasi 10% yoki undan yuqori bo‘lgan mahsulotlarni ajrating. Ularning
// chegirmadan keyingi narxini hisoblang. So‘ng chegirmadan keyingi narxi 800 dollardan yuqori bo‘lgan
// mahsulot bor-yo‘qligini tekshiring. Mahsulotlar ro‘yxati va tekshiruv natijasini chiqaring.
// filter(), map() va some() metodlaridan foydalaning.

// function chegirmali(arr) {
//   let tozala = arr.filter((i) => i.discount >= 10);
//   let hisobla = tozala.map((i) => ({
//     ...tozala,
//     finalPrice: i.price - (i.discount * i.price) / 100,
//   }));

//   let chiqar = hisobla.filter((i) => i.finalPrice > 800);
//   console.log(chiqar);

//   let aniqla = hisobla.some((i) => i.finalPrice > 800);

//   return aniqla;
// }
// console.log(chegirmali(products));

// =============================================================================

// 10-masala. Talabalar natijasi bo‘yicha tahlil
// Qiyinlik: 8/10
// students massivi bilan quyidagi ishlarni bajaring: 1) 60 yoki undan yuqori ball olgan talabalarni ajrating; 2)
// ularni ballari bo‘yicha kamayish tartibida saralang; 3) map() orqali ism va ballni yangi massivga o‘tkazing; 4)
// find() bilan 90 dan yuqori ball olgan birinchi talabani toping; 5) some() bilan kamida bitta talaba 90 dan
// yuqori ball olganini tekshiring; 6) every() bilan barcha talabalar 40 yoki undan yuqori ball olganini
// tekshiring; 7) forEach() yordamida har bir talabaning ismi va ballini alohida chiqaring.

// function allamBalo(arr) {
//   let ajartish1 = arr
//     .filter((i) => i.score > 60)
//     .sort((a, b) => b.score - a.score);
//   let yangilash = ajartish1.map((i) => ({ name: i.name, score: i.score }));
//   let findhigh = yangilash.find((i) => i.score > 90);
//   console.log(findhigh);
//   let find = yangilash.some((i) => i.score > 90);
//   console.log(find);
//   let findevery = yangilash.every((i) => i.score > 40);
//   console.log(findevery);

//   return yangilash.forEach((i) => {
//     console.log(`${i.name} -- ${i.score} ball yig'gan`);
//   });
// }
// console.log(allamBalo(students));



