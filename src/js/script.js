import { Event } from "./Classes/Event"

// List of Events 
const link = 'https://test-api.codingbootcamp.cz/api/0b28a0a8/events'

const target = document.querySelector('')

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
const modal = () => {
    const container = document.querySelector('.modalview')
}