import { Event } from "./Classes/Event"

// List of Events 
const link = 'https://test-api.codingbootcamp.cz/api/0b28a0a8/events'

const target = document.querySelector('.smallEvent_container')

fetch(link).then(r => r.json()).then(dataArray => {
    dataArray.forEach(element => {
        const eventCard = new Event(element)
        target.appendChild(eventCard.element)
    });
})

// ModalView

const crossButton = document.querySelector('.cross')
crossButton.addEventListener('click', () => {
        document.querySelector('.modalview').classList.add('hidden')
})

// Registration - modal view
const registrtionButton = document.querySelector('.smallLeftButton')
registrtionButton.addEventListener('click', () => {
    document.querySelector('.modalview').classList.remove('hidden')
})

const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const url = 'https://test-api.codingbootcamp.cz/api/0b28a0a8/events/2/registrations'

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
    console.log(myUsableResponse)
})

// featured event 
