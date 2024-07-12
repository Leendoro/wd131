// templates.js
export function createParticipantTemplate(participantCount) {
    const participantTemplate = document.querySelector('.participant1').cloneNode(true);
    updateParticipantFields(participantTemplate, participantCount);
    return participantTemplate;
  }
  
  function updateParticipantFields(participant, count) {
    participant.querySelector('p').textContent = `Participant ${count}`;
    const inputs = participant.querySelectorAll('input, select');
    inputs.forEach(input => {
      const name = input.name;
      input.id = name + count;
      input.value = '';
    });
  }
  