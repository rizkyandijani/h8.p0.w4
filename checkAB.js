/*
1. loop check untuk menemukan posisi index a dan b dan push ke array posisi a dan b
2. check jarak a dan b dengan jarak 3 index, output sama dengan true jika jarak a dan b atau sebaliknya
3 index
3.




*/








function checkAB(num) {
    //var num = 'lane borrowed'
    // you can only write your code here!
    var posisiA = []
    var posisiB = []
    var jarak = []
    for( var i = 0 ; i < num.length ; i++){
        if( num[i] === 'a'){
            posisiA.push(i)
        }
        if( num[i] === 'b'){
            posisiB.push(i)
        }
    }
    for( var i = 0 ; i < posisiA.length ; i++){
        for( var j = 0 ; j < posisiB.length ; j++){
            if( Math.abs(posisiA[i]-posisiB[j]) === 4){
                return true
            }
        }
    }
    //console.log(posisiA,posisiB,jarak)
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false