let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']


const logNumbers = (n) => {
	n.forEach(x => {
	console.log(x)
})
}

logNumbers(numbers)

const logNames = (names) => {
	names.forEach(n => {
	console.log(n.name)
})
}

logNames(students)

const add1 = (n) => {
	let newNumbers = n.map(n =>
	    n + 1)
	 return newNumbers
}

let newNumbersArray = add1(numbers)
console.log(newNumbersArray)

const mapNames = (name) => {
		return name.map(n => n.name
	)
}
console.log(mapNames(students))

const filter22 = (num) => {
	let newFilter = num.filter(n =>
		n >= 22
		)
	return newFilter
}
console.log(filter22(newNumbersArray))

const greaterParameter = (array, value) => {
	let greaterNumbers = array.filter(n =>
		n > value
		)
	return greaterNumbers
}
console.log(greaterParameter(numbers, 70))

const filterName = (x) => {
 return	x.filter(n => n.name.length > 6 )
}
console.log(filterName(students))

const filterStrings = (x) => {
	let stringTypes = x.filter(n => typeof n === 'string')
	return stringTypes
}
console.log(filterStrings(mix))

const find100 = (x) => {
	return x.find(n => n > 100)
}
console.log(find100(numbers))


const findBob = (x) => {
	return x.find(n => n.name === 'Bob')
}
console.log(findBob(students))

const reduceNumbers = (x) => {
	return x.reduce((t, i) => t + i)
}
console.log(reduceNumbers(numbers))

const withoutReduce = (x) => {
	let sum = 0
	for (let i=0; i < x.length; i++) {
	 	sum += x[i]
	}
	return sum
}
console.log(withoutReduce(numbers))

const reduceDifference = (x) => {
	return x.reduce((t, i) => t - i)
}
console.log(reduceDifference(numbers))

const reduceProduct = (x) => {
	return x.reduce((t, i) => t * i)
}
console.log(reduceProduct(numbers))

const sortNumbers = (x) => {
	return x.sort((a, b) => a < b)
}
console.log(sortNumbers(numbers))

const sortNames = (x) => {
	return x.sort((a,b) => a.name.length > b.name.length)
}
console.log(sortNames(students))

// console.log(originalStudents)
// console.log(originalNumbers)
// const studentOutput = (x, y) => {
// 	let output = []
// 	for(let i=0; i < y < 3; i++){
// 		output = x[i].concat(y[i])
// 	}
// 	return output
//
// }
// console.log(studentOutput(students,numbers))
