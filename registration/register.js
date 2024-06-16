import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('add-participant-button');
    
    addButton.addEventListener('click', () => {
        participantCount++;
        const newParticipant = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipant);
    });

    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const totalFees = calculateTotalFees();
        const adultName = document.getElementById('adult-name').value;
        const summaryMessage = successTemplate({
            name: adultName,
            count: participantCount,
            totalFees: totalFees
        });
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('summary').innerHTML = summaryMessage;
        document.getElementById('summary').style.display = 'block';
    });
});

function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeElement) => {
        return sum + Number(feeElement.value);
    }, 0);
    return total;
}


document.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('add-participant-button');
    
    addButton.addEventListener('click', () => {
        participantCount++;
        const newParticipant = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipant);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const totalFees = calculateTotalFees();
        const adultName = document.getElementById('adult-name').value;
        const summaryMessage = successTemplate({
            name: adultName,
            count: participantCount,
            totalFees: totalFees
        });
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('summary').innerHTML = summaryMessage;
        document.getElementById('summary').style.display = 'block';
    });
});


function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeElement) => {
        return sum + Number(feeElement.value);
    }, 0);
    return total;
}
function successTemplate(info) {
    return `
    <h2>Registration Successful</h2>
    <p>Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.totalFees} in fees.</p>
    `;
}

// Templates.js
export function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <h2>Participant ${count}</h2>
        <label for="name${count}">Name:</label>
        <input type="text" id="name${count}" name="name${count}" required>
        <label for="age${count}">Age:</label>
        <input type="number" id="age${count}" name="age${count}" required>
        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" name="fee${count}" required>
    </section>
    `;
}

export function successTemplate(info) {
    return `
    <h2>Registration Successful</h2>
    <p>Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.totalFees} in fees.</p>
    `;
}

import { participantTemplate, successTemplate } from './Templates.js';

