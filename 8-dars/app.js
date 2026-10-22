// let user = {
//   firstName: "   aSaDbEk  ",
//   lastName: " aBDULHAMIDOV ",
//   email: "  ASADBEK@GMAIL.COM  ",
//   username: "  asadbek_dev  ",
// };
// let count = 0;

// function togriString(str) {
//   if (typeof str == "string" && str.trim()) {
//     let toza = str.trim();
//     let togri_qiymat = toza[0].toUpperCase() + toza.slice(1).toLowerCase();
//     count++;
//     return togri_qiymat;
//   } else return null;
// }
// function tozaEmail(mail) {
//   if (typeof mail === "string" && mail.trim()) {
//     let toza = mail.trim().toLowerCase();
//     if (toza.includes("@") && toza.endsWith(".com")) {
//       count++;
//       return toza;
//     }
//   }
//   return null;
// }

// function togri_username(username) {
//   if (typeof username == "string" && username.trim()) {
//     let toza = username.trim();
//     if (toza.length >= 5) {
//       count++;
//       return toza.toLowerCase();
//     }
//   }
//   return null;
// }

// function tekshir(user) {
//   user.firstName = togriString(user["firstName"]);
//   user.lastName = togriString(user["lastName"]);
//   user.email = tozaEmail(user["email"]);
//   user.username = togri_username(user["username"]);
//   if (count == 4) {
//     user.Holat = "Foydalanuvchi muvaffaqiyatli royhatdan otdi";
//     console.log(user);
//     count = 0;
//   } else {
//     console.log("Malumotlar to'gri kiritilmagan");
//     count = 0;
//   }
// }

// tekshir(user);

// ==================================================================================

// let user = {
//   name: " mALiKa ",
//   email: " MALIKA@EXAMPLE.COM ",
//   phone: " +998 90 123 45 67 ",
//   password: " Malika2026 ",
// };
// // Vazifalar:
// // 1. name ni tozalab, faqat birinchi harfini katta qiling.
// // 2. Emailni tozalab kichik harflarga o‘tkazing; @ mavjudligini va .com bilan tugashini tekshiring.
// // 3. Telefon raqamidagi bosh va oxirgi bo‘sh joylarni olib tashlang. +998 bilan boshlanishini tekshiring.
// // 4. Parolni tozalang va uzunligi kamida 8 belgi ekanini tekshiring.
// // 5. Barcha shartlar bajarilsa, ro‘yxatdan o‘tishga ruxsat bering; aks holda xatolikni ko‘rsating.
// // 6. Qo‘shimcha: har bir maydon tekshiruvi natijasini alohida chiqaring.

// let count = 0;

// function togriName(name) {
//   if (typeof name == "string") {
//     let toza = name.trim().toLowerCase();
//     if (toza) {
//       count++;
//       console.log("Ism tog'ri formatga otkazildi");

//       return toza[0].toUpperCase() + toza.slice(1);
//     } else {
//       console.log("");

//       null;
//     }
//   }
//   console.log("Ism string tipida kiritilmagan");

//   return null;
// }
// // console.log(togriName(user.name));

// const togriEmail = function (email) {
//   if (typeof email == "string") {
//     let toza = email.trim().toLowerCase();
//     if (toza && toza.includes("@") && toza.endsWith(".com")) {
//       count++;
//       console.log("email muvaffaqiyatli togri formatga otkazildi");

//       return toza;
//     } else {
//       console.log(
//         "email da bosh string , @ yoqligi yoki .com bilan tugamaslik xatosi bor",
//       );
//     }
//   }
//   console.log("email string tipida emas");

//   return null;
// };

// // console.log(togriEmail("MALIKAEXAMPLE.COm"));

// const togriNumber = (number) => {
//   if (typeof number == "string") {
//     let toza = number.trim();
//     if (toza.startsWith("+998")) {
//       console.log("telefonnomer muvaffaqiyatli togri fotmatga otkazildi");

//       count++;
//       return toza;
//     } else {
//       console.log("nomer +998 bilan boshlanmagan");
//     }
//   }
//   console.log("nomer string tipida kiritilmagan");

//   return null;
// };

// // console.log(togriNumber(user.phone));

// function passwordUzunlig(password) {
//   if (typeof password == "string") {
//     let toza = password.trim();
//     if (toza.length >= 8) {
//       count++;
//       console.log("parol uzunligi muvaffaqiyatli aniqlandi va saqlandi");
//       console.log(
//         "--------------------------------------------------------------",
//       );
//       delete user.password;
//       console.log("parol muvaffaqiyatli ochirildi");

//       return toza.length;
//     } else {
//       console.log("parol uzunligi yetarli emas");
//       return null;
//     }
//   } else console.log("parol string tipida kiritilmagan");
// }
// // console.log(passwordUzunlig(""));

// function tekshir(user) {
//   user.name = togriName(user.name);
//   console.log("--------------------------------------------------------------");

//   user.email = togriEmail(user.email);
//   console.log("--------------------------------------------------------------");

//   user.phone = togriNumber(user.phone);
//   console.log("--------------------------------------------------------------");

//   user.password_length = passwordUzunlig(user.password);
//   console.log("--------------------------------------------------------------");

//   if (count == 4) {
//     console.log("Barcha ma'lumotlar tog'ri va bazaga saqlandi");
//     console.log(
//   "--------------------------------------------------------------",
// );

//     user.Holat = "Ma'lumot qabul qilindi";
//     console.log(user);
//   } else console.log("Xatolik bor");
//   count = 0;
// }

// tekshir(user);

// =======================================================================================

// 3-masala. Mahsulot tavsifini tekshirish
// Mahsulot nomi va kategoriyasini formatlang, tavsif hamda kodni tekshiring.
// Boshlang‘ich kod:
// let product = {
//   name: " wIRELESS HEADPHONES ",
//   category: " ELECTRONICS ",
//   description: " Bluetooth headphones with noise cancellation ",
//   code: " WH-2026 ",
// };
// // Vazifalar:
// // 1. Mahsulot nomini tozalang; birinchi harfini katta, qolganlarini kichik qiling.
// // 2. category ni tozalab, barcha harflarini katta qiling.
// // 3. description ni tozalang va uzunligi kamida 20 belgi ekanini tekshiring.
// // 4. code ni tozalang va WH- bilan boshlanishini tekshiring.
// // 5. description ichida bluetooth so‘zi borligini katta-kichik harflarga bog‘liq bo‘lmagan holda tekshiring.
// // 6. Tekshiruv natijasiga ko‘ra ma’lumotlar to‘liq yoki to‘liq emasligini chiqaring.
// // Kutilgan natija (format namunasi):
// // Mahsulot: Wireless headphones
// // Kategoriya: ELECTRONICS
// // Kod: WH-2026
// // Holat: tekshiruvdan o‘tdi

// let count = 0;

// function toza(data) {
//   if (typeof data == "string") return data.trim().toLowerCase();
//   else return null;
// }

// function torgiName(name) {
//   if (typeof name == "string") {
//     let toza = name.trim().toLowerCase();
//     if (toza) {
//       count++;
//       return toza[0].toUpperCase() + toza.slice(1);
//     }
//     return null;
//   }
//   return null;
// }

// // console.log(torgiName(123));
// const togriCategory = (category) => {
//   let tozaholat = toza(category);
//   if (tozaholat) {
//     count++;
//     return tozaholat.toUpperCase();
//   } else return null;
// };

// const togriDescription = function (description) {
//   let tozaholat = toza(description);
//   if (tozaholat && tozaholat.length >= 20 && tozaholat.includes("bluetooth")) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// };

// const togriCode = (code) => {
//   let tozaholat = toza(code);
//   if (tozaholat && tozaholat.includes("wh-")) {
//     count++;
//     return tozaholat.toUpperCase();
//   }
//   return null;
// };

// function togri(product) {
//   product.name = torgiName(product.name);
//   product.category = togriCategory(product.category);
//   product.description = togriDescription(product.description);
//   delete product.description;
//   product.code = togriCode(product.code);
//   if (count == 4) {
//     product.Holat = "Tekshiruvdan o'tdi";
//     console.log(product);
//   } else {
//     console.log("Malumotlarda hatolik bor. Tekshiruvdan otmadi");
//     console.log(product);
//   }
//   count = 0;
// }
// // console.log(togriCategory(product.category));
// // console.log(togriDescription(product.description));
// // console.log(togriCode(product.code));
// togri(product);

// =======================================================================================

// 4-masala. Xabar matnini qayta ishlash
// Foydalanuvchi murojaatini tozalang va uning talabga mosligini tekshiring.
// Boshlang‘ich kod:
// let message = {
// sender: " sARDOR ",
// subject: " PAYMENT ISSUE ",
// text: " I cannot complete my payment. Please help! ",
// email: " SARDOR@MAIL.COM "
// };
// Vazifalar:
// 1. sender ni tozalang va ism formatiga keltiring.
// 2. subject ni tozalab, kichik harflarga o‘tkazing.
// 3. text ni tozalang; uzunligi kamida 20 belgi ekanini tekshiring.
// 4. text ichida payment so‘zi borligini katta-kichik harflarga bog‘liq bo‘lmagan holda aniqlang.
// 5. Emailni tozalang, kichik harflarga o‘tkazing va @ belgisi borligini tekshiring.
// 6. Barcha shartlar bajarilsa murojaat qabul qilinganini, aks holda xatolik borligini chiqaring.
// Kutilgan natija (format namunasi):
// Yuboruvchi: Sardor
// Mavzu: payment issue
// Email: sardor@mail.com
// Holat: murojaat qabul qilindi

// let message = {
//   sender: " sARDOR ",
//   subject: " PAYMENT ISSUE ",
//   text: " I cannot complete my payment. Please help! ",
//   email: " SARDOR@MAIL.COM ",
// };
// let count = 0;

// function toza(data) {
//   if (typeof data == "string") {
//     return data.trim().toLowerCase();
//   }
//   return null;
// }

// function togriIsm(name) {
//   let tozaholat = toza(name);
//   if (tozaholat) {
//     count++;
//     return tozaholat[0].toUpperCase() + tozaholat.slice(1);
//   }
//   return null;
// }
// // console.log(togriIsm(message.sender));

// function togriMavzu(mavzu) {
//   let tozaholat = toza(mavzu);
//   if (tozaholat) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }
// // console.log(togriMavzu(message.subject));

// function togriMatn(text) {
//   let tozaholat = toza(text);
//   if (tozaholat && tozaholat.includes("payment" && tozaholat>=20)) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }

// // console.log(togriMatn(message.text));

// function togriEmail(mail) {
//   let tozaholat = toza(mail);
//   if (tozaholat && tozaholat.includes("@")) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }
// // console.log(togriEmail(message.email));

// function togri(message) {
//   message.Yuboruvchi = togriIsm(message.sender);
//   delete message.sender;
//   message.Mavzu = togriMavzu(message.subject);
//   delete message.subject;
//   togriMatn(message.text);
//   delete message.text;
//   message.Email = togriEmail(message.email);
//   delete message.email;
//   if (count == 4) {
//     message.Holat = "murojaat qabul qilindi";
//     console.log(message);
//   } else {
//     console.log(count);

//     console.log("malumotlarda hatolik bor");
//     console.log(message);
//   }
//   count = 0;
// }
// togri(message)

// =======================================================================================

// 5-masala. Profil ma’lumotlarini to‘liq tekshirish
// Bir nechta string metodlari va shartlarni birlashtirib, foydalanuvchi profilini tekshiring.
// Boshlang‘ich kod:
// let profile = {
// fullName: " dILSHOD kARIMOV ",
// email: " DILSHOD@GMAIL.COM ",
// username: " dilshod_uz ",
// city: " tOSHKENT ",
// website: " https://dilshod.uz "
// };
// Vazifalar:
// 1. fullName ni tozalang va ism hamda familiyaning birinchi harfini katta qiling. split() o‘tilmagan bo‘lsa,
// ism va familiyani alohida qayta ishlash usulini tanlang.
// 2. Email va username ni tozalab, kichik harflarga o‘tkazing.
// 3. Emailda @ borligini va .com bilan tugashini tekshiring.
// 4. Username uzunligi kamida 6 belgi ekanini tekshiring.
// 5. city ni tozalang va birinchi harfini katta, qolganlarini kichik qiling.
// 6. website https:// bilan boshlanishini tekshiring.
// 7. Barcha tekshiruvlar bajarilsa profil tasdiqlanganini chiqaring; aks holda bajarilmagan talablarni
// ko‘rsating.
// Kutilgan natija (format namunasi):
// F.I.Sh.: Dilshod Karimov
// Email: dilshod@gmail.com
// Username: dilshod_uz
// Shahar: Toshkent
// Website: https://dilshod.uz
// Holat: profil tasdiqlandi

// let profile = {
//   fullName: " dILSHOD kARIMOV ",
//   email: " DILSHOD@GMAIL.COM ",
//   username: " dilshod_uz ",
//   city: " tOSHKENT ",
//   website: " https://dilshod.uz ",
// };
// let count = 0;

// function toza(data) {
//   if (typeof data == "string") {
//     return data.trim().toLowerCase();
//   }
//   return null;
// }

// function togriName(name) {
//   let tozaholat = toza(name);
//   if (tozaholat) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }

// function togriEmail(mail) {
//   let tozaholat = toza(mail);
//   if (tozaholat && tozaholat.includes("@") && tozaholat.includes(".com")) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }

// function tozaUsename(name) {
//   let tozaholat = toza(name);
//   if (tozaholat && tozaholat.length > 6) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }

// function tozaCity(city) {
//   let tozaholat = toza(city);
//   if (tozaholat) {
//     count++;
//     return tozaholat[0].toUpperCase() + tozaholat.slice(1);
//   }
//   return null;
// }
// function togrisayt(url) {
//   let tozaholat = toza(url);
//   if (tozaholat && tozaholat.startsWith("https://")) {
//     count++;
//     return tozaholat;
//   }
//   return null;
// }

// function togri(profil) {
//   profil.F_I_SH = togriName(profil.fullName);
//   delete profil.fullName;
//   profil.email = togriEmail(profil.email);
//   profil.username = tozaUsename(profil.username);
//   profil.Shahar = tozaCity(profil.city);
//   delete profil.city;
//   profil.website = togrisayt(profil.website);
//   if (count == 5) {
//     console.log(profil);
//   } else console.log("hatolik bor");
//   count = 0;
// }

// togri(profile);
