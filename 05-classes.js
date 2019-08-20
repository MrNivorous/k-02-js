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

// 020503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

class Karateka {
	constructor(name, belt) {
		this.name = name
		this.belt = belt[0]
	}
	increaseRank(index) {
		this.belt = belts[index]
	}
}

let karn = new Karateka('Karn', belts)

console.log(karn)

const fight = (karate) => {
	let runScores = 0
	let scores = setInterval( () => {
		let score = Math.round(Math.random() * 10) + 1
		runScores++

		if (score > 8 && karate.belt !== 'black') {
			let index = belts.indexOf(karate.belt)
			index++
			karate.increaseRank(index)
		}
		//setTimeout( () => clearInterval(scores), 20000 )
		//	if (scores > 8) {increaseRank(karate)
		console.log(`Score: ${score}`)
		console.log(karate)

		if (runScores === 20)
			clearInterval(scores)


		}, 1000)

}





fight(karn)
