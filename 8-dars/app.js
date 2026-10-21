let user = {
  firstName: "   aSaDbEk  ",
  lastName: " aBDULHAMIDOV ",
  email: "  ASADBEK@GMAIL.COM  ",
  username: "  asadbek_dev  ",
};
let count = 0;

function togriString(str) {
  if (typeof str == "string" && str.trim()) {
    let toza = str.trim();
    let togri_qiymat = toza[0].toUpperCase() + toza.slice(1).toLowerCase();
    count++;
    return togri_qiymat;
  } else return null;
}

function tozaEmail(mail) {
  let toza = mail.trim();
  if (!toza || !toza.includes("@") || !toza.endsWith(".com")) {
    count++;
    return toza.toLowerCase();
  } else return null;
}
function togri_username(username) {
  let toza = username.trim();
  if (!toza || toza.lenght == 5) {
    count++;
    return toza.toLowerCase();
  }
}

function tekshir()


if (count == 4) {
  user.Holat = "Foydalanuvchi muvaffaqiyatli royhatdan otdi";
  console.log(user);
} else console.log("Malumotlar to'gri kiritilmagan");

// console.log(togriString(123));
// console.log(tozaEmail(''));
