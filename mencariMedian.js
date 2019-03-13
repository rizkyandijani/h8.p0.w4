function cariMedian(arr){
    var output = 0
    var length1 = arr.length
    var tengah = length1/2
    
        if( length1 % 2 === 0){    
            output = (arr[tengah-1] + arr[tengah])/2
        }
        else if( length1 % 2 !== 0){
            var tengahGanjil = Math.ceil(tengah)-1
            output = arr[tengahGanjil]
        }
    
    return output
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5