// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

document.getElementById("heart-btn").addEventListener("click", function() {
    document.querySelector(".like-badge").style.display = "block"
    document.getElementById("heart-btn").disabled = true

    if (dogArray.length > 0) {
        setTimeout( () => {
            dogos = getNewDog()
            render()
        }, 1500 )
    } else {
        setTimeout(() => {
            noDogs()
        }, 1500 );
    }
})

document.getElementById("cross-btn").addEventListener("click", function() {
    document.querySelector(".nope-badge").style.display = "block"
    document.getElementById("cross-btn").disabled = true

    if (dogArray.length > 0) {
        setTimeout( () => {
            dogos = getNewDog()
            render()
        }, 1500 )
    } else {
        setTimeout(() => {
            noDogs()
        }, 1500 );
    }

})

let dogArray = ["teddy", "bella", "rex"]

function getNewDog() {
    const nextDogData = dogs[dogArray.shift()]
    return nextDogData ? new Dog(nextDogData) : noDogs()
}

function noDogs() {
    document.querySelector("#swipes-control").style.display = "none"
    document.getElementById("dogo").innerHTML = `
        <h2 id="no-dogos">There are no more single dogs in your area</h2>
    `
}

function render() {
    document.getElementById("dogo").innerHTML = dogos.getDogHtml()
}

let dogos = getNewDog()
render()