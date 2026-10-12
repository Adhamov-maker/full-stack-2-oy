// DARSDA ISHLANISHI KERAK BO’LGAN
// MASALALAR

// 1-masala
// let son = +prompt("son kiriting-->")

// if (son >= 0 ){
//     console.log(son + 1);
// }
// else{
//     console.log(son-2);

// }

// 2-masala

// let a=4
// let b= -35
// let c = 68

// let manfiy = 0
// let musbat = 0

// if (a>=0) musbat+=1;
// else if(a<0) manfiy+=1;

// if (b>=0) musbat+=1;
// else if (b<0) manfiy+=1;

// if (c>=0) musbat+=1;
// else if (c<0) manfiy+=1;

// console.log(`musbat: ${musbat}
// manfiy: ${manfiy}`);

// 3-masala

// let a =45;
// let b = 12;
// let c =93;
// let ab = (a>b && a) || b
// if (ab<c){
//     console.log(c);

// }
// else{
//     console.log(ab);

// }

// 4-masala

// let a = 23;
// let b = 23;
// let c = 23;

// if (a == b && b == c){
//     console.log("3 son ham bir biriga teng");
// }
// else if (a == b){
//     console.log("a va b sonlar teng.  teng bolmagan son tartib raqami 3");

// }
// else if (a == c){
//     console.log("a va c sonlar teng. teng bolmagan son tartib raqami 2");

// }
// else if (c == b){
//     console.log("c va b sonlar teng.  teng bolmagan son tartib raqami 1");

// }
// else{console.log("teng qiymatlar mavjud emas");
// }

// 5- masala

// let x = +prompt("son kiriting --> ")

// if (x>2 || x<-2)console.log(x*2);
// else if(x<2 || x>-2) console.log(-3*x);
// else console.log("to'gri qiymat kiriting");

// 6-masala

// let son = +prompt("son kiriting -- > ")
// if (son>0 && son % 2 == 0) console.log("son musbat va juft");
// else if (son>0 && son % 2 != 0) console.log("son musbat va toq");
// else if (son<0 && son % 2 == 0) console.log("son manfiy va juft");
// else if (son<0 && son % 2 != 0) console.log("son manfiy va toq");
// else console.log("to'gri qiymat kiriting");

// 7-masala

// let value = 5
// switch(value){
//     case 1:
//         console.log("Dushanba");
//         break
//     case 2:
//         console.log("Seshanba");
//         break
//     case 3:
//         console.log("Chorshanba");
//         break
//     case 4:
//         console.log("Payshanba");
//         break
//     case 5:
//         console.log("Juma");
//         break
//     case 6:
//         console.log("Shanba");
//         break
//     case 7:
//         console.log("Yakshanba");
//         break
//     default:
//         console.log("bunday qiymat mavjud emas");
// }

// VAZIFA

// 1-masala

// let son = +prompt(
//     "burun son kiriting"
// )

// if (son >=0 )console.log(son+1);
// else if(son<0)console.log(son);
// else console.log("Qiymat notog'ri kiritilgan");

// 2-masala

// let son =-11;

// if (son>0)console.log(son+1);
// else if(son<0)console.log(son-2);
// else if(son == 0)console.log(`${son =10}` );

// 4-masala

// let a = 24;
// let b = 12;

// if (a>b)console.log(a);
// else if (a<b)console.log(b);
// else console.log("ikki qiymat teng ");

// 5-masala

// let a = 24;
// let b = 12;

// if (a>b)console.log("2");
// else if(b<a) console.log("1");
// else console.log("ikki qiymat teng");

// 6-masala

// let son1 = 23;
// let son2 = 43;

// if(son1>son2)console.log(`${son1}  ${son2}`);
// else if (son1<son2) console.log(`${son2}  ${son1}`);
// else console.log("ikki qiymat teng");

// 7-masala

// let a = 23;
// let b = 43;

// if (a>=b)console.log(`b = ${b=a+b} a = ${a}`);
// else if(a<b) console.log(`b = ${b} a = ${a}`);

// 8-masala

// let a = 23;
// let b = 23;

// if (a==b)console.log(`${a=b=0}`);
// else console.log(`${a=b=a+b}`);

// 9-masala

// let a = 23;
// let b = 23;

// if (a==b){
//     a=b=0
//     console.log(`ikki son teng bolgani uchun 0 ga tenglandi `)}
// else if (a>b){
//     b = a
//     console.log("b ning qiymati kichik bolgani uchun a ga tenglandi");

// }
// else if (a<b){
//     b = a
//     console.log("a ning qiymati kichik bolgani uchun b ga tenglandi");

// }

// else console.log("bunday qiymat berish mumkin emas");

// 10-masal

// let A = +prompt("A sonni kiriting: ");
// let B = +prompt("B sonni kiriting: ");
// let C = +prompt("C sonni kiriting: ");
// let kichik;
// if (A < B && A < C) {
// kichik = A;
// } else if (B < A && B < C) {
// kichik = B;
// } else {
// kichik = C;
// }
// console.log("kichik son =", kichik);
// 11-masala

// let a = +prompt("a sonni kiriting: ");
// let b = +prompt("b sonni kiriting: ");
// let c = +prompt("c sonni kiriting: ");
// let orta;
// if (a > b && a < c  a < b && a > c) {
// orta = a;
// } else if (b > a && b < c  b < a && b > c) {
// orta = b;
// } else {
// orta = c;
// }
// console.log("O'rtadagi son =", orta);
// 12-masala

// let a = +prompt("a sonni kiriting: ");
// let b = +prompt("b sonni kiriting: ");
// let c = +prompt("c sonni kiriting: ");

// if (a > b && a < c  a < b && a > c) {
// console.log(`${c} va ${a} yigindi = ${a+c}`);
// } else if (b > a && b < c  b < a && b > c) {
// console.log(${c} va ${b} yigindi = ${c+b});
// } else {
// console.log(${b} va ${a} yigindi = ${a+b});
// }
// 13-masala

// let a = +prompt("a sonni kiriting: ");
// let b = +prompt("b sonni kiriting: ");
// let c = +prompt("c sonni kiriting: ");
// if (a < b && b < c) {
// a = a * 2;
// b = b * 2;
// c = c * 2;
// } else {
// a = -a;
// b = -b;
// c = -c;
// }
// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);
// 14-masala

// let a = +prompt("a sonni kiriting: ");
// let b = +prompt("b sonni kiriting: ");
// let c = +prompt("c sonni kiriting: ");
// if (a < b && b < c || a > b && b > c) {
// a = a * 2;
// b = b * 2;
// c = c * 2;
// } else {
// a = -a;
// b = -b;
// c = -c;
// }
// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);let a = +prompt("a sonni kiriting: ");
// let b = +prompt("b sonni kiriting: ");
// let c = +prompt("c sonni kiriting: ");
// if (a < b && b < c) {
// a = a * 2;
// b = b * 2;
// c = c * 2;
// } else {
// a = -a;
// b = -b;
// c = -c;
// }
// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);
// 15-masala

// let a = +prompt("a = ");
// let b = +prompt("b = ");
// let c = +prompt("c = ");
// let d = +prompt("d = ");

// if (a == b && a == c) {
// console.log("Tartib raqami =", 4);
// } else if (a == b && a == d) {
// console.log("Tartib raqami =", 3);
// } else if (a == c && a == d) {
// console.log("Tartib raqami =", 2);
// } else {
// console.log("Tartib raqami =", 1);
// }
// 16-masala

// let x = +prompt("x = ");
// let y;

// if (x <= 0) {
// y = -x;
// } else if (x < 2) {
// y = x ** 2;
// } else {
// y = 4;
// }

// console.log("y =", y);
// 17-masala

// let yil = +prompt("Yilni kiriting: ");

// if (yil % 400 == 0 || yil % 4 == 0 && yil % 100 != 0) {
// console.log("366 kun");
// } else {
// console.log("365 kun");
// }
// 18-masala

// let a = +prompt("Sonni kiriting: ");

// if (a >= 1 && a <= 9) {
// if (a % 2 == 0) {
// console.log("bir xonali juft son");
// } else {
// console.log("bir xonali toq son");
// }
// } else if (a >= 10 && a <= 99) {
// if (a % 2 == 0) {
// console.log("ikki xonali juft son");
// } else {
// console.log("ikki xonali toq son");
// }
// } else if (a >= 100 && a <= 999) {
// if (a % 2 == 0) {
// console.log("uch xonali juft son");
// } else {
// console.log("uch xonali toq son");
// }
// }
// case 1

// let k = +prompt("Baho: ");

// switch (k) {
// case 1:
// console.log("yomon");
// break;
// case 2:
// console.log("qoniqarsiz");
// break;
// case 3:
// console.log("qoniqarli");
// break;
// case 4:
// console.log("yaxshi");
// break;
// case 5:
// console.log("a'lo");
// break;
// default:
// console.log("xato");
// }
// case 2

// let oy = +prompt("Oy raqami: ");

// switch (oy) {
// case 12:
// case 1:
// case 2:
// console.log("qish");
// break;
// case 3:
// case 4:
// case 5:
// console.log("bahor");
// break;
// case 6:
// case 7:
// case 8:
// console.log("yoz");
// break;
// case 9:
// case 10:
// case 11:
// console.log("kuz");
// break;
// default:
// console.log("xato");
// }
// case 3

// let oy = +prompt("Oy raqami: ");

// switch (oy) {
// case 1:
// case 3:
// case 5:
// case 7:
// case 8:
// case 10:
// case 12:
// console.log("31 kun");
// break;
// case 4:
// case 6:
// case 9:
// case 11:
// console.log("30 kun");
// break;
// case 2:
// console.log("28 kun");
// break;
// default:
// console.log("xato");
// }
// case 4

// let birlik = +prompt("Birlik raqami: ");
// let qiymat = +prompt("Qiymat: ");

// switch (birlik) {
// case 1:
// console.log(qiymat / 10);
// break;
// case 2:
// console.log(qiymat * 1000);
// break;
// case 3:
// console.log(qiymat);
// break;
// case 4:
// console.log(qiymat / 1000);
// break;
// case 5:
// console.log(qiymat / 100);
// break;
// default:
// console.log("xato");
// }
// case 5

// let birlik = +prompt("Birlik raqami: ");
// let qiymat = +prompt("Og'irlik: ");

// switch (birlik) {
// case 1:
// console.log(qiymat);
// break;
// case 2:
// console.log(qiymat / 1000000);
// break;
// case 3:
// console.log(qiymat / 1000);
// break;
// case 4:
// console.log(qiymat * 1000);
// break;
// case 5:let birlik = +prompt("Birlik raqami: ");
// let qiymat = +prompt("Qiymat: ");

// switch (birlik) {
// case 1:
// console.log(qiymat / 10);
// break;
// case 2:
// console.log(qiymat * 1000);
// break;
// case 3:
// console.log(qiymat);
// break;
// case 4:
// console.log(qiymat / 1000);
// break;
// case 5:
// console.log(qiymat / 100);
// break;
// default:
// console.log("xato");
// }
// console.log(qiymat * 100);
// break;
// default:
// console.log("xato");
// }
// case 6

// let d = +prompt("Kun: ");
// let m = +prompt("Oy: ");

// switch (m) {
// case 1:
// console.log(d + "-yanvar");
// break;
// case 2:
// console.log(d + "-fevral");
// break;
// case 3:
// console.log(d + "-mart");
// break;
// case 4:
// console.log(d + "-aprel");
// break;
// case 5:
// console.log(d + "-may");
// break;
// case 6:
// console.log(d + "-iyun");
// break;
// case 7:
// console.log(d + "-iyul");
// break;
// case 8:
// console.log(d + "-avgust");
// break;
// case 9:
// console.log(d + "-sentabr");
// break;
// case 10:
// console.log(d + "-oktabr");
// break;
// case 11:
// console.log(d + "-noyabr");
// break;
// case 12:
// console.log(d + "-dekabr");
// break;
// }
// case 7

// let D = +prompt("Kun:");
// let M = +prompt("Oy:");

// let kunlar;

// switch (M) {
// case 1:
// case 3:
// case 5:
// case 7:
// case 8:
// case 10:
// case 12:
// kunlar = 31;
// break;

// case 4:
// case 6:
// case 9:
// case 11:
// kunlar = 30;
// break;

// case 2:
// kunlar = 28;
// break;
// }

// D++;

// if (D > kunlar) {
// D = 1;
// M++;

// if (M > 12) {
// M = 1;
// }
// }

// console.log(D, M);

// case 8

//
// let Y = prompt("Robot yo'nalishini kiriting (s, j, q, g): ");
// let K = +prompt("Kamandani kiriting (0 - davom et, 1 - chapga, 2 - o'ngga): ");

// let yangiYonalish = "";

// switch (Y) {
//   case "s": // Shimol
//     switch (K) {
//       case 0: yangiYonalish = "shimol"; break;
//       case 1: yangiYonalish = "g'arb"; break;
//       case 2: yangiYonalish = "sharq"; break;
//     }
//     break;
//   case "j": // Janub
//     switch (K) {
//       case 0: yangiYonalish = "janub"; break;
//       case 1: yangiYonalish = "sharq"; break;
//       case 2: yangiYonalish = "g'arb"; break;
//     }
//     break;
//   case "q": // Sharq
//     switch (K) {
//       case 0: yangiYonalish = "sharq"; break;
//       case 1: yangiYonalish = "shimol"; break;
//       case 2: yangiYonalish = "janub"; break;
//     }
//     break;
//   case "g": // G'arb
//     switch (K) {
//       case 0: yangiYonalish = "g'arb"; break;
//       case 1: yangiYonalish = "janub"; break;
//       case 2: yangiYonalish = "shimol"; break;
//     }
//     break;
//   default:
//     console.log("Noto'g'ri yo'nalish kiritildi");
// }

// if (yangiYonalish) {
//   console.log("Yangi holat:", yangiYonalish);
// }

// case 9

// let N = +prompt("Karta qiymatini kiriting (6-14): ");
// let M = +prompt("Karta turini kiriting (1-g'isht, 2-olma, 3-chillak, 4-qarg'a): ");

// let qiymatNomi = "";
// let turNomi = "";

// switch (N) {
//   case 6: qiymatNomi = "olti"; break;
//   case 7: qiymatNomi = "yetti"; break;
//   case 8: qiymatNomi = "sakkiz"; break;
//   case 9: qiymatNomi = "to'qqiz"; break;
//   case 10: qiymatNomi = "o'n"; break;
//   case 11: qiymatNomi = "valet"; break;
//   case 12: qiymatNomi = "dama"; break;
//   case 13: qiymatNomi = "qirol"; break;
//   case 14: qiymatNomi = "tuz"; break;
//   default: qiymatNomi = "noma'lum qiymat";
// }

// switch (M) {
//   case 1: turNomi = "g'isht"; break;
//   case 2: turNomi = "olma"; break;
//   case 3: turNomi = "chillak"; break;
//   case 4: turNomi = "qarg'a"; break;
//   default: turNomi = "noma'lum tur";
// }

// console.log(`${qiymatNomi} ${turNomi}`);

// case 10

// let n = +prompt("Masalalar sonini kiriting (10-40): ");

// let onlar = Math.floor(n / 10);
// let birlar = n % 10;

// let onlarSoz = "";
// let birlarSoz = "";

// switch (onlar) {
//   case 1: onlarSoz = "o'n"; break;
//   case 2: onlarSoz = "yigirma"; break;
//   case 3: onlarSoz = "o'ttiz"; break;
//   case 4: onlarSoz = "qirq"; break;
// }

// switch (birlar) {
//   case 1: birlarSoz = "bitta"; break;
//   case 2: birlarSoz = "ikkita"; break;
//   case 3: birlarSoz = "uchta"; break;
//   case 4: birlarSoz = "to'rtta"; break;
//   case 5: birlarSoz = "beshta"; break;
//   case 6: birlarSoz = "oltita"; break;
//   case 7: birlarSoz = "yettita"; break;
//   case 8: birlarSoz = "sakkizta"; break;
//   case 9: birlarSoz = "to'qqizta"; break;
//   case 0: birlarSoz = "ta"; break;
// }

// if (birlar === 0) {
//   console.log(`${onlarSoz}ta masala`);
// } else {
//   console.log(`${onlarSoz} ${birlarSoz} masala`);
// }

// case 11

// let son = +prompt("100 dan 999 gacha son kiriting: ");

// let yuzlar = Math.floor(son / 100);
// let onlar = Math.floor((son % 100) / 10);
// let birlar = son % 10;

// let yuzlikSoz = "";
// let onlikSoz = "";
// let birlikSoz = "";

// switch (yuzlar) {
//   case 1: yuzlikSoz = "bir yuz"; break;
//   case 2: yuzlikSoz = "ikki yuz"; break;
//   case 3: yuzlikSoz = "uch yuz"; break;
//   case 4: yuzlikSoz = "to'rt yuz"; break;
//   case 5: yuzlikSoz = "besh yuz"; break;
//   case 6: yuzlikSoz = "olti yuz"; break;
//   case 7: yuzlikSoz = "yetti yuz"; break;
//   case 8: yuzlikSoz = "sakkiz yuz"; break;
//   case 9: yuzlikSoz = "to'qqiz yuz"; break;
// }

// switch (onlar) {
//   case 1: onlikSoz = "o'n"; break;
//   case 2: onlikSoz = "yigirma"; break;
//   case 3: onlikSoz = "o'ttiz"; break;
//   case 4: onlikSoz = "qirq"; break;
//   case 5: onlikSoz = "ellik"; break;
//   case 6: onlikSoz = "oltmish"; break;
//   case 7: onlikSoz = "yetmish"; break;
//   case 8: onlikSoz = "sakson"; break;
//   case 9: onlikSoz = "to'qson"; break;
// }

// switch (birlar) {
//   case 1: birlikSoz = "bir"; break;
//   case 2: birlikSoz = "ikki"; break;
//   case 3: birlikSoz = "uch"; break;
//   case 4: birlikSoz = "to'rt"; break;
//   case 5: birlikSoz = "besh"; break;
//   case 6: birlikSoz = "olti"; break;
//   case 7: birlikSoz = "yetti"; break;
//   case 8: birlikSoz = "sakkiz"; break;
//   case 9: birlikSoz = "to'qqiz"; break;
// }

// /
// console.log(yuzlikSoz + " " + onlikSoz + " " + birlikSoz);

// case 12

// let yil = +prompt("Yilni kiriting: ");

//
// let rangKodi = Math.floor((surilish % 10) / 2);
// let rang = "";

// switch (rangKodi) {
//   case 0: rang = "Yashil"; break;
//   case 1: rang = "Qizil"; break;
//   case 2: rang = "Sariq"; break;
//   case 3: rang = "Oq"; break;
//   case 4: rang = "Qora"; break;
// }

//
// let hayvonKodi = surilish % 12;
// let hayvon = "";

// switch (hayvonKodi) {
//   case 0: hayvon = "sichqon"; break;
//   case 1: hayvon = "sigir"; break;
//   case 2: hayvon = "yo'lbars"; break;
//   case 3: hayvon = "quyon"; break;
//   case 4: hayvon = "ajdar"; break;
//   case 5: hayvon = "ilon"; break;
//   case 6: hayvon = "ot"; break;
//   case 7: hayvon = "qo'y"; break;
//   case 8: hayvon = "maymun"; break;
//   case 9: hayvon = "tovuq"; break;
//   case 10: hayvon = "it"; break;
//   case 11: hayvon = "to'ng'iz"; break;
// }

// console.log(`${rang} ${hayvon} yili`);
