function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var output = ''
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var alphabetBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //console.log(alphabet.length)
    for( var i = 0 ; i < kalimat.length ; i++){
        for( var j = 0 ; j < alphabet.length ; j++){
                if( kalimat[i] === alphabet[j]){
                    kalimat[i] = alphabetBesar[j]
                    output += alphabetBesar[j]
                    j = alphabet.length
                }
                else if( kalimat[i] === alphabetBesar[j]){
                    kalimat[i] = alphabet[j]
                    output += alphabet[j]
                    j = alphabet.length
                }
                if( j === alphabet.length-1){
                    output += kalimat[i]
                }
                
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"