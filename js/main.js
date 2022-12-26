"use-strict";
import { foEvents } from "./module.js";

console.log(
  "%cWelcom To Wesam%cBlog",
  "color:red; font-size:40px",
  "background-color:blue;color:white; font-size:40px"
);

console.log(
  "%cStop! %c\nThis is a browser feature intended for developers. ",
  "-webkit-text-fill-color:red; -webkit-text-stroke: 1px #333; font-size:40px;",
  "color:#000; font-size:20px"
);

const preloader = document.querySelector(".preloader");
window.onload = document.onreadystatechange = () => {
  if (document.readyState === "loading") {
    preloader.classList.add("show");
  }
};

const textIntroAnimation = document.querySelector(".landing-section .text"),
  imageIntroAnimation = document.querySelector(".landing-section .image > img");
window.addEventListener("load", (e) => {
  textIntroAnimation.classList.add("active");
  imageIntroAnimation.classList.add("active");
});

/* colors option from setting box */
const settingBox = document.querySelector(".setting-box"),
  getMood = window.localStorage.getItem("mode");
document.querySelector(".icon").onclick = () => {
  settingBox.classList.toggle("show");
  icon.classList.toggle("fa-spin");
};
if (localStorage.getItem("colors")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colors")
  );
}

let colorsList = document.querySelectorAll(".colors-options li");
colorsList.forEach((li) => {
  li.addEventListener("click", (event) => {
    document.documentElement.style.setProperty(
      "--main-color",
      event.target.dataset.color
    );
    localStorage.setItem("colors", event.target.dataset.color);
  });
});

let incrementFontCounter = 1;
const introPargraph = document.body.querySelector(".landing-section .text > p");
let currentFontSize = parseInt(
  window.getComputedStyle(introPargraph).getPropertyValue("font-size")
);

const incrementBtn = document.querySelector(".setting-box .btns .increment");
const decrementBtn = document.querySelector(".setting-box .btns .decrement");
const resetBtn = document.querySelector(".setting-box .btns .reset");

incrementBtn.addEventListener("click", () => {
  introPargraph.style.fontSize =
    currentFontSize + incrementFontCounter++ + "px";
});

decrementBtn.addEventListener("click", () => {
  introPargraph.style.fontSize =
    currentFontSize + incrementFontCounter-- + "px";
});

resetBtn.addEventListener("click", () => {
  introPargraph.style.fontSize = 20 + "px";
});

/* Subscribe Form Validation */
const subscribeVaild = document.querySelector(".subscribe-btn");
document.querySelector(".subscribe-btn").onclick = function (event) {
  event.preventDefault();
};

/* Request A Discount Form Validation */
const userName = document.getElementById("name"),
  email = document.getElementById("email"),
  phoneNo = document.getElementById("phone"),
  textArea = document.getElementById("user-message");

document.forms[1].onsubmit = function (e) {
  if (
    userName.value === "" ||
    email.value === "" ||
    phoneNo.value === "" ||
    textArea.value === ""
  )
    e.preventDefault();
};

let started = false;
function increaseNums(element) {
  const goal = element.dataset.goal;
  const counter = setInterval(() => {
    element.textContent++;
    if (element.textContent === goal) {
      clearInterval(counter);
    }
  }, 100 / goal);
}

const scroolBtn = document.querySelector(".to-top-butotn"),
  stateSection = document.getElementById("stats"),
  stats = document.querySelectorAll(".stats .num"),
  skillsSection = document.querySelector(".skills"),
  progressSpans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= 623) {
    scroolBtn.style.cssText = "display:block;right: 20px;";
  }
  if (window.scrollY <= 623) {
    scroolBtn.style.display = "none";
  }

  scroolBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      right: 4,
      behavior: "smooth",
    });
  };

  if (window.scrollY >= stateSection.offsetTop) {
    if (!started) {
      stats.forEach((stats) => {
        increaseNums(stats);
      });
    }
    started = true;
  }

  if (window.scrollY >= skillsSection.offsetTop) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

const body = document.querySelector("body"),
  toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.classList.toggle("active");
  if (!body.classList.contains("dark")) {
    return window.localStorage.setItem("mode", "light");
  }
  window.localStorage.setItem("mode", "dark");
});
if (getMood && getMood === "dark") {
  body.classList.add("dark");
  toggleBtn.classList.add("active");
}

const loginBtnInBlog = document.querySelector(".login-btn ");
loginBtnInBlog.addEventListener("click", function () {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.cssText =
    "position: absolute; width:100%; height:100%; top: 50%;left: 50%; transform: translate(-50%,-50%); font-size: 50px; background-color: #ffffff52; padding: 20px; pointer-events: none; letter-spacing: 1px; z-index: 10;";
  const p = document.createElement("p");
  p.style.cssText =
    "position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); ";
  p.appendChild(document.createTextNode("Soon ... 😀"));
  popup.appendChild(p);
  let el = body.appendChild(popup);
  setTimeout(() => {
    el.remove();
    window.open("../Html/login.html");
  }, 2000);
});

foEvents("Dec 31 ,2023 23:59:59");

const pageRoot = document.documentElement;
const scrollBar = document.querySelector(".scroll-bar");
const pageHeight = pageRoot.scrollHeight - pageRoot.clientHeight;
window.addEventListener("scroll", (_) => {
  scrollBar.style.width = `${(pageRoot.scrollTop / pageHeight) * 100}%`;
});

const spikes = document.querySelectorAll(".spikes");
if (body.classList.contains("dark")) {
  spikes.forEach((spike) => {
    spike.remove();
  });
}

const copyrightYear = new Date().getFullYear();
document.querySelector(".copyright-year").textContent = copyrightYear;
