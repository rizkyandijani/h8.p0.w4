function ubahHuruf(x){
    var output = ''
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for( var i = 0 ; i < x.length ; i++){
        if( x[i] === 'z'){
            output += 'a'
            i++
        }
        for(var j = 0 ; j < alphabet.length ; j++){
            if(x[i] === alphabet[j]){
                output += alphabet[j+1]
            }
            
        }
        
    }

    return output
}
console.log(ubahHuruf('wow')); // xpx
// console.log(ubahHuruf('developer')); // efwfmpqfs
// console.log(ubahHuruf('javascript')); // kbwbtdsjqu
// console.log(ubahHuruf('keren')); // lfsfo
// console.log(ubahHuruf('semangat')); // tfnbohbu