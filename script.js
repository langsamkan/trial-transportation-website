// script.js

// Function to validate forms
function validateForm(form) {
    // Perform validation logic here
    let isValid = true;

    // Example: Check if all required fields are filled
    for (const element of form.elements) {
        if (element.required && !element.value) {
            isValid = false;
            alert(`${element.name} is required.`);
            break;
        }
    }

    return isValid;
}

// Function to handle ticket submissions
function handleTicketSubmission(event) {
    event.preventDefault(); // Prevent the form from being submitted by default
    const form = event.target;

    if (validateForm(form)) {
        // Implement ticket submission logic here
        // For example, send data to the server
        alert('Ticket submitted successfully!');
    }
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticket-form'); // Assuming the form has id 'ticket-form'
    if (form) {
        form.addEventListener('submit', handleTicketSubmission);
    }
});