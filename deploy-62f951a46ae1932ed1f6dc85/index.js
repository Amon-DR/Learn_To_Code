// const { useDebugValue } = require("react");

const btn = document.getElementById("btn_click");
const color_num = document.getElementById("Color_num");
const color_box = document.getElementById("box_size");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function dog() {
  btn.addEventListener("click", function () {
    let randomR = Math.floor(Math.random() * 256);
    randomR = randomR.toString();

    let randomG = Math.floor(Math.random() * 256);
    randomG = randomG.toString();

    let randomB = Math.floor(Math.random() * 256);
    randomB = randomB.toString();

    let picker = `RGB(${randomR}, ${randomG},${randomB})`;
    color_box.style.backgroundColor = picker;

    color_num.textContent = picker;
  });
}

function cat() {
  btn.addEventListener("click", function () {
    let picker = "#";

    for (let index = 0; index < 6; index++) {
      let random = Math.floor(Math.random() * 16);
      picker += hex[random];
    }
    color_box.style.backgroundColor = picker;

    color_num.textContent = picker;
  });
}
let hex_btn = document.getElementById("hex_btn");
hex_btn.addEventListener("click", function () {
  cat();
});
let rgb_btn = document.getElementById("rgb_btn");
rgb_btn.addEventListener("click", function () {
  dog();
});
dog();

// Project Two I just don't feel like making this into different files
let count_track = 0;
const counter = document.querySelector("#counter");
const btns_P2 = document.querySelectorAll(".btn");

btns_P2.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count_track--;
    } else if (styles.contains("increase")) {
      count_track++;
    } else {
      count_track = 0;
    }

    if (count_track > 0) {
      counter.style.color = "green";
    }
    if (count_track < 0) {
      counter.style.color = "red";
    }
    if (count_track === 0) {
      counter.style.color = "black";
    }

    counter.textContent = count_track;
  });
});
// Project Three
const reviews = [
  {
    id: 1,
    name: "kittens",
    img: "./cat-551554_960_720.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ullam. Iusto nostrum animi eum!",
  },
  {
    id: 2,
    name: "sunny",
    img: "./cat-2934720_960_720.webp",
    text: "Lorem ipsum dolor similique eveniet dolores numquam, eos iste? Repudiandae nisi esse incidunt minus enim.",
  },
  {
    id: 3,
    name: "chicken",
    img: "./cocker-spaniel-2785074_960_720.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea harum provident soluta. In ipsum odit quaerat rem quasi!",
  },
];
const person = document.getElementById("person");
const author = document.getElementById("author");
// const job = document.getElementById("job")
const info = document.getElementById("info");

const back_btn = document.querySelector(".back");
const forward_btn = document.querySelector(".forward");
const justpick_btn = document.querySelector("#justpick");

let current_P3 = 0;

window.addEventListener("DOMContentLoaded", function () {
  showperson(current_P3);
});
function showperson(Person) {
  const item_p3 = reviews[Person];
  person.src = item_p3.img;
  author.textContent = item_p3.name;
  info.textContent = item_p3.text;
}

back_btn.addEventListener("click", function () {
  current_P3++;

  if (current_P3 > reviews.length - 1) {
    current_P3 = 0;
  }
  showperson(current_P3);
});
forward_btn.addEventListener("click", function () {
  current_P3--;

  if (current_P3 < 0) {
    current_P3 = reviews.length - 1;
  }

  showperson(current_P3);
});
justpick_btn.addEventListener("click", function () {
  current_P3 = Math.floor(Math.random() * reviews.length);

  showperson(current_P3);
});
// Project 4 Navbar
const navToggle = document.querySelector(".navToggle");
const links_p3 = document.querySelector(".links_p3");

navToggle.addEventListener("click", function () {
  // if (links_p3.classList.contains("link_show_p3")) {
  //   links_p3.classList.remove("link_show_p3")

  // } else {
  //   links_p3.classList.add("link_show_p3")
  // }
  links_p3.classList.toggle("link_show_p3");
});
// Project 4 end
// Project 5

const navToggle_p5 = document.getElementById("navToggle_p5");
const nav_p5 = document.querySelector(".nav_p5");
const x_p5 = document.getElementById("x_p5");

navToggle_p5.addEventListener("click", function () {
  nav_p5.classList.toggle("show_nav_p5");
});
x_p5.addEventListener("click", function () {
  nav_p5.classList.toggle("show_nav_p5");
});
// Project 6
const open_btn_p6 = document.getElementById("open_btn_p6");
const x_p6 = document.querySelector(".x_p6");
const overlay_p6 = document.querySelector(".overlay_p6");

open_btn_p6.addEventListener("click", function () {
  overlay_p6.classList.toggle("overlay_show_p6");
});
x_p6.addEventListener("click", function () {
  overlay_p6.classList.toggle("overlay_show_p6");
});
// Project 7
// const btn_p7 = document.querySelectorAll(".btn_p7");
// const section_p7 = document.querySelector(".section_open_p77");

// btn_p7.forEach(function(btn){
//   btn.addEventListener("click",function(e){
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle("sec_p7")
//   })
// })
// Project 8
const p8 = [
  {
    id: 1,
    title: "Cake",
    category: "Dessert",
    price: "19.99",
    img: "./images/image_p8/cake-1850011__340.jpg",
    desc: "r in reprehenderit in voluptate velit esse ",
  },
  {
    id: 2,
    title: "Cake",
    category: "Dessert",
    price: "19.00",
    img: "./images/image_p8/cake-1971552__340.webp",
    desc: "m ipsum dolor sit amet, consectetur adipiscin",
  },
  {
    id: 3,
    title: "Coffe",
    category: "Lunch",
    price: "20.99",
    img: "./images/image_p8/coffee-842020__340.webp",
    desc: "t non proident, sunt in culpa qui officia deserunt",
  },
  {
    id: 4,
    title: "?",
    category: "Breakfast",
    price: "9.99",
    img: "./images/image_p8/pancakes-2020863__340.webp",
    desc: "didunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    id: 5,
    title: "pizza",
    category: "Lunch",
    price: "123.99",
    img: "./images/image_p8/pizza-3010062__340.webp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscin",
  },
  {
    id: 6,
    title: "salmon",
    category: "Lunch",
    price: "19.99",
    img: "./images/image_p8/salmon-518032__480.jpg",
    desc: "voluptate velit esse cillum dolore eu fugiat ",
  },
];

const section_p8 = document.querySelector(".content_p8");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = p8.map(function (item) {
    displayMenuItems(p8);
  });
});

function displayMenuItems(Menuitemsp8) {
  let displayMenu = Menuitemsp8.map(function (item) {
    return ` 
  
 <div class="food_p8">
          <img class="ifood" src=${item.img} alt=""><img />
          <div class="l_p8">
            <h2 class="title_p8">${item.title}</h2>
            <h3 class="price_p8">${item.price}</h3>
            <div class="underline2_p8"></div>
            <p class="meal_p8">${item.desc} </p>
          </div>
        </div>
  
 `;
  });
  displayMenu = displayMenu.join("");
  section_p8.innerHTML = displayMenu;
}
// Project 9
const btn_p9 = document.getElementById("btn_p9");

const vid_p9 = document.querySelector("#vid_p9");
let TF = true;

btn_p9.addEventListener("click", function () {
  if (TF) {
    vid_p9.pause();
    TF = false;
  } else {
    vid_p9.play();
    TF = true;
  }
});
const loader = document.querySelector(".loaderp");
window.addEventListener("load", function () {
  loader.classList.add("loaderp8");
});
