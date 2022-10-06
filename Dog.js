// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class = "dog-profile">
                <img class="like-badge" src="./images/badge-like.png"/>
                <img class="nope-badge" src="./images/badge-nope.png"/>
                <h2 class = "info">${name}, ${age}</h2>
                <img class = "avatar" src = "${avatar}">
                <h3 class = "bio">${bio}</h3>
            <div>
        `
    }
}

export default Dog