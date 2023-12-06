let score=100
let life=3
let bullets=1000

if(score>99){
    console.log("You gain a life");
    score=score-100;
    life=life+1;
     let bullets=2000;
    console.log(`Your bullets are ${bullets}`);
}else{
    console.log("You didn't get a life");
}

console.log(`your score is ${score} and my life is ${life} and bullets ${bullets}`);