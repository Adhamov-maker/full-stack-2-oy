// let city = "parisa";
// let count = 0;

// for (let i = 0; i < city.length; i++) {
//   if (city[i] == "a") {
//     count++;
//   }
// }
// if (count == 1) {
//   console.log("true");
// } else console.log("False");

// let matn = "salom FullStack guruhi 1233 oquvchilari 1000";
// let yigindi = 0;

// for (i = 0; i < matn.length; i++) {
//     Number(matn[i])
//   if () {
//     if()
//   }
// }
// console.log(yigindi);

let matn = "Nodirbek chopar";
let count = 0;
let count2 = 0;

for (i of matn) {
  if (i == "a" || i == "o" || i == "i" || i == "a" || i == "e") {
    count++;
  } else if ((i != "a" || i != "o" || i != "i" || i != "a" || i != "e") && (i !=" " || i == !isNaN(Number(i)))) {
    count2++;
  }
}
console.log(count , count2);
