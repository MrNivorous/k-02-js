let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

// 20301

const reverseWords = (words) => {
	return words.split("").reverse().join("").split(" ").reverse().join(" ")
}
console.log(reverseWords(phrase))

// 20302

// const convertPrices = (array) => {
// 	for (let i = 0; i <= array.length; i++) {
// 		return i.slice(0,1)
// 	}
// }
// console.log(convertPrices(prices))

// 20303

const palindromes = (word) => {
	let newArray = word.filter(n => {
		if (n === n.split('').reverse().join('')) {
			return n
		}
	})
	return newArray
	}
console.log(palindromes(names))

// 20304

const getRomans = (x, arr) => {
	let output = ''
	let i = 0
	while (i < arr.length){
		if (x >= arr[i].v) {
			x -= arr[i].v
			output += arr[i].s
		} else {
			i++
		}
	}
	return output
}


// 20305
const fizzBuzz = () => {
	for (var i=1; i < 21; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
	}
}

fizzBuzz()

// 20306

const a = (number1, number2) => {
	return number1 + number 2
}

const b = (function1(param1,param2),number1, number2,number3 )
