const dataProducts = [
  {
    name: "Red dead redemption 2",
    price: "850000",
    category: "RPG",
    rating: "10",
    location: "Jakarta"
  },
  {
    name: "Ghost of Tsushima",
    price: "750000",
    category: "Action",
    rating: "9",
    location: "Bandung"
  },
  {
    name: "Spiderman",
    price: "750000",
    category: "Humor",
    rating: "8",
    location: "Tanggerang"
  },
  {
    name: "Shadow of the tomb raider",
    price: "680000",
    category: "Adventure",
    rating: "7",
    location: "Batam"
  }
];

//Expected Result:
//=========================================================
//Game Name : Shadow of The tomb Raider
//Price: Rp.680000
//Category: Adventure
//Rating: 7
//Ongkos Kirim : Rp. 35000
// Ongkir dari Jakarta = 10000
//Ongkir dari Tanggerang = 15000
//Ongkir dari Bandung = 20000
//Ongkir dari Batam = 350000

dataProducts.map((dataObj, id) => {
  console.log(`Name :  ${dataObj.name}`);
  console.log(`Price: ${dataObj.price}`);
  console.log(`Category: ${dataObj.category}`);
  console.log(`Rating: ${dataObj.rating}`);
  console.log(`Location: ${dataObj.location}`);

  switch (dataObj.location) {
    case "Jakarta":
      console.log(" Ongkos Kirim: RP 10000");
      break;

    case "Tanggerang":
      console.log("Ongkos Kirim: RP 15000");
      break;

    case "Bandung":
      console.log("Ongkos Kirim: RP 20000");
      break;

    case "Batam":
      console.log("Ongkos Kirim: RP 350000");
      break;

    default:
      console.log("Daerah yang anda maksud tidak terdaftar");
  }
});
