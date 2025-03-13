function topla(a, b) {
    return a + b;
}

const toplaArrow = (a, b) => a + b;

console.log(topla(5, 10));       // 15
console.log(toplaArrow(5, 10));  // 15


function enBuyukEleman(dizi) {
    return Math.max(...dizi);
}
const enBuyukElemanArrow = (dizi) => Math.max(...dizi);

console.log(enBuyukEleman([3, 7, 2, 9, 15, 6]));      // 15
console.log(enBuyukElemanArrow([3, 7, 2, 9, 15, 6])); // 15

function elemanVarMi(dizi, eleman) {
    return dizi.includes(eleman);
}

const elemanVarMiArrow = (dizi, eleman) => dizi.includes(eleman);

console.log(elemanVarMi([1, 2, 3, 4, 5], 3));   // true
console.log(elemanVarMi([1, 2, 3, 4, 5], 10));  // false
console.log(elemanVarMiArrow([1, 2, 3, 4, 5], 3));  // true
console.log(elemanVarMiArrow([1, 2, 3, 4, 5], 10)); // false
