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
	console.log(name.map(n => {
		return n.name})
	)
}
mapNames(students)

const filter22 = (num) => {
	console.log(num.filter(n =>
		n >= 22
		)
	)
}
filter22(newNumbersArray)
