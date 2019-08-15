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
	console.log(n.map(x => {
	return x + 1
		})
	)
}

add1(numbers)
