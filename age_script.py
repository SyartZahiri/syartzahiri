from datetime import datetime

birth_date = datetime(2009, 12, 8)  # Dein Geburtsdatum
today = datetime.today()
age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

# Lies README-Datei, aktualisiere den Alters-Text und schreibe sie zurück
with open('README.md', 'r') as file:
    content = file.read()

content = content.replace("👦 Hello, I'm X years old!", f"👦 Hello, I'm {age} years old!")

with open('README.md', 'w') as file:
    file.write(content)
