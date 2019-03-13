/*
1. loop dengan i sama dengan 1 dan maksimum loop sama dengan angka, dimana jika angka dimodulus i,
apabila hasil sama dengan 0, strSementara += i.toStr() dan strSementara += (angka dibagi i)
2. check string length dalam array daftar pengkali mana yang terbesar
3.

*/








function digitPerkalianMinimum(angka) {

var daftarPengkali = []
for( var i = 1 ; i <= angka ; i++){
    //console.log(strSementara)
    var strSementara = ''
    if( angka % i === 0){
        strSementara += i.toString()
        strSementara += (angka/i).toString()
    }
    if(strSementara.length > 0){
    daftarPengkali.push(strSementara)
    }
}
var stringTerkecil = daftarPengkali[0]
for( var i = 0 ; i < daftarPengkali.length ; i++){
    if(daftarPengkali[i].length < stringTerkecil){
        stringTerkecil = daftarPengkali[i].length
    }
}
  // you can only write your code here!
/*var total = 0
for( var i = 0 ; i < daftarPengkali.length ; i++){
    if(daftarPengkali[i].length === stringTerkecil){
        total++
    }
}*/
  return stringTerkecil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2