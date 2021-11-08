let sectionContainer = document.getElementById("background-colors");
let divArray = sectionContainer.getElementsByTagName("div");

function hideContainer(){
    Array.from(divArray).forEach((element, index) => {
        //console.log(element+index) 
        element.addEventListener("click", () => element.style.visibility = "hidden");
    });

}
hideContainer();

let bottonRemove=document.getElementById("remove");
let parentParagraph = document.getElementById("parent");
let spanArray = parentParagraph.getElementsByTagName("span");


bottonRemove.addEventListener("click", () => {
    parentParagraph.style.display="none";
    let sectionPadre = document.getElementById("letter-colors");
    let divNode = document.createElement("div");
    sectionPadre.appendChild(divNode);
    Array.from(spanArray).forEach((element, index) => {
        setTimeout(() => divNode.appendChild(element), 1000+index*1000);
    });

}); 

