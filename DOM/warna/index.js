// mengambil node body dari html
const container = document.querySelector("body");

// mengmabil id dari button untuk mengubah warna dari
const tUbahWarna = document.getElementById("tombolUbahWarna");

// event ketika suatu tombol itu di klik
tUbahWarna.addEventListener("click", function () {
  // reaksi tombol setelah di klik yaitu dia akan memberikan class biru-muda ke dalam container makanya dia bisa berubah warna
  container.classList.toggle("biru-muda");
});

// membuat buutton
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
  const red = sMerah.value;
  const green = sHijau.value;
  const blue = sBiru.value;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

sHijau.addEventListener("input", function () {
  const red = sMerah.value;
  const green = sHijau.value;
  const blue = sBiru.value;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
sBiru.addEventListener("input", function () {
  const red = sMerah.value;
  const green = sHijau.value;
  const blue = sBiru.value;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(blue);
});
