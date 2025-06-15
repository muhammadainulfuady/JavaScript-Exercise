// let jumlahANgkot = 10;
// let angkotBeroperasi = 6;
// let angkotLembur1 = 8;
// let angkotLembur2 = 10;
// let noAngkot = 1;

// for (let i = noAngkot; i <= jumlahANgkot; i++) {
//   if (i <= angkotBeroperasi) {
//     console.log(`Angkot No. ${i} beroperasi dengan baik.`);
//   } else if (i % 2 == 0) {
//     console.log(`Angkot No. ${i} sedang lembur.`);
//   } else {
//     console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
//   }
// }

// let jumlahANgkot = 10;
// let angkotBeroperasi = 6;
// let angkotLembur1 = 8;
// let angkotLembur2 = 10;
// let noAngkot = 1;

// for (let i = noAngkot; i <= jumlahANgkot; i++) {
//   if (i <= angkotBeroperasi) {
//     console.log(`Angkot No. ${i} beroperasi dengan baik.`);
//   } else if (i === angkotLembur1) {
//     console.log(`Angkot No. ${i} sedang lembur.`);
//   } else if (i === angkotLembur2) {
//     console.log(`Angkot No. ${i} sedang lembur.`);
//   } else {
//     console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
//   }
// }

let jumlahANgkot = 10;
let angkotBeroperasi = 6;
let angkotLembur1 = 8;
let noAngkot = 1;

for (let i = noAngkot; i <= jumlahANgkot; i++) {
  if (i <= angkotBeroperasi) {
    console.log(`Angkot No. ${i} beroperasi dengan baik.`);
  } else if (i === 8 || i === 10) {
    console.log(`Angkot No. ${i} sedang lembur.`);
  } else {
    console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
  }
}
