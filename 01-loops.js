let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']
let newNumbers = [1, 90, 78, 3, 22, 187, 21]

//020101
const logNumbers = (n) => {
	n.forEach(x => {
	console.log(x)
})
}

logNumbers(numbers)

//020102
const logNames = (names) => {
	names.forEach(n => {
	console.log(n.name)
})
}

logNames(students)

//020103
const add1 = (n) => {
	let newNumbers = n.map(n =>
	    n + 1)
	 return newNumbers
}

let newNumbersArray = add1(numbers)
console.log(newNumbersArray)

//020104

const mapNames = (name) => {
		return name.map(n => n.name
	)
}
console.log(mapNames(students))

//020105

const filter22 = (num) => {
	let newFilter = num.filter(n =>
		n >= 22
		)
	return newFilter
}
console.log(filter22(newNumbersArray))

//020106
const greaterParameter = (array, value) => {
	let greaterNumbers = array.filter(n =>
		n > value
		)
	return greaterNumbers
}
console.log(greaterParameter(numbers, 70))

//020107
const filterName = (x) => {
 return	x.filter(n => n.name.length > 6 )
}
console.log(filterName(students))

//020108
const filterStrings = (x) => {
	let stringTypes = x.filter(n => typeof n === 'string')
	return stringTypes
}
console.log(filterStrings(mix))

//020109
const find100 = (x) => {
	return x.find(n => n > 100)
}
console.log(find100(numbers))

//020110
const findBob = (x) => {
	return x.find(n => n.name === 'Bob')
}
console.log(findBob(students))

//020111
const reduceNumbers = (x) => {
	return x.reduce((t, i) => t + i)
}
console.log(reduceNumbers(numbers))

//020112
const withoutReduce = (x) => {
	let sum = 0
	for (let i=0; i < x.length; i++) {
	 	sum += x[i]
	}
	return sum
}
console.log(withoutReduce(numbers))

//020114
const reduceDifference = (x) => {
	return x.reduce((t, i) => t - i)
}
console.log(reduceDifference(numbers))

//020114
const reduceProduct = (x) => {
	return x.reduce((t, i) => t * i)
}
console.log(reduceProduct(numbers))

//020115
const sortNumbers = (x) => {
	return x.sort((a, b) => a < b)
}
console.log(sortNumbers(numbers))

//020116
const sortNames = (x) => {
	return x.sort((a,b) => a.name.length > b.name.length)
}
console.log(sortNames(students))

//020117

const mappedNames = (arr1, arr2) => {
	let newMap = arr1.map((e, i) => ({name:e.name, age:arr2[i]}))
	return newMap
}

// let newArray = arr1.map((x, i) => {
// 	return {name: x[i], age: arr2[i]}
// })
// }
console.log(mappedNames(students, newNumbers))

//020118

let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]
let number = []
for (let i = 0; i < arr.length; i++) {
    if ((arr[i+1] - arr[i]) > 1 ) {
        number.push(arr[i+1]-1)
    }
}
console.log(number)

//020119

dens = [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]

let denominationFunction = (arr, num) => {
	let total = num
	let newArray = []
	arr.forEach((e,i) => {
		while (num >= arr[i]) {
		newArray.push(arr[i])
		num = Number(num -= arr[i]).toFixed(2)
	}
	})
	return newArray
	}
	console.log(denominationFunction(dens,27.58))
