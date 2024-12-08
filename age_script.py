from datetime import datetime

# Dein Geburtsdatum
birth_year = 2009
birth_month = 12
birth_day = 8

today = datetime.today()
age = today.year - birth_year - ((today.month, today.day) < (birth_month, birth_day))

# Lese die README-Datei
with open('README.md', 'r') as file:
    content = file.read()

# Ersetze das Alter in der README-Datei
content = content.replace("👦  Hello, I'm X years old!", f"👦  Hello, I'm {age} years old!")

# Schreibe die Änderungen zurück in die README-Datei
with open('README.md', 'w') as file:
    file.write(content)
