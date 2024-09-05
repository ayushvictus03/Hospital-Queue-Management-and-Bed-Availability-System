function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Example data for appointments and test results
const appointments = [
    'Pediatric appointment - 6th Sept 2024, 10:00 AM',
    'Cardiology check-up - 7th Sept 2024, 2:00 PM',
];

const testResults = [
    'Blood test - Normal',
    'X-ray - No issues detected',
];

function populateList(listId, items) {
    const list = document.getElementById(listId);
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

populateList('appointment-list', appointments);
populateList('result-list', testResults);
