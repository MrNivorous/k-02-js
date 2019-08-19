// 020401

const a = () => {
	console.log("Hello")
}

const b = (a, n) => {
	setTimeout(a, n*1000)
}

b(a,5)

const logHello5 = () => {
let seconds = 1
let logger = setInterval( () => console.log('Hello ' + seconds++), 1000)

setTimeout( () =>  clearInterval(logger), 6000 )
}


logHello5()
