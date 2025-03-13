
function sayiDurumu(sayi) {
    if (sayi > 0) {
        console.log(`${sayi} pozitif bir sayıdır.`);
    } else if (sayi < 0) {
        console.log(`${sayi} negatif bir sayıdır.`);
    } else {
        console.log(`Sayı sıfırdır.`);
    }
}

sayiDurumu(10);  // 10 pozitif bir sayıdır.
sayiDurumu(-5);  // -5 negatif bir sayıdır.
sayiDurumu(0);   // Sayı sıfırdır.

console.log("\n--- Döngüler ---\n");


console.log("For Döngüsü:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("\nWhile Döngüsü:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

console.log("\nDo-While Döngüsü:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);

console.log("\n--- Asal Sayı Kontrolü ---\n");

function asalMi(sayi) {
    if (sayi < 2) return false; // 2'den küçük sayılar asal değildir.
    for (let i = 2; i <= Math.sqrt(sayi); i++) {
        if (sayi % i === 0) {
            return false;
        }
    }
    return true;
}

function asalKontrol(sayi) {
    if (asalMi(sayi)) {
        console.log(`${sayi} bir asal sayıdır.`);
    } else {
        console.log(`${sayi} asal değildir.`);
    }
}

asalKontrol(7);  // 7 bir asal sayıdır.
asalKontrol(10); // 10 asal değildir.
asalKontrol(23); // 23 bir asal sayıdır.
