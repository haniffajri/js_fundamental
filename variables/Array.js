const products = [
    {
        name: "Budi 4",
        price: "Rp. 550.000",
        category: "Action",
        transaction: "25",
        rating: 9
    },
    {
        name: "GTA V",
        price: "Rp. 650.000",
        category: "RPG",
        transaction:"134",
        rating: 8
    },
    {
        name: "FIFA 2019",
        price: "Rp. 850.000",
        category: "Sport",
        transaction: "5",
        rating: 7
    }
];

// Iterasi/ Looping/ Perulangan
// 1 Map
// 2 for-Loop

// Map
products.map((dataObj, id) => {
//    console.log(dataObj.name);
//    console.log(dataObj.price);
//    console.log(dataObj.rating); 

   console.log(dataObj.name, dataObj.price, dataObj.rating);
})

console.log("==================================================================")
// For-Loop
for(let a=0; a < products.length ; a++){
    console.log(products[a].name, products[a].price, products[a].rating)
}