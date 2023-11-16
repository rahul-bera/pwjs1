// String to boolean conversion----------->>
let bankbalance='100'
let bankbalanceinInt=Boolean(bankbalance)

let bonus=''
let bonus_num=Boolean(bonus)

console.log(bonus)
console.log(bonus_num)//This will be false because any zero value inside a string should be false-->>
console.log(typeof bonus_num)


console.log(bankbalance)
console.log(bankbalanceinInt) //any non-zero value inside a string is True-----

console.log(typeof bankbalanceinInt)