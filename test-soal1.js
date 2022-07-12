var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ];

let count = 0;

for (let index = 0; index < data1.length; index++) {
    if (data1[index] == data1) {
        count += 1;
    }
}

document.write("Total angka paling banyak keluar adalah" + count);