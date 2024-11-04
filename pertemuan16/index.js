//Asyncronus 15

//Syncronus -> single thread (proses dalam membuka apk/website) -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yaang memakan waktu yang lama");
// console.log("Proses 4");

//Asyncronus
//1. Paralel -> multi thread
setTimeout(() => {
    console.log("Proses 1");
}, 5000);
console.log("Proses 2");
setTimeout(() => {
    console.log("Proses 3");
}, 3000);
console.log("Proses 4");


//2. Encurrent
setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
        console.log("Proses 2");
        setTimeout(() => {
            console.log("Proses 3");
            setTimeout(() => {
                console.log("Proses 4");
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);

// //3. Promise
// let condition = true;
// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// //pakai Promise
// //1. then catch
// newPromise
//   .then((result) => result)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));


// // 2. Async - awal
// //Harus dibuat dalam fungsi

// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumePromise();