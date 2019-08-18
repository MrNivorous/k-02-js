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
	// for (var i = 0; i < word.length; i++) {
	// if (word === word.reverse()) {
	// 	return word
	// }
	// }
	let newArray = word.filter(n => {
		if (n === n.split('').reverse().join('')) {
			return n
		}
	})
	return newArray
	}

console.log(palindromes(names))
