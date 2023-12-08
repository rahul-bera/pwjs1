//build a rating system for pizzahut

//1 star--poor
//2 star--okk
//3---average
//4--cool
//5--great
//6--awesome
//7--nailed it

let ratestar="9"
let rating=parseInt(ratestar)


switch(rating){
    case 1:
         console.log("poor");
         break;
    case 2: 
        console.log("okk");
        break;
    case 3: 
        console.log("average");
        break;
    case 4: 
        console.log("cool");
        break;
    case 5: 
        console.log("great");
        break;
    case 6: 
        console.log("awesome");
        break;
    case 7: 
        console.log("nailed it");
        break; 
    default:
        console.log("press the right one"); 
}
