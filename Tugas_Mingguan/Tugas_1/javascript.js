 /* Function mengubah angka menjadi kalimat */
 function terbilang(numb) {
     var bilangan = numb.toString();
     var kalimat = "";
     var angka = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
     var kata = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
     var tingkat = new Array('', 'Ribu', 'Juta', 'Milyar', 'Triliun');
     var panjang_bilangan = bilangan.length;


     if (bilangan == 0) { /*Pengujian bilangan nol*/
         kalimat = "Nol"
     } else if (panjang_bilangan > 5) { /* pengujian panjang bilangan */
         kalimat = "Diluar Batas";
     } else {
         /* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
         for (i = 1; i <= panjang_bilangan; i++) {
             angka[i] = bilangan.substr(-(i), 1);
         }

         var i = 1;
         var j = 0;

         /* mulai proses iterasi terhadap array angka */
         while (i <= panjang_bilangan) {
             subkalimat = "";
             kata1 = "";
             kata2 = "";
             kata3 = "";

             /* untuk Ratusan */
             if (angka[i + 2] != "0") {
                 if (angka[i + 2] == "1") {
                     kata1 = "Seratus";
                 } else {
                     kata1 = kata[angka[i + 2]] + " Ratus";
                 }
             }

             /* untuk Puluhan atau Belasan */
             if (angka[i + 1] != "0") {
                 if (angka[i + 1] == "1") {
                     if (angka[i] == "0") {
                         kata2 = "Sepuluh";
                     } else if (angka[i] == "1") {
                         kata2 = "Sebelas";
                     } else {
                         kata2 = kata[angka[i]] + " Belas";
                     }
                 } else {
                     kata2 = kata[angka[i + 1]] + " Puluh";
                 }
             }

             /* untuk Satuan */
             if (angka[i] != "0") {
                 if (angka[i + 1] != "1") {
                     kata3 = kata[angka[i]];
                 }
             }

             /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
             if ((angka[i] != "0") || (angka[i + 1] != "0") || (angka[i + 2] != "0")) {
                 subkalimat = kata1 + " " + kata2 + " " + kata3 + " " + tingkat[j] + " ";
             }

             /* gabungkan variabe sub kalimat (untuk Satu blok 3 angka) ke variabel kalimat */
             kalimat = subkalimat + kalimat;
             i = i + 3;
             j = j + 1;
         }

         /* mengganti Satu Ribu jadi Seribu jika diperlukan */
         if ((angka[5] == "0") && (angka[6] == "0")) {
             kalimat = kalimat.replace("Satu Ribu", "Seribu");
         }
     }

     console.log(kalimat);

     /* memberikan value pada element ber id terbilang */
     document.getElementById("terbilang").value = kalimat;

 }

 /* pengujian bilangan untuk menyesuaikan warna background */
 function ubahBackground(n) {
     if (n == 0) {
         document.getElementById('hasil').style.backgroundColor = "blue";
     } else if (n % 2 == 0) {
         document.getElementById('hasil').style.backgroundColor = "green";
     } else if (n % 2 != 0) {
         document.getElementById('hasil').style.backgroundColor = "yellow";
     }

     console.log(n);
 }



 /*Function Penjumlahan*/
 function tambah() {

     /* menerima variable dari form */
     var number1 = parseFloat(document.getElementById('tambah1').value);
     var number2 = parseFloat(document.getElementById('tambah2').value);

     /* proses penjumlahan */
     var hasilTambah = number1 + number2;

     /* mengakses method pengubah warna kolom */
     ubahBackground(hasilTambah);

     /* mengakses method pengubah angka menjadi kalimat */
     terbilang(hasilTambah);

     /* mengirimkan value pada kolom hasil */
     document.getElementById('hasil').value = hasilTambah;

 }

 /*Function Pengurangan*/
 function kurang() {

     /* menerima variable dari form */
     var number1 = parseFloat(document.getElementById('kurang1').value);
     var number2 = parseFloat(document.getElementById('kurang2').value);

     /* proses pengurangan */
     var hasilKurang = number1 - number2;

     /* mengakses method pengubah warna kolom */
     ubahBackground(hasilKurang);

     /* mengakses method pengubah angka menjadi kalimat */
     terbilang(hasilKurang);

     /* mengirimkan value pada kolom hasil */
     document.getElementById('hasil').value = hasilKurang;
 }

 /*Function Perkalian*/
 function kali() {

     /* menerima variable dari form */
     var number1 = parseFloat(document.getElementById('kali1').value);
     var number2 = parseFloat(document.getElementById('kali2').value);

     /* proses perkalian */
     let hasilKali = number1 * number2;

     /* mengakses method pengubah warna kolom */
     ubahBackground(hasilKali);

     /* mengakses method pengubah angka menjadi kalimat */
     terbilang(hasilKali);

     /* mengirimkan value pada kolom hasil */
     document.getElementById('hasil').value = hasilKali;
 }

 /*Function Pembagian*/
 function bagi() {

     /* menerima variable dari form */
     var number1 = parseFloat(document.getElementById('bagi1').value);
     var number2 = parseFloat(document.getElementById('bagi2').value);

     /* proses pembagian */
     let hasilBagi = number1 / number2;

     /* mengakses method pengubah warna kolom */
     ubahBackground(hasilBagi);

     /* mengakses method pengubah angka menjadi kalimat */
     terbilang(hasilBagi);

     /* mengirimkan value pada kolom hasil */
     document.getElementById('hasil').value = hasilBagi;
 }