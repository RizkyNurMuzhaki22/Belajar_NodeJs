var angka = 100;
console.log(angka == 100);// True
console.log(angka == 20);// False

//Not Equals
var sifat = "rajin";
console.log(sifat != "malas");// True
console.log(sifat != "bandel");// True

// Strict Equals
var angka = 8;
console.log(angka == "8");// True padahal "8" adalah string.
console.log(angka === "8");// False karena "8" type datanya berbeda
console.log(angka == 8);// True

//Not Strict Equals
var angka = 11;
console.log(angka != "11");// False padahal "8" adalah string.
console.log(angka !== "11");// True karena "8" type datanya berbeda
console.log(angka != 11);// False

var number = 17;
console.log(number < 20);// True
console.log(number > 17);// False
console.log(number >= 17);// True, karena terdapat sama dengan
console.log(number <= 20);// True

