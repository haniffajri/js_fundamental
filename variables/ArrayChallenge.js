// perulangan / Iterasi/ Looping

// //Lv 1
// const ratingProduct = "*";

// console.log(ratingProduct)

// //lv 2
// const ratingProductGame = 2;

// let start = "";
// for(let a=0; a < ratingProductGame ; a++){
//     start += "* ";
// }
// console.log(start);
//Lv 3
// const totalMaxStars = 5;
// for(let a=0; a < totalMaxStars; a++){ //vertical
//     let stars = "";
//     for (let b = 0; b <= a; b++){ // Horizontal
//         stars += "* "
//     }
//     stars += "\n";
//     console.log(stars);
// }
//lv 3.1
// const totalMaxStars = 5;
// for(let a=0; a <= totalMaxStars; a++){
//     let stars = "";
//     for (let b=5; b>=a; b--){
//         stars +="  ";
//     }
//     for(let c=0; c<=a; c++){
//     stars +=" *";
//     }
//     stars +="\n";
//     console.log(stars);
// }

// lv 4
// const products = [
//   {
//     name: "Uncharted 4",
//     price: "Rp. 550.000",
//     category: "Action",
//     transaction: "25",
//     rating: 9
//   },
//   {
//     name: "GTA V",
//     price: "Rp. 650.000",
//     category: "RPG",
//     transaction: "134",
//     rating: 8
//   },
//   {
//     name: "Coba",
//     price: "Rp 550.000",
//     category: "Action",
//     transaction: "25",
//     rating: 9
//   },
//   {
//     name: "FIFA 2019",
//     price: "Rp. 850.000",
//     category: "Sport",
//     transaction: "5",
//     rating: 7
//   }
// ];

// // Game: Uncharted 4, Transaction: 25, Rating: * * * * * * *
// // Game: GTA V, Transaction: 134, Rating: * * * * * * * *
// // Game: FIFA 2019, Transaction: 5, Rating: * * * * * * * *

// for (let a = 0; a < products.length; a++) {
//   let bintang = "";
//   for (let b = 1; b <= products[a].rating; b++) {
//     bintang += "* ";
//   }
//   console.log(
//     `Game: ${products[a].name}, Trandaction: ${
//       products[a].transaction
//     }, Rating: ${bintang}`
//   );
// }