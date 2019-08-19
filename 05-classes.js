// 020501

let buildCar = class Car {
	constructor(make, model, color) {
		this.make = make
		this.model = model
		this.color = color
	}
}

let newCar = new buildCar('Ferrari', 'Testarossa', 'blue')
console.log(newCar)
