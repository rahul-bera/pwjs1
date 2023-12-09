//If score hits 5,don't print after that
let username="Rahul";
for(let score=1;score<=10;score++){
    if(score==5){
        // break;
        continue;
    }
    console.log(`The score is ${score}`);

    console.log(username);
    
}

