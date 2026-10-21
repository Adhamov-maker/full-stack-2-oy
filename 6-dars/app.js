// ==================================================================

// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 1));

// =================================================================

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.

// const toSecond = function (min) {
//   return min * 60;
// };

// console.log(toSecond(3));

// =====================================================================

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.

// let son = 22;

// const NextNumber = (number) => {
//   return ++number;
// };

// console.log(NextNumber(son));

// =======================================================================

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchbur-
// chak yuzini topish formulasi: S = (asos * balandlik) / 2

// function surface(s, h) {
//   return (s * h) / 2;
// }
// console.log(surface(10, 4));

// ==========================================================================

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

// const AgetoDay = function (age) {
//   return age * 365;
// };
// console.log(AgetoDay(65));

// ===========================================================================

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.

// const kub = (son) => {
//   let qiymat = son ** 3;
//   return qiymat;
// };
// console.log(kub(12));

// ==========================================================================

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.

// ================================================================================

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function kopaytma(a, b) {
//   let javob = a * b;
//   return javob;
// }
// console.log(kopaytma(230, 10));

// ==========================================================================

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.

// function hourToSecond(hour) {
//   let qiymat = hour * 3600;
//   return qiymat;
// }
// console.log(hourToSecond(10));

// =========================================================================

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// const uchinchiTomon = (tomon1, tomon2) => {
//   let tomon3 = tomon1 + tomon2 - 1;
//   return tomon3;
// };
// console.log(uchinchiTomon(8, 10));

// ========================================================================

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni bir-
// inchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

// function qoldiq(a, b) {
//   let natija = a % b;
//   return natija;
// }
// console.log(qoldiq(2,42));

// ========================================================================

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function tortburchakyuzi(a, b) {
//   let yuza = a * b;
//   return yuza;
// }
// console.log(tortburchakyuzi(2,5));

// ========================================================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// const stringQoshish = function (a) {
//   let b = "Something ";
//   return (c = b + a);
// };
// console.log(stringQoshish("is better than nothing"));

// ========================================================================

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.

// function kvadrat(s) {
// let a = s**2
//   return a;
// }
// console.log(kvadrat(5));

// ======================================================================

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// function tekshir(a) {
//   if (a <= 0) {
//     console.log("true");
//   } else console.log("False");
// }
// tekshir(4)

// ======================================================================

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

// function burchak(a) {
//   let b = (a - 2) * 180;
//   return b;
// }
// console.log(burchak(3));

// ======================================================================

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud.
// Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// function ochko_hisobla(ikki, uch) {
//   let jami = ikki * 2 + uch * 3;
//   return jami;
// }

// console.log(ochko_hisobla(38, 8));

// ======================================================================

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") "MubashirEdabit"
// nameString("Matt") "MattEdabit"
// nameString("javaScript") "javaScriptEdabit"

// const matn_qosh = function (matn) {
//   let a = matn.concat("Edibt");
//   console.log(a);
// };

// matn_qosh('sjj');

// ======================================================================

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.

// const tekshir = (son1, son2) => {
//   if (son1 + son2 < 100) {
//     console.log("True");
//   } else console.log("False");
// };

// tekshir(22, 15);

// ======================================================================

