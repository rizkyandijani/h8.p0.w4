function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var output = []
    for( var i = 0 ; i < arrPenumpang.length ; i++){
        var client = {}
        var awal = 0
        var akhir = 0
        var perjarak = 2000
        //for( var j = 0 ; j < arrPenumpang[i].length ; j++){
            client.penumpang = arrPenumpang[i][0]
            client.naikDari = arrPenumpang[i][1]
            client.tujuan = arrPenumpang[i][2]
        //}
        for( var k = 0 ; k < rute.length ; k++){
            if(rute[k] === client.naikDari){
                awal = k
            }
            if(rute[k] === client.tujuan){
                akhir = k
            }
        }
        client.bayar = (Math.abs(akhir-awal))*perjarak
        output.push(client)
    }
    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]