import { str } from "./export.js";
console.log(str);
document.querySelector(".journeyDate").innerHTML = str;

document.querySelector(".address").addEventListener("click", () => {
  window.location.href = "location.html";
});
document.querySelector(".date").addEventListener("click", () => {
  window.location.href = "dates.html";
});
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("show");
});
window.addEventListener("click", (event) => {
  // console.log(!event.target.classList.contains("fa-bars"));
  if (
    event.target.closest(".sidebar") == null &&
    !event.target.classList.contains("fa-bars")
  ) {
    document.querySelector(".sidebar").classList.remove("show");
  }
});
document.querySelector(".Roundtrip").addEventListener("click", (event) => {
  document.querySelector(".Roundtrip").style.border = "1px solid #0ba311";
  document.querySelector(".Roundtrip").style.color = "#0ba311";

  document.querySelector(".fa-arrow-right-arrow-left").style.color = "#0ba311";
  document.querySelector(".Airport").style.border = "none";
  document.querySelector(".Airport").style.color = "gray";

  document.querySelector(".fa-plane-departure").style.color = "gray";
});
document.querySelector(".Airport").addEventListener("click", (event) => {
  document.querySelector(".Airport").style.border = "1px solid #0ba311";
  document.querySelector(".Airport").style.color = "#0ba311";

  document.querySelector(".fa-plane-departure").style.color = "#0ba311";
  document.querySelector(".Roundtrip").style.border = "none";
  document.querySelector(".Roundtrip").style.color = "gray";

  document.querySelector(".fa-arrow-right-arrow-left").style.color = "gray";
});

document.querySelector(".findcars").addEventListener("click", () => {
  window.location.href = "searchCars.html";
});
let address = localStorage.getItem("currentSearch") || "Search for address";
document.querySelector(".banner .container .address p").innerText = address;


let userData=JSON.parse(localStorage.getItem("userName"))||[];
console.log(userData.name)

let login = document.querySelector(".login");

userData.forEach(element => {
    login.innerText = element.name;
});

