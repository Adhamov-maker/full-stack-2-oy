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
// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(songiElement(["cat", "dog", "duck"]));

// ==================================================================================

// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.

// function kabisa(yil) {
//   if (yil % 4 == 0) {
//     return true;
//   } else return false;
// }
// console.log(kabisa(1967));

// ==================================================================================

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.

// function soz(word) {
//   return word.slice(1);
// }
// console.log(soz("apple"));

// ==================================================================================

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.
// function teskariBool(bool) {
//   if (bool) {
//     return false;
//   } else return true;
// }
// console.log(teskariBool(false));

// ==================================================================================

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.
// function juftMiToqmi(son) {
//   if (son % 2 == 0) {
//     return "juft";
//   } else return "toq";
// }
// console.log(juftMiToqmi(3));

// ==================================================================================

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi.
// Agar funskiyaga qutilarning qavati berilsa, nechta quti turganini
// qaytarsin.
// Namuna:
// qutilar(1) 1
// qutilar(2) 4
// qutilar(0) 0

// function kvadrat(x){
//     return Math.pow(x,2)
// }
// console.log(kvadrat(0));

// ==================================================================================

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.

// function arrayToString(arr) {
//   let string = arr.join("");
//   return string;
// }
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));

// ==================================================================================

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.

// function birlash(arr1, arr2) {

//   for (let i of arr2) {
//     arr1.push(i);
//   }
//   return arr1;
// }
// console.log(birlash([1, 3, 5], [2, 6, 8]));

// ==================================================================================

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.

// function topIndex(arr, str) {
//   return arr.indexOf(str);
// }
// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// ==================================================================================

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
// !!! Indexni eng kichik qiymatga qarab yaxlitlang.

// function arrElement(arr, index) {
//   return arr.at(index);
// }console.log(arrElement([1, 2, 3, 4, 5, 6], 6.535355314 / 2));

// ==================================================================================

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin

// const sonlar = {
//   bir: 1,
//   ikki: 2,
//   uch: 3,
//   "to’rt": 4,
//   besh: 5,
//   olti: 6,
//   yetti: 7,
//   sakkiz: 8,
//   "to’qqiz": 9,
//   nol: 0,
// };

// function sozSon(soz) {
//   return sonlar[soz] !== undefined ? sonlar[soz] : "bunday raqam mavjud emas";
// }console.log(sozSon("uch"));

// ==================================================================================

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
// true qaytarsin, aks holda false

// function bormi(arr, son) {
//   return arr.includes(son) ? true : false;
// }
// console.log(bormi([1, 1, 2, 1, 1], 3));

// ==================================================================================

// 69.Funskiya sonlar va stringlar massivi berilsa, massivning
// ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
// qaytarib bersin.

// function sonString(arr) {
//  return arr.map(String)
// }
// console.log(sonString(["abc", 123, "def", 456]));

// ==================================================================================

// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin.

// function kubikchalar(x) {
//   return x ** 2 * 6;
// }
// console.log(kubikchalar(3));

// ==================================================================================

// 71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
// olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
// odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.

// function sayohat(odamlar) {
//   return Math.ceil(odamlar / 5);
// }
// console.log(sayohat(11));

// ==================================================================================

// 72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
// mavjud bo’lsa true qaytarsin, aks holda false.
// function boshJoy(str) {
//   if (str.includes(" ")) {
//     return true;
//   } else return false;
// }
// console.log(boshJoy(""));

// ==================================================================================

// 73.Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik

// function hajm(quti) {
//   let qitymatlar = Object.values(quti);
//   let hisob = 1;
//   for (let i of qitymatlar) {
//     hisob *= i;
//   }
//   return hisob;
// }
// console.log(hajm({ width: 4, length: 2, height: 2 }));

// ==================================================================================

// 74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu
// massivni ichidan son1dan katta va son2dan kichik sonlarni
// ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan
// kichik.

// function sonlar(son1, son2, arr) {
//   return arr.filter((i) => son1 < i && son2 > i);
// }
// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));

// ==================================================================================

// 75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan
// massiv elementlariga mos o’rinda joylashgan elementlarning
// turini saqlagan massiv qaytarsin.

// function turlar(arr) {
//   return arr.map((i) => typeof i);
// }

// console.log(turlar(["214", true, false, 2, 2.15, [], null]));

// ==================================================================================

// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// string ko’rinishida qaytarsin.

// function qaytarString(str, miqdor) {
//   return str.repeat(miqdor);
// }console.log(qaytarString("Matt", 3));

// ==================================================================================

// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
// funksiya true qaytarsin, aks holda false.

// function koplik(str) {
//   if (str.includes("lar")) {
//     return true;
//   } else return false;
// }
// console.log(koplik("daraxt"));

// ==================================================================================

// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.

// function boshOxiri(str) {
//   return str[0] + str[str.length - 1];
// }console.log(boshOxiri("ganesh"));

// ==================================================================================

// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
// qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
// Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin.

// function sozAytish(word) {
//   return word.slice(0, 2).padEnd(6, ".").concat(" ").repeat(2) + word;
// }
// console.log(sozAytish("incredible"));

// ==================================================================================

// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy")  "Today, I am feeling happy"
// ahvol("sad")  "Today, I am feeling sad"
// ahvol()  "Today, I am feeling neutral"

// function ahvol(hol) {
//   return !hol ? "Today, I am feeling neutral" : "Today, I am feeling " + hol;
// }console.log(ahvol("sad"));

// ==================================================================================

// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.

// function bogin(word) {}
// ==================================================================================

// 82.Funskiyaga belgi kiritilsa ushbu belgining ASCII kodini
// qaytarsin.
// function ascii(belgi) {
//   return belgi.charCodeAt(0);
// }console.log(ascii("A"));

// ==================================================================================

// 83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
// yoki kichik harflarda yozilgani ahamiyatsiz deb oling.

// function tengmi(soz1, soz2) {
//   return soz1.toLowerCase() === soz2.toLowerCase() ? true : false;
// }console.log(tengmi("hello", "hELL"));

// ==================================================================================

// 84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdan foydalanish mumkin emas !!!

// function belgiSoni(word) {
//   let count = 0;
//   word.split("").map(i => count++);
//   return count;
// }console.log(belgiSoni("Edabit"));

// ==================================================================================

// 85. Karona virusdan tuzalganlar soni, yangi kasallanganlar
// soni va hozirda kasallar soni natijalari qo’limizda mavjud.
// Tuzalganlar soni va yangi kasallar soni har kuni bir xil natija.
// Funksiya necha kundan keyin barcha tuzalishini qaytarsin.

// function endCorona(tuz, kasal, qol) {
//   return Math.ceil(qol / (tuz - kasal));
// }console.log(endCorona(4000, 2000, 77000));

// ==================================================================================

// 86.Quyidagi namunani kuzatgan holda funkisya yasang.
// Namuna:
// namuna([2, 5, 3]) ᔍ [4, 10, 6]

// function namuna(arr) {
//   return arr.map((i) => i * 2);

// }
// console.log(namuna([2, 5, 3]));

// ==================================================================================

// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.

// function wordLengths(arr) {
//   return arr.map((i) => i.length);
// }
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));

// ==================================================================================

// 88.Taksi kilometriga 1000 so’mdan haq oladi. Lekin birinchi
// kilometri 4000 so’m. Agar funksiya taksiga to’langan yakuniy
// summani qabul qilsa. Funksiya taksining necha kilometr
// yurganini qaytarsin.

// function taksi(sum) {
//   let xaq = 0;
//   for (let i = 4000; i <= sum; i += 1000) {
//     xaq++;
//   }
//   return xaq;
// }
// console.log(taksi(7000));

// ==================================================================================

// 89.Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
// harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
// katta kichikligini ahamiyati yo’q.

// function dlar(word) {
//   let harf = word.toLowerCase().split("");
//   let sonlari = 0;
//   harf.map((i) => (i == "d" ? sonlari++ : null));
//   return sonlari;
// }
// console.log(dlar("My friend Dylan got distracted in school."));

// ==================================================================================

// 90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
// qo’yib qaytarsin.

// function boshJoy(word) {
//   return word.split("").join(" ");
// }
// console.log(boshJoy("space"));

// ==================================================================================

// 91.Funksiya 2ta son argument qabul qiladi. Funksiya shunday
// qiymat qaytarsinki, ushbu qiymat ana shu ikkala sondan katta
// va 2-chi songa bo’linsin.

// function Namuna(son1, son2) {
//   return Math.ceil(son1 / son2) * son2;
// }console.log(Namuna(98,3));

// ==================================================================================

// 92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
// berishadi. Funksiya nechta kofe olsam meni qo’limda jami
// nechta kofe bo’lishini qaytarsin.

// function namuna(son) {
//   let jami = son;
//   for (let i = 3; i <= son; i += 3) {
//     jami++;
//   }
//   return jami;
// }console.log(namuna(200));

// ==================================================================================

// 93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
// belgisini funksiya son marta takrorlab qaytarib bersin.

// function namuna(word, son) {
//   let harf = word.split("");
//   for (let i = 0; i < son; i++) {
//     harf.push(harf[harf.length - 1]);
//   }
//   return harf.join("");
// }
// console.log(namuna("Hello", 3));

// ==================================================================================

// 94.Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan
// katta bo’lgan elementlarni yig’indiisini qaytarsin.

// function namuna(arr) {
//   let sum = 0;
//   for (let i of arr) {
//     if (i > 5) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// yoki boshqa yol
// function namuna1(arr) {
//   return arr.reduce((sum, i) => (i > 5 ? sum + i : sum),0);
// }
// console.log(namuna1([1, 5, 20, 30, 4, 9, 18]));

// ==================================================================================

// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv element-
// larini barchasini yig’indisini qaytarsin.

// function Namuna(arr){
//   return arr.reduce((sum,i) => sum+i,0)
// }console.log(Namuna([2, 7, 4]));

// ==================================================================================

// 96.Funksiyaga faylning manzili kiritiladi. Funksiya ushbu
// ma’lumotdan faylining nomi ajratib bersin.

// function Namuna(str){
//   return str.slice(str.lastIndexOf("/")+1)
// }console.log(Namuna("C:/Projects/pil_tests/ascii/edabit.txt"));

// ==================================================================================

// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib
// o’tishini aytsin.

// function Namuna(arr) {
//   let musbat = arr.filter((i) => i > 0);
//   let manfiy = arr.filter((i) => i < 0);
//   let jami1 = musbat.reduce((sum, i) => sum + i, 0);
//   let jami2 = manfiy.reduce((sum, i) => sum + i, 0);
//   return jami1 == 0 ? -jami2 : jami1 + jami2;
// }
// console.log(Namuna([3, 4, -5, -2]));

// ==================================================================================

// 98.Funksiya uchburchakning tomonlari argument qilib beriladi.
// Agar ushbu berilgan tomonlardan uchburchak yasab bo’lsa
// unda funksiya true qaytarsin, aks holda false. Uchburchakning
// qoida, istalgan 2ta tomonining yig’igindisi uchunchi tomondan
// katta bo’lsagina uchburchak hosil bo’ladi.

// function Namuna(a, b, c) {
//   return a + b > c && a + c > b && c + b > a ? true : false;
// }
// console.log(Namuna(4, 3, 8));

// ==================================================================================

// 99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son
// orasidagi sonlardan tuzilgan massivni ushbu funksiya
// qaytarsin.

// function Namuna(son1,son2){
//   let arr = []
//   for (let i = son1+1;i<son2;i++){
//     arr.push(i)
//   }return arr
// }console.log(Namuna(2, 4));

// ==================================================================================
// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ᔍ "<div></div><div></div>"
// ==================================================================================
