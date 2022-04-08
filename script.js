// import * as hammasi from './login.js';
// console.log(hammasi);

// Deafault import
// import login from './login.js';
// login('niyoz', 1111);

// console.log('nma gap uzi');

// let data = await fetch('https://restcountries.com/v2/name/uzbekistan');

// console.log(data);

// console.log('nioyzbek');

// function kerak() {
//   let cart = [];
//   let maxsulotlarSoni = 100;
//   let ishchikarSoni = 10;
//   let hamaPul = 1_000_000;
//   function sotibOl(nomi, soni) {
//     cart.push({ nomi, soni });
//     console.log(`Siz ${nomi}ni ${soni} ta oldingiz`);
//   }
//   return { sotibOl, ishchikarSoni, hamaPul };
// }

// let sot = kerak();
// console.log(sot);
// sot.sotibOl('olma', 100);

const login = require(`./login.js`);

console.log(login);
