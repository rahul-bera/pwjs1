const email=""
//const newemail=Boolean(email)
//Q---->if email is present ask for passwords,otherwise ask for emails

// if(email=="rahul@google.com"){
//     console.log("Give me password");
// }else{
//     console.log("Give me your email");
// }

// //2nd Process----------->>
// if(email!=""){
//     console.log("please enter a password");
// }else{
//     console.log("give me your email")
// }

//3rd process--->>
if(email){
    console.log("please enter the password");
}else{
    console.log("Give me your email");
}
/*truthy And falsy values are following:-

falsy---->>
0
""
NaN
undefined
null
        except these all values are truthy values-
*/

//if user provides email,passwords,then allow log in,else ask for it

const newemail=""
const password=0

// if(newemail && password){
//     console.log("allow log in");
// }else{
//     console.log("Ask it");
// }

if(newemail){
    if(password){
        console.log("allow log in");    
    }else{
        console.log("please enter the password");
    }
}else{
    console.log("please enter your email");
}

//Q-->Allow user to sign in with google or github---
const googleIntoken=""
const githubIntoken=""

// if(googleIntoken || githubIntoken){
//     console.log("Welcome to apps");
// }else{
//     console.log("Please log in to your account");
// }


// Example of Ternary Operator-->

const p=googleIntoken|| githubIntoken ? "Welcome to apps" : "Please log in to your account"
console.log(p);



