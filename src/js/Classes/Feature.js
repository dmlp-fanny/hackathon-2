export class Feature {
    constructor(id, name, date, description, imageurl) {
        this.id = id
        this.name = name
        this.date = date
        this.description = description
        this.imageUrl = imageurl
        this.element = null

        this.createEventCard()
    }

    createEventCard () {
        this.element = document.createElement('div')
        this.element.className = `mainEvent`
        this.element.id = `${this.id}`
        this.element.innerHTML = `<div class="mainEvent">
          <img src=${this.imageUrl} alt="" />
          <div class="smallLeft">
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <p class="date">${this.date}</p>
            <button class="smallLeftButton">Register</button>
          </div>`
        
        this.addListeners ()
    }

    addListeners () {
        const registrtionButton = this.element.querySelector('.smallLeftButton')
        registrtionButton.addEventListener('click', () => {
        document.querySelector('.modalview').classList.remove('hidden')
        
        this.registration(this.id)
        })
    }

    registration (event_id) {
        const form = document.querySelector('form')

        form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const url = `https://test-api.codingbootcamp.cz/api/0b28a0a8/events/${event_id}/registrations`

        const fname = document.querySelector('input[name="fname"]').value
        const lname = document.querySelector('input[name="lname"]').value
        const mail = document.querySelector('input[name="email"]').value
        const phone = document.querySelector('input[name="email"]').value

        const myDataObject = {
            "fname": fname,
            "lname": lname,
            "email": mail,
            "phone": phone,
        }
        console.log(myDataObject)
        const myResponse = await fetch(url,{
            "method": "POST",
            "body": JSON.stringify(myDataObject),
            "headers": {
            'Content-Type': 'application/json'
            }
        })
    
        const myUsableResponse = await myResponse.json()
        if (myUsableResponse.status == 'success') {
            alert('Your registration was succesfull')
        } else {
            alert('You dumb')
        }
        })
    }
}

