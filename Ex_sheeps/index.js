let list = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
]
let render = document.getElementById("app");

let i = 0;
let result = 0; 

function countSheeps(){
    list.forEach((sheep) => {
        if (sheep == true) {
            result = result + 1; 
            console.log (result);
        
        }
        
    });
    console.log(`En total hay ${result} ovejas`)
}    


countSheeps();
    


