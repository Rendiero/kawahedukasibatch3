function rightstars(panjang) {
    let hasilright = '';
    for (let a = 0; a < panjang; a++) {
        for (let j = 0; j <= a; j++) {
            hasilright += '*';
        }
        hasilright += '\n';
    }
    return hasilright;
}
console.log(rightstars(6));


function leftstars(length) {
    let hasilleft = '';
    for (let b = length; b > 0; b--) {
        for (let k = 1; k <= length; k++) {
            if (k >= b) {
                hasilleft += '*';
            } else {
                hasilleft += ' '
            }
        }
        hasilleft += '\n';
    }
    return hasilleft;
}
console.log(leftstars(6))