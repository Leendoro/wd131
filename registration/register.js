import { createParticipantTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', () => {
  let participantCount = 1;

  document.getElementById('add-participant-button').addEventListener('click', addParticipant);

  function addParticipant() {
    participantCount++;
    const newParticipant = createParticipantTemplate(participantCount);
    document.querySelector('.participants').appendChild(newParticipant);
  }

  document.getElementById('registration-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const participants = getParticipants(formData);
    const contactInfo = getContactInfo(formData);
    const totalFee = participants.reduce((sum, participant) => sum + parseFloat(participant.fee), 0);
    displaySummary(participants, contactInfo, totalFee);
    form.style.display = 'none'; // Hide the form
  });

  function getParticipants(formData) {
    const participants = [];
    for (let i = 1; i <= participantCount; i++) {
      const participant = {
        name: formData.get(`fname${i}`),
        activity: formData.get(`activity${i}`),
        fee: formData.get(`fee${i}`),
        date: formData.get(`date${i}`),
        grade: formData.get(`grade${i}`)
      };
      participants.push(participant);
    }
    return participants;
  }

  function getContactInfo(formData) {
    return {
      name: formData.get('adult_name'),
      address: formData.get('address1'),
      city: formData.get('city'),
      state: formData.get('state'),
      email: formData.get('eaddress'),
      phone: formData.get('phone'),
      zip: formData.get('zip'),
      relationship: formData.get('relationship')
    };
  }

  function displaySummary(participants, contactInfo, totalFee) {
    const summary = document.getElementById('summary');
    summary.innerHTML = `<h2>Registration Summary</h2>`;
    participants.forEach((participant, index) => {
      summary.innerHTML += `<h3>Participant ${index + 1}</h3>
      <p>Name: ${participant.name}</p>
      <p>Activity: ${participant.activity}</p>
      <p>Fee: $${participant.fee}</p>
      <p>Date: ${participant.date}</p>
      <p>Grade: ${participant.grade}</p>`;
    });
    summary.innerHTML += `<h3>Contact Information</h3>
    <p>Name: ${contactInfo.name}</p>
    <p>Address: ${contactInfo.address}</p>
    <p>City: ${contactInfo.city}</p>
    <p>State: ${contactInfo.state}</p>
    <p>Email: ${contactInfo.email}</p>
    <p>Phone: ${contactInfo.phone}</p>
    <p>Zip: ${contactInfo.zip}</p>
    <p>Relationship: ${contactInfo.relationship}</p>`;
    summary.innerHTML += `<h3>Total Fee: $${totalFee.toFixed(2)}</h3>`;
    summary.style.display = 'block'; // Display the summary
  }
});
