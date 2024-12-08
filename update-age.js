const fs = require('fs');
const path = require('path');

function getAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    let age = today.getFullYear() - birthYear;
    const isBirthdayPassed =
        today.getMonth() > birthMonth ||
        (today.getMonth() === birthMonth && today.getDate() >= birthDay);

    if (!isBirthdayPassed) {
        age -= 1;
    }

    return age;
}

function updateReadme() {
    const age = getAge(2009, 12, 31); // Beispiel: 31. Dezember 2009
    const readmePath = path.join(__dirname, '../README.md');

    let readmeContent = fs.readFileSync(readmePath, 'utf-8');
    const ageText = `Hello, I'm ${age} years old!`;

    // Suche nach der Zeile und ersetze sie oder füge sie hinzu
    const ageLineRegex = /Hello, I'm \d+ years old!/;
    if (ageLineRegex.test(readmeContent)) {
        readmeContent = readmeContent.replace(ageLineRegex, ageText);
    } else {
        readmeContent += `\n\n${ageText}`;
    }

    fs.writeFileSync(readmePath, readmeContent, 'utf-8');
    console.log('README.md updated with new age.');
}

updateReadme();
