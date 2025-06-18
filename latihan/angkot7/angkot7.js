// penumpang kosong
let penumpang = [];

// fungsi menambah penumpang
const tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(`Nama "${namaPenumpang}" sudah ada tidak boleh doble`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

const hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong!");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        console.log(`Nama ${namaPenumpang} di hapus`);
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} Tidak ada di dalam angkot`);
        return penumpang;
      }
    }
  }
};

console.log("Tambah :");
let tambah1 = tambahPenumpang("adi", penumpang);
let tambah2 = tambahPenumpang("luffy", penumpang);
console.log(tambah1);
console.log("\nHapus :");
let hapus1 = hapusPenumpang("adi", penumpang);
let hapus2 = hapusPenumpang("luffy", penumpang);
console.log(hapus1);
