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

const age = getAge(2009, 11, 31); // Beispiel: 31. Dezember 2009
const outputDir = path.join(__dirname, 'dist');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Automatic Age Updater</title>
</head>
<body>
    <p>Hello, I'm ${age} years old!</p>
</body>
</html>
`;

fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);
console.log('Age page updated.');
