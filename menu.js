//Link to other pages.

const html = document.documentElement;

const widths = window.innerWidth;
const title = document.getElementById("title");
const holder = document.getElementById("burgerholder");
const hamburger = document.getElementById("hamburger");
let ContainMenu = document.querySelector('[data-menustate="default"]');
let ContainMenuId = document.getElementById("ContainMenu");
let ContainMenuChildren = ContainMenu.children;
let heropadding = document.getElementById("header").clientHeight;

const section = document.querySelectorAll("[data-subheader]");
let MenuButton = document.querySelectorAll('[data-button="defaultmenuitem"]');

//onloading

addEventListener("load", (event) => {
  if (widths > 768) {
    ContainMenuId.setAttribute("data-menustate", "responsive");
    ContainMenuId.classList.remove("header__defaultmenu--wrapper");
    ContainMenuId.classList.add("header__responsivemenu--wrapper");

    for (let i = 0; i < MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "responsivemenuitem");
      MenuButton[i].classList.remove("header__defaultmenu--item");
      MenuButton[i].classList.add("header__responsivemenu--item");
    }

    for (let i = 0; i < ContainMenuChildren.length; i++) {
      ContainMenuChildren[i].setAttribute("data-button", "responsivemenuitem");
    }
  }
});

//on resizing

addEventListener("resize", (event) => {
  const widths = window.innerWidth;
  if (widths > 768) {
    ContainMenuId.setAttribute("data-menustate", "responsive");
    ContainMenuId.classList.remove("header__defaultmenu--wrapper");
    ContainMenuId.classList.add("header__responsivemenu--wrapper");
    ContainMenuId.classList.remove("menuclassenter");
    hamburger.classList.remove("show");
    ContainMenuId.classList.remove("menuclassexit");

    for (let i = 0; i < MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "responsivemenuitem");
      MenuButton[i].classList.remove("header__defaultmenu--item");
      MenuButton[i].classList.add("header__responsivemenu--item");
    }
  } else if (ContainMenu.classList.contains("menuclassenter")) {
    ContainMenu.classList.remove("header__hefaultmenu--wrapper");
  } else {
    ContainMenu.setAttribute("data-menustate", "default");
    ContainMenu.classList.remove("header__responsivemenu--wrapper");
    ContainMenu.classList.add("header__defaultmenu--wrapper");

    for (let i = 0; i <= MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "defaultmenuitem");
      MenuButton[i].classList.remove("header__responsivemenu--item");
      MenuButton[i].classList.add("header__defaultmenu--item");
    }
  }
});

//clicking the burger

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");

  if (
    !ContainMenu.classList.contains("menuclassenter") &&
    !ContainMenu.classList.contains("menuclassexit")
  ) {
    ContainMenu.classList.add("menuclassenter");
  }

  if (
    ContainMenu.classList.contains("header__defaultmenu--wrapper") ||
    ContainMenu.classList.contains("menuclassexit")
  ) {
    ContainMenu.classList.remove("header__defaultmenu--wrapper");
    ContainMenu.classList.remove("menuclassexit");
    ContainMenu.classList.add("menuclassenter");
  } else if (ContainMenu.classList.contains("menuclassenter")) {
    ContainMenu.classList.add("menuclassexit");
    ContainMenu.classList.remove("menuclassenter");

    document.getElementById("hamburger").style.width = "";
  }
});

//click a menubutton




// for (let l = 0; l < MenuButton.length; l++) {
//   MenuButton[l].addEventListener("click", (evt) => {
  
  
//     if (widths > 491) {
//       Responsivescroll(evt);
//     } else {
//       Defaultscroll(evt);
//     }
//   });
// }








MenuButton.addEventListener("click", (evt) => {
  document.getElementById("hamburger").classList.toggle("show");
  ContainMenu.classList.add("menuclassexit");
  ContainMenu.classList.remove("menuclassenter");
});

if (MenuButton[0]) {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

for (let l = 1; l < MenuButton.length; l++) {
  MenuButton[l].addEventListener("click", (evt) => {
    //let thetarget = section[l];
    console.log("Menubutton");

    let thetarget = MenuButton[l];
    console.log(thetarget);

    if (widths > 768) {
      Responsivescroll(evt, thetarget);
    } else {
      Defaultscroll(evt, thetarget);
    }
  });
}

// hamburger.classList.toggle("show");

function getElementPositionRelativeToDocument(thetarget) {
  let rect = thetarget.getBoundingClientRect();
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let topRelativeToDocument = rect.top + scrollTop;
  return topRelativeToDocument;
}

function Defaultscroll(evt, thetarget) {
  document.getElementById("hamburger").classList.toggle("show");
  ContainMenu.classList.add("menuclassexit");
  ContainMenu.classList.remove("menuclassenter");

  evt.preventDefault();

  let topRelativeToDocument = getElementPositionRelativeToDocument(thetarget);

  console.log(`${thetarget} is the target`);
  console.log(`${topRelativeToDocument} is the toprelativetodocument`);
  let offsetPosition = topRelativeToDocument - heropadding; //+ 50;
  console.log(`${heropadding} is the heropadding`);
  console.log(`${offsetPosition} is the offsetposition`);
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  topRelativeToDocument = "";
  offsetPosition = "";
}

function Responsivescroll(evt, thetarget) {
  evt.preventDefault();

  let topRelativeToDocument = getElementPositionRelativeToDocument(thetarget);

  let offsetPosition = topRelativeToDocument - heropadding - 100;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  offsetPosition = "";
}

title__lightmode = false;
