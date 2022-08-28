let [start, sAns, starttime, end, eAns, endtime] = JSON.parse(
  localStorage.getItem("timedata")
) || [29, "Aug", "8:30 PM", 30, "Sep", "5:00 PM"];

let str = ` <div class="start">
<p class="date">
  Tue, <span id="num"> ${start}</span> <span id="mon"> ${sAns}</span>
  <span> '22</span>
</p>
<p class="time">${starttime}</p>
</div>
<div class="to"><i class="fa-solid fa-arrow-right-long"></i></div>
<div class="end">
<p class="date">
  Wed, <span id="num"> ${end}</span> <span id="mon"> ${eAns}</span>
  <span> '22</span>
</p>
<p class="time">${endtime}</p>
</div>`;

let navbar = ` 
<div class="left">
  <div class="hamburger">
    <i class="fa-solid fa-bars"></i>
  </div>

  <div class="logo">
    <a href="index.html">
      <img
        src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
        alt=""
      />
    </a>
  </div>
</div>

<div class="right">
  <div class="host">
    <div class="hostlogo">
      <a href="host1.html.html">
        <img
          src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
          alt=""
        />
      </a>
    </div>
    <div><a href="host.html">Become a Host</a></div>
  </div>
  <div class="zms"><a href="">ZMS</a></div>
  <div class="login"><a href="Login.html">Login/Signup</a></div>
</div>
`;

export { str, navbar };
