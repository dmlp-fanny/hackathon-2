import { Event } from "./Classes/Event"

// List of Events 
const link = 'https://test-api.codingbootcamp.cz/api/0b28a0a8/events'

const target = document.querySelector('.smallEvent_container')

fetch(link).then(r => r.json()).then(dataArray => {
    console.log(dataArray);
    console.log(dataArray[0]);

    dataArray.forEach(element => {
        const eventCard = new Event(element)
        console.log(eventCard);
        target.appendChild(eventCard.element)
    });
})

// ModalView

const crossButton = document.querySelector('.cross')
crossButton.addEventListener('click', () => {
        document.querySelector('.modalview').classList.add('hidden')
})


const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const url = 'https://test-api.codingbootcamp.cz/api/0b28a0a8/events/1/registrations'

    const name = document.querySelector('input[name="fname"]').value
    const rank = document.querySelector('input[name="lname"]').value
    const breed = document.querySelector('input[name="email"]').value

    const myDataObject = {
        "name": name,
        "rank": rank,
        "breed": breed
    }
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
