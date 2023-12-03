const userobjects={
    username: "hc",
    name: "Hitesh",
    "First Name": "RAHUL",
    age: 20,
    isadmin: false,
    isLoggedin: true,
    address:{
        city: "Kumarpur",
        state: "WB",
    }
}

console.log(Object.keys(userobjects));// It prints all the keys of userobjects--->>
console.log(Object.values(userobjects));//It prints all the values of userobjects--->>

//Another Way we can write this----->>>
console.log(Object.entries(userobjects));//it prints values and keys together


