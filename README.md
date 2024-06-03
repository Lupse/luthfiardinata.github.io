# Dokumentasi Lutpe

Created: June 3, 2024 8:17 PM
Language: Javascript
Authors: Luthfi Ardinata

# Dokumentasi Callback Function

Ini adalah callback : 

```jsx
function tambah(a, b){
    return a + b;
}

function perintah(callback){
    const x = prompt('Masukkan angka 1 :')
    const y = prompt('Masukkan angka 2 :')
    callback(x,y)
}

console.log(perintah(tambah))
```