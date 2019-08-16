let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

const roundNumber = (number) => {
	return Math.round(number)
}

console.log(roundNumber(3.14))

const roundPrices = (array) => {
 	return array.map(n => {
	return {
		name: n.name,
		price: 	Math.round(n.price)
	}}
	)
}
console.log(roundPrices(products))

// const roundParamaters = (number, decimals) => {
// 	 return number.toFixed(decimals)
// }
// console.log(roundParamaters(3.155666, 4))

const roundParamaters = (number, decimals) => {
	 return Math.round(number*Math.pow(10,decimals))/(Math.pow(10,decimals))
}
console.log(roundParamaters(3.155666, 2))

const power = (number1, number2) => {
	return Math.pow(number1, number2)
}
console.log(power(2, 4))

const random1to10 = () => {
	return Math.random() * 10
}
console.log(random1to10())

const randomNumberGenerator = (parameter) => {
	return Math.random() * parameter + 1
}
console.log(randomNumberGenerator(100000))
