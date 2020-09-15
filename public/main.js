/*let NumberOfCupsOfCoffee = 2
let fullname = "Byron"
const message = `My name is ${fullname} and i drink ${NumberOfCupsOfCoffee} cups of coffee every day.`
console.log(message)



const username = window.prompt (`What is your name`)
const greeting = `Nice to Meet you ${username}`
console.log(greeting)*/

/*const FirstNumber = window.prompt (`choose your first number`)
const firstOperand = parseFloat(FirstNumber)
const SecondNumber = window.prompt (`choose your Second number`)
const SecondOperand = parseFloat(SecondNumber)

const sum = firstOperand + SecondOperand
const difference = firstOperand - SecondOperand
const product = firstOperand * SecondOperand
const remainder = firstOperand % SecondOperand
const values = ` if you add ${firstOperand} and ${SecondOperand} you get ${sum} there difference is ${difference}
when multiplied you get ${product} and has a remainder of ${remainder}`
console.log(values)*/




const numbers = [24, 17,	95,	21, 93]

let smallest = numbers[0];

for (let index = 0; index < numbers.length; index++){
    if (numbers[index] <= smallest) {
        smallest = numbers[index];
    }
}



console.log(smallest);





/*let largest = numbers[0];

for (let index = 0; index < numbers.length; index++){
    if (numbers[index] >= largest) {
        largest = numbers[index];
    }
}



console.log(largest);*/

let sum = 0
for (let index = 0; index < numbers.length; index++) {

  const add = numbers[index]
  sum = sum + add
}
//console.log(sum)


const average = sum/ numbers.length
console.log(average)
