const fs = require('fs');
const path = require('path');

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function updateReadme() {
    const birthDate = new Date(2009, 11, 8); // Geburtstag: 31. Dezember 2009
    const age = calculateAge(birthDate);
    const readmePath = path.join(__dirname, 'README.md');
    const ageText = `Hello, I'm ${age} years old!`;

    let readmeContent = fs.readFileSync(readmePath, 'utf-8');
    const regex = /Hello, I'm \d+ years old!/;

    if (regex.test(readmeContent)) {
        readmeContent = readmeContent.replace(regex, ageText);
        fs.writeFileSync(readmePath, readmeContent, 'utf-8');
        console.log('README.md updated with new age.');
    } else {
        console.log('Age placeholder not found in README.md');
    }
}

updateReadme();
