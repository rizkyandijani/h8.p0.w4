function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    var data = []
    
    for( var i = 0 ; i < listBarang.length ; i++){
        var client = {}
        leftOver = listBarang[i][2]
        TotalProfit = 0
        client.product = listBarang[i][0]
        client.shoppers = []
        for( var j = 0 ; j < shoppers.length ; j++){
            if(listBarang[i][0] === shoppers[j].product){
                if(leftOver >= shoppers[j].amount) {
                    leftOver  -= shoppers[j].amount
                    TotalProfit += shoppers[j].amount * listBarang[i][1]
                    client.shoppers.push(shoppers[j].name)
                }
            }
            client.leftOver = leftOver
            client.totalProfit = TotalProfit
        }
        data.push(client) 
    }
    
    return data
}

  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]