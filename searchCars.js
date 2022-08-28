import { navbar, str } from "./export.js";
document.querySelector("nav").innerHTML = navbar;
let address = localStorage.getItem("currentSearch");
document.querySelector(" .container .address p").innerText = address;
document.querySelector(".journeyDate").innerHTML = str;

let cararray = [
  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
    carname: "Maruti Baleno (Petrol)",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.9",
    driven: "42000 kms driven",
    rentprice: 4350,
  },

  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/a264d61ba6289d5292dbaad09e2dbf2a81a02cbe.JPG?1624370181",
    carname: "Renault Triber",
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "7 seats",
    ratings: "4.9",
    driven: "24700 kms driven",
    rentprice: 5127,
  },
  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/152bb8c1eb9fa1696e8a25f2244168dbc8ef8f48.JPG?1629088309",
    carname: "Renault Lodgy",
    transmission: "manual",
    fueltype: "petrol",
    seats: "7 seats",
    ratings: "5.0",
    driven: "60000 kms driven",
    rentprice: 5577,
  },
  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/505efec88be6f25bb3ffabbd6c6107629c88e169.jpg?1621260721",
    carname: "Datsun Redi-GO",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "5.0",
    driven: "15000 kms driven",
    rentprice: 3083,
  },
  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
    carname: "Maruti Baleno (Petrol)",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.7",
    driven: "49000 kms driven",
    rentprice: 3083,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/57b1b1b9180a56fba0156135ea6dc8e9f058303d.jpg?1621260558",
    carname: "Maruti Wagon R",
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.7",
    driven: "72936 kms driven",
    rentprice: 1601,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d838660c8fd50d0f2e3ed28c2b0550cbe940c0e0.JPG?1628247230",
    carname: "Hyundai Santro",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.7",
    driven: "40936 kms driven",
    rentprice: 1497,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c2fd725617ab00fc5db13c86298835c1825bc233.JPG?1627621607",
    carname: "Nissan Micra",
    transmission: "manual",
    fueltype: "petrol",
    seats: "7 seats",
    ratings: "4.5",
    driven: "89977 kms driven",
    rentprice: 1775,
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/14bbe6f0419d819891f9c4b76b798130fa2d7732.JPG?1627102878",
    carname: "Maruti S-Cross",
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "7 seats",
    ratings: "5",
    driven: "26057 kms driven",
    rentprice: 2700,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/4f978e418417cef5f069be1c013ee75b34c294ce.png?1613648724",
    carname: "Maruti Swift",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.5",
    driven: "34245 kms driven",
    rentprice: 1757,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d214904b8ea2db5eee94b476923ecb49e47c37a5.JPG?1624540855",
    carname: "Hyundai I20",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.9",
    driven: "12679 kms driven",
    rentprice: 2700,
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/464870b8c0460671f0f7c6da52a5577fd2fb089e.JPG?1630567517",
    carname: "Toyota Etios",
    transmission: "manual",
    fueltype: "diesel",
    seats: "5 seats",
    ratings: "4.7",
    driven: "70450 kms driven",
    rentprice: 1625,
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
    carname: "Renault Triber",
    transmission: "manual",
    fueltype: "diesel",
    seats: "7 seats",
    ratings: "4.3",
    driven: "12525 kms driven",
    rentprice: 1672,
  },

  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/1a46bbfce3d72635ae64a06e6bbb8f8745d41108.png?1584524485",

    carname: "Tata Nexon",
    transmission: "Automatic",
    fueltype: "diesel",
    seats: "5 seats",
    ratings: "5.0",
    driven: "60437kms driven",
    rentprice: 1672,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/caa0d4f0258c7da7e005a54df6eb930001af567b.JPG?1631171816",
    carname: "Maruti",
    transmission: "Automatic",
    fueltype: "diesel",
    seats: "5 seats",
    ratings: "5.0",
    driven: "60437kms driven",
    rentprice: 1672,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d4f137a56d1bcbf2a8f976b5029685d095425930.JPG?1623737903",
    carname: "Datsun Go Plus",
    transmission: "manual",
    fueltype: "petrol",
    seats: "7 seats",
    ratings: "4.6",
    driven: "22485 kms driven",
    rentprice: 877,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037",
    carname: "Tata Tiago",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.6",
    driven: "30021 kms driven",
    rentprice: 786,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/574035634d512b92d02dbd20c6d456f3370fa7d9.JPG?1632117366",
    carname: "Renault Kiger",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.0",
    driven: "13639 kms driven",
    rentprice: 1198,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d4ed67c506efdcac3cf25cabff555c095a463990.jpg?1617089835",
    carname: "Maruti Suzuki XL6 Petrol",
    transmission: "manual",
    fueltype: "petrol",
    seats: "7 seats",
    ratings: "4.9",
    driven: "22009 kms driven",
    rentprice: 1410,
  },
  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/0f9289bfae8401465ba95cca701e3732cc7b4022.JPG?1626670687",
    carname: "Maruti Ciaz",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "5.0",
    driven: "51328 kms driven",
    rentprice: 1106,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c1c7c50920ee5554049b8e2811630a667f5eef2d.jpg?1619086336",
    carname: "Honda Amaze 1.2V",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.7",
    driven: "37185 kms driven",
    rentprice: 924,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/9ee2b2607b222eb1162a85c59cb7224527a0dd21.png?1584525031",
    carname: "Hyundai Verna",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.9 (75)",
    driven: "73417 kms driven",
    rentprice: 1362,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/02760dae1afa7a02535764d5d260705ceeb34033.JPG?1631965146",
    carname: "Hyundai Xcent",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.8",
    driven: "78200 kms driven",
    rentprice: 806,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/9eb63e28e7b5322a21d0f57a9557869700b60e71.png?1584524284",
    carname: "Mahindra XUV 500 AT",
    transmission: "Automatic",
    fueltype: "diesel",
    seats: "7 seats",
    ratings: "4.0",
    driven: "19351 kms driven",
    rentprice: 2253,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/bf11b6a57ae2f1ef5b3f309c2d996fb324c6eb3f.JPG?1624082585",
    carname: "Maruti Suzuki XL6 Petrol",
    transmission: "manual",
    fueltype: "petrol",
    seats: "5 seats",
    ratings: "4.8",
    driven: "15688 kms driven",
    rentprice: 1182,
  },
];
showcarlist(cararray);

function showcarlist(data) {
  let container = document.querySelector(".car-container");
  container.innerHTML = null;
  data.forEach((element, index) => {
    let car = document.createElement("div");
    car.setAttribute("id", index);
    car.setAttribute("class", "car");
    let subdiv1 = document.createElement("div");
    let carimage = document.createElement("div");
    carimage.setAttribute("class", "carimage");
    let image = document.createElement("img");
    image.setAttribute("src", element.carimage);
    carimage.append(image);
    let subdiv11 = document.createElement("div");
    let carname = document.createElement("h3");
    carname.innerText = element.carname;
    let type = document.createElement("p");
    type.setAttribute("class", "type");
    let sp1 = document.createElement("span");
    sp1.innerText = element.transmission;
    let sp2 = document.createElement("span");
    sp2.innerText = element.fueltype;
    let sp3 = document.createElement("span");
    sp3.innerText = element.seats;
    type.append(sp1, sp2, sp3);
    let rating = document.createElement("p");
    rating.setAttribute("class", "rating");
    let i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-star");
    let sp4 = document.createElement("span");
    sp4.innerText = element.ratings;
    let sp5 = document.createElement("span");
    sp5.innerText = element.driven;
    rating.append(i, sp4, sp5);
    subdiv11.append(carname, type, rating);
    subdiv1.append(carimage, subdiv11);
    let subdiv2 = document.createElement("div");
    let subdiv21 = document.createElement("div");
    let addr = document.createElement("p");
    addr.innerText = "0.1km Rasta Peth - Near E...";
    subdiv21.append(addr);
    let subdiv22 = document.createElement("div");
    let price = document.createElement("h2");
    let rupee = document.createElement("i");
    rupee.setAttribute("class", "fa-solid fa-indian-rupee-sign");
    let sp6 = document.createElement("span");
    sp6.setAttribute("class", "price");
    sp6.innerText = element.rentprice;
    price.append(rupee, sp6);
    let book = document.createElement("button");
    book.setAttribute("id", "book");
    book.innerText = "Book Now";
    subdiv22.append(price, book);
    subdiv2.append(subdiv21, subdiv22);
    car.append(subdiv1, subdiv2);
    container.append(car);
  });
}

let filter = document.querySelector(".filter");
let labels = filter.querySelectorAll("label");

labels.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    console.log(event.target.getAttribute("name"));
    let task = event.target.innerText;
    let gotvalue = event.target.getAttribute("name");
    let compare = cararray.filter((element) => {
      console.log(gotvalue, task);
      if (gotvalue == "transmission") return element.transmission == task;
      else if (gotvalue == "fueltype") return element.fueltype == task;
      else return element.seats == task;
    });
    console.log(compare);
    showcarlist(compare);
  });
});

let forsort = document.querySelector(".sort");
let selected = forsort.querySelectorAll("select");
selected.forEach((el) => {
  el.addEventListener("change", (event) => {
    // console.log(event.target.value);
    let val = event.target.value;
    let attr = event.target.getAttribute("id");
    console.log(attr, val);
    let data = cararray.sort((a, b) => {
      if (attr == "byprice" && val == "ascending")
        return a.rentprice - b.rentprice;
      else if (attr == "byprice" && val == "descending")
        return b.rentprice - a.rentprice;
      else if (attr == "byrating" && val == "ascending") {
        (a = +a.ratings), (b = +b.ratings);
        return a - b;
      } else if (attr == "byrating" && val == "descending") {
        (a = +a.ratings), (b = +b.ratings);
        return b - a;
      } else if (attr == "driven" && val == "ascending") {
        (a = +a.driven.slice(0, 5)), (b = +b.driven.slice(0, 5));
        return a - b;
      } else if (attr == "driven" && val == "descending") {
        (a = +a.driven.slice(0, 5)), (b = +b.driven.slice(0, 5));
        return b - a;
      }
    });
    showcarlist(data);
  });
});
//{
//   carimage:
//     "https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
//   carname: "Maruti Baleno (Petrol)",
//   transmission: "manual",
//   fueltype: "petrol",
//   seats: "5 seats",
//   ratings: "4.9 (113)",
//   driven: "42k kms driven",
//   rentprice: 4350,
// },
