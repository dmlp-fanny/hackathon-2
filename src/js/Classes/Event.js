import { Feature } from "./Feature"

export class Event {
    constructor(object) {
        this.id = object.id
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
        this.element.id = `${this.id}`
        this.element.innerHTML = `<h3 class="smallEvent_h3">${this.name}</h3><div class="name">${this.date}</div><button class="smallbutton">More Information</button><img src="${this.imageUrl}">`
    
        this.addListeners() 
    }

    addListeners () {
        this.element.querySelector('.smallbutton').addEventListener('click', (e) => {
            document.querySelector('.mainEvent_container').innerText = ''
            const feature = new Feature(this.id, this.name, this.date, this.description,this.imageUrl)
            console.log(feature);
            document.querySelector('.mainEvent_container').appendChild(feature.element)
        })

    }
}

