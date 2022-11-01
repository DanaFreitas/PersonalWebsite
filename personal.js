//Link to other pages.
function github() {
    window.open("https://github.com/DanaFreitas")
}

function linkedin() {
    window.open("https://www.linkedin.com/in/dana-freitas-69ab7298/")
}

function dribbble() {
    window.open("https://dribbble.com/DanaFreitas")
}


function minimuseum() {
    window.open("https://mrsmasonminimuseum.com/")
}

function collatz() {
    window.open("https://thecollatzconjecture.com/")
}

function sql() {
    window.open("https://github.com/DanaFreitas/SQL_Database")
}

function node() {
window.open("https://danafreitasnodejsfinal.herokuapp.com/")
}




function minimuseumgithub() {
    window.open("https://github.com/DanaFreitas/MiniMuseum")
}

function collatzgithub() {
    window.open("https://github.com/DanaFreitas/CollatzConjecture")
}

function nodegithub() {
window.open("https://github.com/DanaFreitas/node.js")
}



//Toggle daymode/nightmode.
const btn = document.querySelector("#themebutton");
const theme = document.querySelector("#themelink")

btn.addEventListener("click", function()
{ if (theme.getAttribute("href") == "personal.css"){
    theme.href="personallight.css";
    document.getElementById('themebutton').innerHTML= "Click for nightmode."
} else {

    theme.href = "personal.css";
    document.getElementById('themebutton').innerHTML= "Click for daymode."

}

});




//Toggle daymode/nightmode.
const btn2 = document.querySelector("#themebutton2");

btn2.addEventListener("click", function()
{ if (theme.getAttribute("href") == "personal.css"){
    theme.href="personallight.css";
    document.getElementById('themebutton2').innerHTML= "Click for nightmode."
} else {

    theme.href = "personal.css";
    document.getElementById('themebutton2').innerHTML= "Click for daymode."

}

});

//Trigger dropdown menu.
function hamburger() {
    var show = document.getElementById("dropdowncontent")

    if (show.style.display == "none") {
        show.style.display = "flex"}
    else { show.style.display = "none"}
    
}

