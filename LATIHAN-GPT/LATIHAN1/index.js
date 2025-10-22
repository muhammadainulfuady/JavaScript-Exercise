// 1. Dapatkan elemen input range dan elemen span untuk menampilkan nilai
var rangeInput = document.getElementById("myRange");
var nilaiRangeSpan = document.getElementById("nilaiRange");

// 2. Setel teks awal untuk menampilkan nilai awal
nilaiRangeSpan.textContent = rangeInput.value;

// 3. Tambahkan event listener untuk mendengarkan perubahan nilai
rangeInput.addEventListener("input", function () {
  // Saat nilai berubah, update teks pada span
  nilaiRangeSpan.textContent = rangeInput.value;
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
