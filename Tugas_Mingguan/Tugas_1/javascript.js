function terbilang(numb) {
    var bilangan = numb.toString();
    var kalimat = "";
    var angka = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
    var kata = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
    var tingkat = new Array('', 'Ribu', 'Juta', 'Milyar', 'Triliun');
    var panjang_bilangan = bilangan.length;

    /* pengujian panjang bilangan */
    if (bilangan == 0) {
        kalimat = "Nol"
    } else if (panjang_bilangan > 5) {
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

    document.getElementById("terbilang").value = kalimat;

}






function tambah() {

    var number1 = parseFloat(document.getElementById('tambah1').value);
    var number2 = parseFloat(document.getElementById('tambah2').value);

    var hasilTambah = number1 + number2;

    if (hasilTambah == 0) {
        document.getElementById('hasil').style.backgroundColor = "blue";
    } else if (hasilTambah % 2 == 0) {
        document.getElementById('hasil').style.backgroundColor = "green";
    } else if (hasilTambah % 2 != 0) {
        document.getElementById('hasil').style.backgroundColor = "yellow";
    }

    document.getElementById('hasil').value = hasilTambah;
    terbilang(hasilTambah);
}

function kurang() {
    var number1 = parseFloat(document.getElementById('kurang1').value);
    var number2 = parseFloat(document.getElementById('kurang2').value);

    var hasilKurang = number1 - number2;
    terbilang(hasilKurang);

    if (hasilKurang == 0) {
        document.getElementById('hasil').style.backgroundColor = "blue";
    } else if (hasilKurang % 2 == 0) {
        document.getElementById('hasil').style.backgroundColor = "green";
    } else if (hasilKurang % 2 != 0) {
        document.getElementById('hasil').style.backgroundColor = "yellow";
    }

    document.getElementById('hasil').value = hasilKurang;
}

function kali() {

    var number1 = parseFloat(document.getElementById('kali1').value);
    var number2 = parseFloat(document.getElementById('kali2').value);

    let hasilKali = number1 * number2;
    terbilang(hasilKali);

    if (hasilKali == 0) {
        document.getElementById('hasil').style.backgroundColor = "blue";
    } else if (hasilKali % 2 == 0) {
        document.getElementById('hasil').style.backgroundColor = "green";
    } else if (hasilKali % 2 != 0) {
        document.getElementById('hasil').style.backgroundColor = "yellow";
    }

    document.getElementById('hasil').value = hasilKali;
}

function bagi() {

    var number1 = parseFloat(document.getElementById('bagi1').value);
    var number2 = parseFloat(document.getElementById('bagi2').value);

    let hasilBagi = number1 / number2;
    terbilang(hasilBagi);

    if (hasilBagi == 0) {
        document.getElementById('hasil').style.backgroundColor = "blue";
    } else if (hasilBagi % 2 == 0) {
        document.getElementById('hasil').style.backgroundColor = "green";
    } else if (hasilBagi % 2 != 0) {
        document.getElementById('hasil').style.backgroundColor = "yellow";
    }

    document.getElementById('hasil').value = hasilBagi;
}