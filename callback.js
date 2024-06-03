function tambah(a, b){
    return a + b;
}

function perintah(callback){
    const x = prompt('Masukkan angka 1 :')
    const y = prompt('Masukkan angka 2 :')
    callback(x,y)
}

console.log(perintah(tambah))