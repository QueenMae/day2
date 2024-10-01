let a = 9
let b = 4
let action = "add"

function calculator(){
if (action === "sub") {
return substraction()
} else if (action === "add") {
return addition()
}

}

function addition() {
return a + b
}

function substraction() {
return a - b
}

