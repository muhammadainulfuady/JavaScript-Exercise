let dt_lst = ["saya", 20, 2.0, true, false];
let total = 0;
for (let i = 0; i < dt_lst.length; i++) {
  console.log(`Data index ke-${i} adalah "${dt_lst[i]}"`);
  total += i;
}
