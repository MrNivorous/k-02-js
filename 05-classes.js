// 020501

class Car {
	constructor(make, model, color) {
		this.make = make
		this.model = model
		this.color = color
	}
}

let buildCar = (make, model, color) => {
	let newCar = new Car(make, model, color)
	return newCar
}


console.log(buildCar('Ferrari','Testarossa','blue'))

// 020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

class Employee {
	constructor(name, job) {
		this.name = name
		this.job = job
		}
	}



const makeEmployees = (nameArray, jobArray) => {
	return nameArray.map((name, i) => {
		return new Employee(name,jobArray[i])
})
}

console.log(makeEmployees(names,jobs))
