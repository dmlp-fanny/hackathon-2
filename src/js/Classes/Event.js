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
        this.element.className = `event_card`
        this.element.innerHTML = `<div class="name">${this.name}</div><div class="name">${this.date}</div><img src="${this.imageUrl}">`
    }
}

