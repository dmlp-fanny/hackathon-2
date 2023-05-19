export class Event {
    constructor(object) {
        this.name = object.name
        this.date = object.date
        this.description = object.description
        this.imageUrl = object.image_url
        this.element = null

        this.createEventCard()
    }

    createEventCard () {
        this.element = document.createElement('div')
        this.element.className = `smallEvent`
        this.element.innerHTML = `<h3>${this.name}</h3><div class="name">${this.date}</div><button class="smallbutton">More Information</button><img src="${this.imageUrl}">`
    }
}

