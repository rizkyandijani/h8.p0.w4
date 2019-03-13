function changeMe(arr) {
    // you can only write your code here!
    if( arr.length < 1){
        return '';
    }
    
    for( var i = 0 ; i < arr.length ; i++){
        var age;
        if(arr[i][3] < 2019) {
            age = 2019 - arr[i][3];
        }
        else {
            age = 'invalid birth year';
        }
        var data = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: age
        }
        console.log(i + 1 + '.' + ' ' + arr[i][0] + ' ' + arr[i][1] + ':')
        console.log(data)
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 2982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""