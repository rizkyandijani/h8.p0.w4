function cariModus(arr){
    var output = 0
    var nominal = []
    for( var i = 0 ; i<arr.length  ; i++){
        var flag = false
        while( flag === false){
            for( var j = 0 ; j < nominal.length ; j++){
                if( arr[i] === nominal[j]){
                    flag = true
                }
            }
            if(!flag){
                nominal.push(arr[i])
            }
        }    
    }
    if(nominal.length < 2){
        return -1
    }
    if(nominal.length === arr.length){
        return -1
    }
    var lengthTerbesar = 0
    var majority = 0
    for( var k = 0 ; k < nominal.length ; k++){
        var sementara = []
        for(var l = 0 ; l < arr.length ; l++){
            if(nominal[k] === arr[l] ){
                sementara.push(nominal[k])
            }
        }
        if(sementara.length > lengthTerbesar){
            lengthTerbesar = sementara.length
            majority = sementara[0]
        }
    }


    return majority
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1