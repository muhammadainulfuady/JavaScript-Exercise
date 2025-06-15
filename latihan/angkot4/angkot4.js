let jumlahANgkot = 10;
let angkotBeroperasi = 6;
let angkotLembur = 8;
let noAngkot = 1;
for (let i = noAngkot; i <= jumlahANgkot; i++) {
  if (i <= angkotBeroperasi) {
    console.log(`Angkot No. ${i} beroperasi dengan baik.`);
  } else if (i == angkotLembur) {
    console.log(`Angkot No. ${i} sedang lembur.`);
  } else if (i > angkotBeroperasi + 1 != angkotLembur) {
    console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
  }
}

// let jumlahANgkot = 10;
// let angkotBeroperasi = 6;
// let angkotLembur = 8;
// let noAngkot = 1;

// for (let i = noAngkot; i <= jumlahANgkot; i++) {
//   if (i <= angkotBeroperasi) {
//     console.log(`Angkot No. ${i} beroperasi dengan baik.`);
//   } else if (i === angkotLembur) {
//     console.log(`Angkot No. ${i} sedang lembur.`);
//   } else {
//     console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
//   }
// }
