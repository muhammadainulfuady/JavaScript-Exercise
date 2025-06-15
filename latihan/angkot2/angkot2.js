let jumlahANgkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log(`While : Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}
for (let i = angkotBeroperasi + 1; i <= jumlahANgkot; i++) {
  console.log(`For : Angkot No. ${i} sedang tidak beroperasi.`);
}


// let jumlahANgkot = 10;
// let angkotBeroperasi = 6;
// let noAngkot = 1;
// for (let i = noAngkot; i <= jumlahANgkot; i++) {
//   if (i > angkotBeroperasi) {
//     console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
//   } else {
//     console.log(`Angkot No. ${i} beroperasi dengan baik.`);
//   }
// }
