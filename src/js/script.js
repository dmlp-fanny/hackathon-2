import { Event } from "./Classes/Event"

import { Feature } from "./Classes/Feature"

// List of Events 
const link = 'https://test-api.codingbootcamp.cz/api/0b28a0a8/events'

const target = document.querySelector('.smallEvent_container')

fetch(link).then(r => r.json()).then(dataArray => {
    dataArray.forEach(element => {
        const eventCard = new Event(element)
        target.appendChild(eventCard.element)
    });
    
    // const smallEvents = document.querySelectorAll('.smallEvent_h3') 
    // console.log(smallEvents); 

    // const feature = () => {
    //     smallEvents.forEach (element => {
    //     element.addEventListener('click', () => {
    //         const feature = new Feature(dataArray[])
    //     })
    // })
// }
})

// ModalView

const crossButton = document.querySelector('.cross')
crossButton.addEventListener('click', () => {
        document.querySelector('.modalview').classList.add('hidden')
})





