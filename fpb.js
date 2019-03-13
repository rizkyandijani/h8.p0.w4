function fpb(num1,num2){
    var arrayFpb = []
    var terbesar = num1
    if(num2 > num1){
        terbesar = num2
    }
    for( var i = 1 ;  i < terbesar ; i++){
        if(num1%i === 0 && num2%i === 0){
            arrayFpb.push(i)
        }
    }
    var terbesar = arrayFpb[0]
    for( var j = 0 ; j < arrayFpb.length ; j++){
        if(arrayFpb[j] > terbesar){
            terbesar = arrayFpb[j]
        }
    }
    if(arrayFpb.length < 2){
        return arrayFpb[0]
    }
    return terbesar
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1