let PreviewButton = document.querySelectorAll('[data-websiteimage]');
let externallink = document.querySelectorAll('[data-button=external]');
let contain = []


for (let l = 0; l < PreviewButton.length; l++) {

        PreviewButton[l].addEventListener("click", () => {
    
            let thehref = PreviewButton[l].getAttribute("href");
            contain.push(thehref);

          window.location.href= `${thehref}`
          
          })}     



  for (let j = 0; j < externallink.length; j++) {
  externallink[j].addEventListener("click", (event) => {
    console.log(externallink[j])

       let thehref = externallink[j].getAttribute("href");
//    console.log(thehref)
    window.open(thehref)

           })}