let i = 0;
let user = parseInt(prompt("Mau berapa kali loop ? "));
let genap = [];
let real = [];
let total = 0;
while (i < user) {
  let user2 = parseInt(prompt(`Masukkan list ke-${i + 1}`));
  real.push(user2);
  if (user2 % 2 == 0) {
    genap.push(user2);
  }
  total += user2;
  i++;
}
console.log("Array yang masuk:");
console.log(real);
console.log("\nAngka genap:");
genap.forEach(function (angka) {
  console.log(`${angka}`);
});
console.log(`Jumlah total \n${total}`);
