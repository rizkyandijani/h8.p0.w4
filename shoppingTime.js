function shoppingTime(id,saldo){
    var saleBarang = ['Sepatu Stacattu','Baju Zoro','Baju H&N','SweaterUniklooh','Casing Handphone']
    var hargaSale = [1500000, 500000, 250000, 175000, 50000]

    if(!id ){
        return 'Mohon maaf, toko x hanya berlaku untuk member saja'
    } else if(typeof saldo !== 'number') {
        return 'mohon maaf uang tidak cukup'
    }
    //var saldo = 50000
    var sisa = saldo
    var kebeli = []
    for( var i = 0 ; i < hargaSale.length ; i++){
        if(sisa >= hargaSale[i]){
            sisa = sisa - hargaSale[i]
            kebeli.push(saleBarang[i])
        }
        else if(saldo < 50000){
            return 'mohon maaf uang tidak cukup'
        }

    }
    var data = {
        memberId: id,
        money: saldo,
        listPurchased: kebeli,
        chengeMoney: sisa
    }
    //console.log(sisa,kebeli)
    return data
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('0', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja




