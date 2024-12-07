//throttaling
const throFun = (call, t) => {
    return function () {
        document.getElementById('btn').disabled = true
        setTimeout(() => {
            call()
        }, t)
    }
}

const funINputText = throFun(() => {
    document.getElementById('btn').disabled = false
    console.log("button clicked")
}, 3000)


//debouncing
var counter = 0

function inputChenge() {
    console.log("this input counter", counter++)
}

const myDebounFun = (call, t) => {
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        setTimeout(() => {
            call()
        }, t)
    }
}

const batterFuncation = myDebounFun(inputChenge, 3000)

// call apply and bind
const obj = {
    name: "test",
    age: 20
}

function userFn(natinality) {
    console.log(`${this.name} ${this.age}  ${natinality}`)
}

userFn.call(obj, 'indian')
userFn.apply(obj, ['nepali'])
const binddata = userFn.bind(obj, ['nepali'])
binddata()
