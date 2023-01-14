let added = document.querySelectorAll(".added_cards");

let number = document.getElementById("_cardscount");

let tablinks = document.querySelectorAll(".tablinks");

tablinks.forEach((tablink) => {
  tablink.addEventListener("click", function () {
    tablinks.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.getElementById("fullpage").classList.toggle("dark");
  document.getElementById("searchform").classList.toggle("dark");
  document.getElementById("searchcontainer").classList.toggle("dark");
  document.getElementById("sidenav").classList.toggle("dark");
  document.getElementById("Show_more").classList.toggle("dark");
  document.getElementById("Show_less").classList.toggle("dark");
  // added js
  document.querySelector(".ui-text").classList.toggle("dark");
  document.querySelector(".select").classList.toggle("dark");
  document.querySelector(".menus li").classList.toggle("dark");
  document.querySelector(".caret").classList.toggle("dark");

  document.getElementById("selected").classList.toggle("dark");
  document.getElementById("menus").classList.toggle("dark");

  let fliterText = document.querySelectorAll(".fliter-text");
  for (let i = 0; i < fliterText.length; i++) {
    fliterText[i].classList.toggle("dark");
  }
  let fliterIcon = document.querySelectorAll(".fa-filter");
  for (let i = 0; i < fliterIcon.length; i++) {
    fliterIcon[i].classList.toggle("dark");
  }

  let active = document.querySelectorAll(".active");
  for (let i = 0; i < active.length; i++) {
    active[i].classList.toggle("dark");
  }
  let tablink = document.querySelectorAll(".tablinks.active");
  for (let i = 0; i < tablink.length; i++) {
    tablink[i].classList.toggle("dark");
  }
  let filtertab = document.querySelectorAll(".filter-tabs-text.active");
  for (let i = 1; i < filtertab.length; i++) {
    filtertab[i].classList.toggle("dark");
  }

  let filtertabs = document.querySelectorAll(".filter-tabs-text");
  for (let i = 1; i < filtertabs.length; i++) {
    filtertabs[i].classList.toggle("dark");
  }

  let dropdown = document.querySelectorAll(".menu");
  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].classList.toggle("dark");
  }

  let filter = document.querySelectorAll(".directorate-text");
  for (let i = 0; i < filter.length; i++) {
    filter[i].classList.toggle("dark");
  }
  let check = document.querySelectorAll(".check-label");
  for (let i = 0; i < check.length; i++) {
    check[i].classList.toggle("dark");
  }

  document.body.classList.toggle("dark");
  tablinks.forEach((tablink) => {
    tablink.classList.toggle("dark");
  });

  let img = document.getElementById("logoimg").src;

  if (img.indexOf("image/First-Bank.png") != -1) {
    document.getElementById("logoimg").src = "image/First-Bankdark.png";
  } else {
    document.getElementById("logoimg").src = "image/First-Bank.png";
  }
});

// Close and Open Nav
let sidebar = document.getElementById("sidenav");
let close = document.getElementById("closein");
let open = document.getElementById("menu");

close.addEventListener("click", () => {
  sidebar.style.display = "none";
});

open.addEventListener("click", () => {
  sidebar.style.display = "block";
});

// Show all card / less card
let ShowAll = document.getElementById("Show_more");
let heightChange = document.getElementById("all_cards");
let hiddenCards = document.querySelectorAll(".addtional_cards");
let HideAll = document.getElementById("Show_less");

for (let i = 0; i < hiddenCards.length; i++) {
  hiddenCards[i];
  console.log(hiddenCards.length);
  ShowAll.addEventListener("click", () => {
    hiddenCards[i].style.height = "100%";

    heightChange.style.height = 100 + "%";
    ShowAll.style.display = "none";
    HideAll.style.display = "block";
  });
  HideAll.addEventListener("click", () => {
    hiddenCards[i].style.height = "80vh";

    ShowAll.style.display = "block";
    HideAll.style.display = "none";
  });
}

for (let i = 0; i < added.length; i++) {
  console.log(added[i].length);
  console.log((number.textContent = added.length - 8));
  if (added.length <= 8) {
    document.querySelector(".button").style.display = "none";
    hiddenCards[i].style.height = "100%";
  }
}
for (let i = 0; i < added2.length; i++) {
  console.log(added2[i].length);
  console.log((number2.textContent = added2.length));
}

// function search() {
//   let filter = document.getElementById("search_input").value.toUpperCase();
//   let cards = document.querySelectorAll(".cards_container");
//   let view = document.querySelectorAll("._card-bottom-text");
//   for (let i = 0; i < view.length; i++) {
//     let a = cards[i].querySelectorAll("._card-bottom-text")[0];
//     let value =  a.innerText || a.textContent;
//     if (value.toUpperCase().indexOf(filter) > -1) {
//       cards[i].style.display = " ";
//     } else {
//       cards[i].style.display = "none";

//     }
//   }
//   console.log(filter);
// }

// xbtn[x].style.opacity = 1;
//       xbtn[x].style.display = "block";
//       xbtn[x].addEventListener("click", function () {
//         diretorate[i].classList.remove("chossen");
//         xbtn[x].style.opacity = 0;
//         xbtn[x].style.display = "none";

//         console.log(xbtn);
