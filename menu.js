//Link to other pages.




const widths = window.innerWidth;
const title = document.getElementById("title");
const holder = document.getElementById("burgerholder");
const hamburger = document.getElementById("hamburger");
let ContainMenu = document.querySelector('[data-menustate="default"]');
let ContainMenuId = document.getElementById("ContainMenu");
let ContainMenuChildren = ContainMenu.children;
let heropadding = document.getElementById("header").clientHeight;
const section = document.querySelectorAll("[data-subheader");
let MenuButton = document.querySelectorAll('[data-button="defaultmenuitem"]');


const btn = document.getElementsByClassName("themebutton");
const theme = document.querySelector("#themelink")



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
    hamburger.classList.remove("show")
    ContainMenuId.classList.remove("menuclassexit");


    for (let i = 0; i < MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "responsivemenuitem");
      MenuButton[i].classList.remove("header__defaultmenu--item");
      MenuButton[i].classList.add("header__responsivemenu--item");
    }


  } 
  
  
  else if(ContainMenu.classList.contains('menuclassenter')) {

ContainMenu.classList.remove('header__hefaultmenu--wrapper')
  }

  
  else {
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
    console.log("test1")
  }

  if (
    ContainMenu.classList.contains("header__defaultmenu--wrapper") ||
    ContainMenu.classList.contains("menuclassexit")
  ) {
    ContainMenu.classList.remove("header__defaultmenu--wrapper");
    ContainMenu.classList.remove("menuclassexit");
    ContainMenu.classList.add("menuclassenter");
    console.log("test2")

  } else if (ContainMenu.classList.contains("menuclassenter")) {
    console.log("test3");
    ContainMenu.classList.add("menuclassexit");
    ContainMenu.classList.remove("menuclassenter");

    document.getElementById("hamburger").style.width = "";
  }
});



//click a menubutton


for (let l = 0; l < MenuButton.length; l++) {
  MenuButton[l].addEventListener("click", (evt) => {
  console.log(evt)
  
    if (widths > 768) {
      Responsivescroll(evt);
    } else {
      Defaultscroll(evt);
    }
  });
}






function getElementPositionRelativeToDocument(evt) {
  console.log(evt);
  let rect = evt.getBoundingClientRect();
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let topRelativeToDocument = rect.top + scrollTop;
  //console.log(`${topRelativeToDocument} is the toprelativetodocument`);
  return topRelativeToDocument;
}




function Defaultscroll(evt) {


  document.getElementById("hamburger").classList.toggle("show");
  ContainMenu.classList.add("menuclassexit");
  ContainMenu.classList.remove("menuclassenter");


  for (let k = 0; k < MenuButton.length; k++) {
   evt.preventDefault();
   MenuButton[k].addEventListener("click", (event) => {
     let topRelativeToDocument = getElementPositionRelativeToDocument(
       section[k]
     );
     let offsetPosition = topRelativeToDocument - heropadding - 100; 
     console.log(
       `offsetposition ${offsetPosition}  is ${heropadding} minus ${topRelativeToDocument}`
     );
     window.scrollTo({ top: offsetPosition, behavior: "smooth" });
   });
 }



}






count = 0;


function Responsivescroll(evt) {
 //for (let k = 0; k < MenuButton.length; k++) {
   evt.preventDefault();
   //MenuButton[k].addEventListener("click", (event) => {
console.log(evt)
    let topRelativeToDocument = getElementPositionRelativeToDocument(
       section[k]
     );
     let offsetPosition = topRelativeToDocument - heropadding - 100; 
     //console.log(
      // `offsetposition ${offsetPosition}  is ${heropadding} minus ${topRelativeToDocument}`
     //)/;
     window.scrollTo({ top: offsetPosition, behavior: "smooth" });
     count += 1;
     console.log(count);
     
    
    //}
    //);
 }
//}















// addEventListener("load", (event) => {
//     if (widths > 768) {
//       ContainMenuId.setAttribute("data-menustate", "responsive");
//       ContainMenuId.classList.remove("header__defaultmenu--wrapper");
//       ContainMenuId.classList.add("header__responsivemenu--wrapper");
  
//       for (let i = 0; i < MenuButton.length; i++) {
//         MenuButton[i].setAttribute("data-button", "responsivemenuitem");
//         MenuButton[i].classList.remove("header__defaultmenu--item");
//         MenuButton[i].classList.add("header__responsivemenu--item");
//       }
  
//       for (let i = 0; i < ContainMenuChildren.length; i++) {
//         ContainMenuChildren[i].setAttribute("data-button", "responsivemenuitem");
//       }
  
//     }
//   });
  
//   addEventListener("resize", (event) => {
//     const widths = window.innerWidth;
//     if (widths > 768) {
//       ContainMenuId.setAttribute("data-menustate", "responsive");
//       ContainMenuId.classList.remove("header__defaultmenu--wrapper");
//       ContainMenuId.classList.add("header__responsivemenu--wrapper");
//       ContainMenuId.classList.remove("menuclassenter");
//       hamburger.classList.remove("show")
//       ContainMenuId.classList.remove("menuclassexit");
  
  
//       for (let i = 0; i < MenuButton.length; i++) {
//         MenuButton[i].setAttribute("data-button", "responsivemenuitem");
//         MenuButton[i].classList.remove("header__defaultmenu--item");
//         MenuButton[i].classList.add("header__responsivemenu--item");
//       }
  
  
//     } 


  
//   else if(ContainMenu.classList.contains('menuclassenter')) {

// ContainMenu.classList.remove('header__defaultmenu--wrapper')
//   }

  
//   else {
//     ContainMenu.setAttribute("data-menustate", "default");
//     ContainMenu.classList.remove("header__responsivemenu--wrapper");
//     ContainMenu.classList.add("header__defaultmenu--wrapper");


//     for (let i = 0; i <= MenuButton.length; i++) {
//       MenuButton[i].setAttribute("data-button", "defaultmenuitem");
//       MenuButton[i].classList.remove("header__responsivemenu--item");
//       MenuButton[i].classList.add("header__defaultmenu--item");
//     }
//   }
// });






 //   for (let l = 0; l < MenuButton.length; l++) {
   //   MenuButton[l].addEventListener("click", (evt) => {
     //
      //    let thehref = MenuArray[l].getAttribute("href");
//          contain.push(thehref);
  //       console.log(seccuss3)
    //    console.log(MenuArray)
      //        MenuArray[l].addEventListener("click", (evt) => {
        //        let thehref = MenuArray[l].getAttribute("href");
          //  console.log(thehref)
              // let hrefslice = thehref.slice(1);
            //    window.location.href = `${hrefslice}.html`;
              //  contain = []
            
      
        //});
    
      //})}  
    
    
    


  





// //Trigger dropdown menu.
//  function hamburger() {
//      var show = document.getElementById("dropdowncontent")

//      if (show.style.display == "none") {
//          show.style.display = "flex"}
//      else { show.style.display = "none"}
    
//  }

// //})