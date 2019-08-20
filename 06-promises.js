let brushTeeth = () => {
	return new Promise((resolve, reject) => {
		return setTimeout (() => {resolve('ready')
	}, 1000)
	})
}

// brushTeeth().then(res => console.log(res))

let getUp = () => {
	return new Promise((resolve, reject) => {
		return setTimeout (() => {resolve('awake')
	}, 1000)
	})
}

// getUp().then(res => console.log(res))

let haveBreakfast = () => {
	return new Promise((resolve, reject) => {
		return setTimeout (() => {resolve('eaten')}, 2000)
	})
}

// haveBreakfast().then(res => console.log(res))

let haveShower = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('showered')}, 2000)
	})
}

// haveShower().then(res => console.log(res))

getUp().then(res => {
	console.log(res)
	haveShower().then(res => {
		console.log(res)
		haveBreakfast().then(res => {
			console.log(res)
			brushTeeth().then(res => console.log(res))
		})
	})
})

let makeCoffee = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('coffee')}, 10000)
	})
}

let makeEggs = () => {
	return new Promise((resolve, reject) => {
		 return setTimeout(() => {resolve('eggs')}, 5000)
	})
}

let makeToast = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('toast')}, 6000)
	})
}

let makeBacon = () => {
	return new Promise((resolve, reject) => {
		return	setTimeout(() => {resolve('bacon')}, 8000)
	})
}

Promise.all([makeCoffee(), makeEggs(), makeToast(), makeBacon()]).then(res => console.log(res))

// class Horse {
// 	constructor(name) {
// 		this.name = name
// 	}
// }

let Speedy = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('Speedy')}, Math.random() * 4000)
	})
}

let Jackpot = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('Jackpot')}, Math.random() * 4000)
	})
}

let Red = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {resolve('Red')}, Math.random() * 4000)
	})
}

Promise.race([Speedy(), Jackpot(), Red()]).then(res => console.log(res))
