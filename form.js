const theform = document.getElementById("theform")
const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => { 
    event.preventDefault();
    console.log("Success")
 theform.reset();
}
)