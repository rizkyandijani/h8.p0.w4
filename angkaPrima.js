function angkaPrima(num){
    var count = 0
    for( var i = 2 ;  i <= num ; i++){
        if(num%i === 0){
            count = count + 1
        }
    }
    if(count > 1){
        return false
    }
    if(!num){
        return 'tolong diisi angka bos'
    }
    return true
}
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false