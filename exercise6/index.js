// 1. Calculate ke dalam let & const

//a). Let

// const calculateAge = (birthYear) => 2019 - birthYear;

// const yearUntilRetirement = ({ year, firstName }) => {
//     const age = calculateAge(year);
//     const retirement = 60 - age;
  
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//     } else {
//       console.log(`${firstName} is already retired.`);
//     }
//   };
  
//   yearUntilRetirement({ year: 2003, firstName: 'Bonito' });
  

// b). Const

// const calculateAge = (birthYear) => 2019 - birthYear;

// const yearUntilRetirement = ({ year, firstName }) => {
//   const age = calculateAge(year);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     console.log(`${firstName} is already retired.`);
//   }
// };

// yearUntilRetirement({ year: 2003, firstName: 'Bonito' });

//2. Calclate ke dalam String Literal

// const addNumber = (a, b, c, d, e, f, g) => {
//     const numbers = [a, b, c, d, e, f, g];
    
//     // Menggunakan reduce untuk menjumlahkan elemen dalam array
//     const sum = numbers.reduce((total, num) => total + num, 0);
  
//     return sum;
//   };
  
//   console.log(`The sum of the numbers is: ${addNumber(1, 2, 3, 4, 5, 6, 7)}`);

//3. Calculate ke dalam Arrow function

// const phi = 3.14;
// const power = 2;
// let radius = 0;

// const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// radius = 21;
// const area21 = calculateArea({ radius, power });

// radius = 7;
// const area7 = calculateArea({ radius, power });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4. Calculate ke dalam default parameter

// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
//   };
  
//   makeAjaxRequest('www.google.com');
  