

let a =10;
let b=20;
let c=30;

if(a>b && a>c){
    console.log(`${a} is greater than ${b} and ${c}`)
}
else if(b>c && b>a){
    console.log(`${b} is greater than ${a} and ${c}`)
}
else{
    console.log(`${c} is greater than ${a} and ${b}`)
}

// -- Switch
const day = "monday"

switch (day) {
    case "monday":
        console.log("Its Monday");
        break;
    case "tuesday":
        console.log("Its Monday");
        break;
    case "wednesday":
        console.log("Its Monday");
        break;

    default:
        break;
}

// -- Terinary

const age = 20;

const message = age>18 ? (age>30 ? "Not a child":"You are in school" ): "Not elgible";

console.log(message);