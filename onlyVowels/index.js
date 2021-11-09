let text = document.getElementById("frase");
let renderResult = document.getElementById("result");
let frase = (text.outerText).toLowerCase();
let arrResult = [];
let vowels = [];



function getVowels() {
    vowels = frase.match(/[aeiou]/gi);
    console.log(vowels);

}

getVowels();

function deleteDuplicateVowels() {
    arrResult = vowels.filter((elemento, index) => vowels.indexOf(elemento) === index);
    console.log(arrResult);
    }
deleteDuplicateVowels();

function renderVowels(){
    renderResult.innerHTML = `Las vocales encontrados son ${arrResult}`;
}

renderVowels();
