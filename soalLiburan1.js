/*
    ==================
    WordToArrayReverse
    ==================
    [INSTRUCTION]
    buatlah sebuah program yang mengconvert string menjadi array, yang di reverse
    posisinya berdasarkan per kata 
    [RULE]
    - dilarang menggunakan function bawaan javascript kecuali split
    [EXAMPLE]
    wordToArrayReverse("Hello my name is Dimas")
    output:["Dimas","is","name","my","Hello"]
    wordToArrayReverse("Lorem ipsum sit dolor amet")
    output:["amet","dolor","sit","ipsum","Lorem"]
    1. split str menjadi array baru yang memisahkan setiap kata2 yang terpartisi oleh spasi
    2. assign array index arraySplit terakhir ke output index pertama
*/

function wordToArrayReverse(str) {
    //var arraySplit = str.split(' ')
    var arrayBalik = []
    var arrayOutput = []
    // your code here 
    var arraySplit = []
    var sementara = ''
    var j = 0
        for( var i = j ; i < str.length ; i++){
            if( str[i] !== ' '){
                sementara += str[i]
            }
            if( str[i+1] === ' ' || i === str.length-1){
                arraySplit.push(sementara)
                j = i+1
                sementara = ''
            }        
        }
    var output = []
        for ( var i = arraySplit.length-1 ; i >= 0 ; i--){
            output.push(arraySplit[i])
        }

    for( var i = 0 ; i < arraySplit.length ; i++){
        var sementara = ''
        for(var j = 1 ; j <= arraySplit[i].length ; j++){
            //console.log(arraySplit[i])
            //console.log(arraySplit[i][arraySplit[i].length-j])
            sementara += arraySplit[i][arraySplit[i].length-j]
        }
        //console.log(sementara)
        arrayBalik[i] = sementara
    }
    for( var i = arrayBalik.length ; i > 0 ; i--){
        arrayOutput[arrayBalik.length-i] = arrayBalik[i-1]
    }
    
        
        
return console.log(arrayOutput)
}

wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]

wordToArrayReverse("Lorem ipsum sit dolor amet")
//["amet","dolor","sit","ipsum","Lorem"]