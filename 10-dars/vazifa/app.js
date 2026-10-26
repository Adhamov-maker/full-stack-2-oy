// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// function bolinsin(x, y) {
//   if (x > y) {
//     return x % y == 0;
//   }
// }

// console.log(bolinsin(85, 4));

// ==================================================================================

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.

// function raqam(str) {
//   let number = parseInt(str);
//   if (!isNaN(number)) {
//     return number;
//   } else console.log("malumot raqamlardan boshlansin");
// }

// console.log(raqam("100"));

// ==================================================================================

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// function tortYuzi(a, b) {
//   return a * b;
// }

// console.log(tortYuzi(3, 4));

// ==================================================================================

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.

// function ismFam(ism, familiya) {
//  return ism.concat(", ", familiya)
// }
// console.log(ismFam("John", "Doe"));

// ==================================================================================

// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true)  "sad days"
// bug(false) "it's a good day"

// function aboutDay(boolean){
//     if(boolean == true){
//         return "sad days"
//     } return "it's a good day"
// }

// console.log(aboutDay(false));

// ==================================================================================

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib
// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.

// function tushirMassiv(arr, tushirishSoni) {
//   if (tushirishSoni == 0) {
//     return [];
//   }
//   for (let i = 0; i < tushirishSoni; i++) {
//     arr.shift();
//   }
//   return arr;
// }
// console.log(tushirMassiv([1, 2, 3], 2));

// ==================================================================================

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.

// function ovozlar(ovozObj) {
//   let hisob = ovozObj.upvotes - ovozObj.downvotes;
//   return hisob;
// }
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));

// ==================================================================================

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qay-
// tarsin.

// function negativ(son) {
//   if (son == 0 ) {
//     return 0;
//   }
//   return son * -1;
// }
// console.log(negativ(-0));

// ==================================================================================

// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.

// function almash(arr) {
//   return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]));

// ==================================================================================

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.

// function kinogaKirish(yosh, otaOna) {
//   if (yosh <= 15 && otaOna) {
//     return true;
//   } else if (yosh > 15) {
//     return true;
//   } else return false;
// }
// console.log(kinogaKirish(16, false));

// ==================================================================================

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.

// function oshir1ga(massiv) {
//   for (let i in massiv) {
//     let qosh = massiv[i] + 1;
//     massiv[i] = qosh;
//   }
//   return massiv;
// }
// console.log(oshir1ga([0, 1, 2, 3]));

// ==================================================================================

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.

// function stringQosh(ism, familiya) {
//   return `${ism} ${familiya}`;
// }

// console.log(stringQosh("Doniyor", "olimov"));

// ==================================================================================

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// Ternary operatorga misol:
// 2===2 ?
// 'teng' : 'tengemas'

// ... tushunmadim yoki buinday ishlashni bilmayman

// ==================================================================================

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// function sozUzunligi(str) {
//   let matn = str.split("");
//   let count = 0;
//   for (let i of matn) {
//     count++;
//   }
//   if (count % 2 == 0) return true;
//   else return false;
// }

// console.log(sozUzunligi("apple"));

// ==================================================================================

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.
// function daraja(x, y) {
//   return Math.pow(x, y);
// }
// console.log(daraja(5,5));

// ==================================================================================

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.
function songiElement(arr) {
// code...
}
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
