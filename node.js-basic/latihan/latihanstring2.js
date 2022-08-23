var gaji = 4500000;
var ongkos = 10000;
var infaq = 50000;
var bpjs = 250000;
var kerja = 24;
var pajak = 2.5 * gaji / 100;
var potongan = infaq + bpjs + pajak;
var tunjangan = ongkos * kerja
var total = gaji - potongan + tunjangan
console.log("Gaji Kotor:Rp." + gaji);
console.log("======================");
console.log("Potongan pajak 2,5%:Rp." + pajak);
console.log("Potongan BPJS:Rp." + bpjs);
console.log("potongan infak:Rp." + infaq);
console.log("======================");
console.log("Total Potongan:Rp." + potongan);
console.log("======================");
console.log("Tunjangan transport:Rp." + ongkos);
console.log("Total hari kerja:Rp." + kerja +"hari");
console.log("======================");
console.log("Total tunjangan:Rp." + tunjangan);
console.log("======================");
console.log("Perhitungan gaji :");
console.log("(Gaji Kotor - potongan)" + "+" +"tunjangan");
console.log( "("+gaji + " - " + potongan + ") + " + tunjangan);
console.log("======================");
console.log("Gaji Bersih:Rp." + total);




