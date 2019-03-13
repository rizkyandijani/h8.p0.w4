var data = {}


function groupAnimalObject(data){
    var result = {}
    for(var i = 0 ; i < data.length ; i++){
        if( result[data[i][0]] === undefined){
            result[data[i][0]] = []
            //result[data[i][0]].push(data[i])
        }
        
        result[data[i][0]].push( data[i] )
        
    }
    return result
}

var arr = [ 'anjing', 'cicak','cacing','domba','ayam', 'elang','kuda','kancil','dugong','anoa']
console.log(groupAnimalObject(arr))