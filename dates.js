let date = new Date();
let today = date.getDate();
let currentmonth = date.getMonth();
let x = renderDate(1, 0, 0);
var cdate = x[0];
var cday = x[1];
var cmonth = x[2];
let counter = 0;
let start = 29,
  end = 30;
let temp;
let sAns = "Aug",
  eAns = "Sep";
let selected = document.querySelectorAll(".dates div");
selected.forEach((el) => {
  el.addEventListener("click", (event) => {
    counter++;
    if (counter == 1) {
      start = event.target.innerText;
      event.target.classList.add("start");
      document.querySelector(".journeyDate .start #num").innerText = start;
      let insearch = event.target.parentNode.parentNode;
      let m = insearch.querySelector(".month").innerText;
      sAns = m.slice(0, 3);
      document.querySelector(".journeyDate .start #mon").innerText = sAns;
    } else {
      if (counter > 2) {
        temp.classList.remove("end");
      }
      event.target.classList.add("end");
      temp = event.target;
      end = event.target.innerText;
      document.querySelector(".journeyDate .end #num").innerText = end;
      let insearch = event.target.parentNode.parentNode;
      let m = insearch.querySelector(".month").innerText;
      eAns = m.slice(0, 3);
      document.querySelector(".journeyDate .end #mon").innerText = eAns;
    }
    console.log(start, end);
  });
});
// console.log(today, currentmonth);
function renderDate(counterfordate, counterforday, counterformonth) {
  let lastdate = new Date(
    date.getFullYear(),
    date.getMonth() + counterfordate,
    0
  );
  lastdate = lastdate.getDate();
  // if we will not put 0 then it will give first day of current month
  let firstday = new Date(date.getFullYear(), date.getMonth() + counterforday);
  firstday = firstday.getDay();
  // console.log(firstday);
  // if we need last date of previous month
  let prevdate = new Date(date.getFullYear(), date.getMonth(), 0);
  prevdate = prevdate.getDate();
  // console.log(prevdate);
  counterfordate++;
  counterforday++;
  let firstdayOfNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + counterforday
  ).getDay();
  let lastdateOfNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + counterfordate,
    0
  ).getDate();
  // console.log(firstday, lastdate);
  // console.log(firstdayOfNextMonth, lastdateOfNextMonth);
  let months = [
    "January'23",
    "February'23",
    "March'23",
    "April'23",
    "May'23",
    "June'23",
    "July'23",
    "August'22",
    "September'22",
    "October'22",
    "November'22",
    "December'22",
  ];
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  // console.log(date.getDate(), date.getDay(), date.getMonth());
  document.querySelector(".currentmonth .month").innerHTML =
    months[date.getMonth() + counterformonth];
  let currmon = date.getMonth() + counterformonth;
  counterformonth++;
  document.querySelector(".nextmonth .month").innerHTML =
    months[date.getMonth() + counterformonth];

  let cells1 = "";
  // we need number of empty cells equal to firstday
  // these empty spaces can be filled by prev months dates by getting last date of prev month which we have done above
  for (let e = firstday; e > 0; e--) {
    cells1 = cells1 + "<div>" + "</div>";
  }
  for (let i = 1; i <= lastdate; i++) {
    if (currentmonth === currmon && i < today)
      cells1 = cells1 + "<div class = 'nottoday'>" + i + "</div>";
    else cells1 = cells1 + "<div>" + i + "</div>";
  }
  document.querySelector(".prev .dates").innerHTML = cells1;

  let cells2 = "";
  for (let e = firstdayOfNextMonth; e > 0; e--) {
    cells2 = cells2 + "<div>" + "</div>";
  }
  for (let i = 1; i <= lastdateOfNextMonth; i++) {
    cells2 = cells2 + "<div>" + i + "</div>";
  }
  document.querySelector(".next .dates").innerHTML = cells2;

  console.log(counterfordate, counterforday, counterformonth);
  return [counterfordate, counterforday, counterformonth];
}
// console.log(cdate, cday, cmonth);

document.querySelector(".fa-angle-right").addEventListener("click", () => {
  console.log(cdate, cday, cmonth);
  if (cmonth >= 3) {
    return;
  } else {
    cdate++;
    cday++;
    cmonth++;
    renderDate(cdate, cday, cmonth);
  }
});
document.querySelector(".fa-angle-left").addEventListener("click", () => {
  if (cmonth <= 0) {
    return;
  } else {
    cdate--;
    cday--;
    cmonth--;
    renderDate(cdate, cday, cmonth);
  }
});
mobiscroll.setOptions({
  theme: "ios",
  themeVariant: "light",
});

mobiscroll.datepicker("#demo-time", {
  controls: ["time"],
  select: "range",
  display: "inline",
});

mobiscroll.datepicker("#demo-timegrid", {
  controls: ["timegrid"],
  select: "range",
  display: "inline",
});

mobiscroll.datepicker("#demo-one-input", {
  controls: ["time"],
  select: "range",
});

mobiscroll.datepicker("#demo-start-end", {
  controls: ["time"],
  select: "range",
  startInput: "#demo-start",
  endInput: "#demo-end",
});
let starttime = "8:30 AM";
let endtime = "5:00 PM";
function gettime() {
  console.log(document.getElementById("demo-one-input").value);
  let timerange = document.getElementById("demo-one-input").value;

  let x = timerange.split("-", 2);
  starttime = x[0];
  document.querySelector(".journeyDate .start .time").innerText = starttime;
  endtime = x[1];
  document.querySelector(".journeyDate .end .time").innerText = endtime;
}
document.querySelector(".clear").addEventListener("click", () => {
  window.location.reload();
});

document.querySelector(".continue").addEventListener("click", () => {
  window.location.href = "index.html";
});
let timedata = [];
timedata.push(start, sAns, starttime, end, eAns, endtime);
localStorage.setItem("timedata", JSON.stringify(timedata));
