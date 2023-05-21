function sayHello(name){
    debugger;
    return `hello ${name}`;
}

const name = "Ardi";
debugger; //memberikan break point, agar bisa melakukan watch
console.info(sayHello(name));

// untuk menjalankan debugger harus dengan mode debug yaitu menggunakan node inspect
// untuk melihat isi dari variable bisa menggunakan watch("nama_variable") pada cli