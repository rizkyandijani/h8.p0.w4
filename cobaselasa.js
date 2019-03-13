
function unshiftManual(a,b){
//var a = [1,2,3,4,5]

//var b = 8

var length = a.length + 1

for( var i = length-1 ; i >= 0 ; i--){
    a[i] = a[i-1]
}
a[0] = b

return console.log(a)
}

unshiftManual([1,2,3,4,5],10)