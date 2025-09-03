// function vod(name, umur, nilai) {
//   return `Halo nama saya ${name}\nUmur saya ${umur} tahun\nNilai ujian saya ${nilai}`;
// }
// const nama = "Fuady";
// const umur = 20;
// const nilai = 75.5;
// console.log(vod(nama, umur, nilai));

// function luasPersegi(panjang, lebar) {
//   return `Luas persegi panjang : ${
//     panjang * lebar
//   }\nKeliling persegi panjang : ${2 * (panjang + lebar)}`;
// }
// const luas1 = 16;
// const luas2 = 13;
// console.log(luasPersegi(luas1, luas2));

// function nilaiUjian(nilai) {
//   if (nilai >= 90) {
//     console.log("Hasil akhir A");
//   } else if (nilai >= 80) {
//     console.log("Hasil akhir B");
//   } else if (nilai >= 70) {
//     console.log("Hasil akhir C");
//   } else if (nilai >= 60) {
//     console.log("Hasil akhir D");
//   } else if (nilai < 60) {
//     console.log("Hasil akhir E");
//   }
//   return `Nilai ujianmu ${nilai}`;
// }

// console.log(nilaiUjian(90));
// function hitungHari(hari) {
//   switch (hari) {
//     case 1:
//       console.log("senin");
//       break;
//     case 2:
//       console.log("selasa");
//       break;
//     case 3:
//       console.log("rabu");
//       break;
//     case 4:
//       console.log("kamis");
//       break;
//     case 5:
//       console.log("jumat");
//       break;
//     case 6:
//       console.log("sabtu");
//       break;
//     case 7:
//       console.log("minggu");
//       break;
//   }
//   return hari;
// }
// hitungHari(2);

function looping(nilai) {
  for (let i = 1; i < nilai + 1; i++) {
    console.log(i);
  }
  return nilai;
}
looping(10);
