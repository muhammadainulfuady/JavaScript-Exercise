let jumlahANgkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;
for (let i = noAngkot; i <= jumlahANgkot; i++) {
  if (i > angkotBeroperasi) {
    console.log(`Angkot No. ${i} sedang tidak beroperasi.`);
  } else if (i < angkotBeroperasi) {
    console.log(`Angkot No. ${i} beroperasi dengan baik.`);
  }
}
