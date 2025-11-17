# To-Do-von-Ahmed

# Full-Stack To-Do App (Django & React)

Dies ist eine einfache, aber voll funktionsfähige To-Do-Anwendung, die als Full-Stack-Projekt erstellt wurde. Sie verfügt über ein Django REST Framework-Backend und ein modernes React-Frontend (erstellt mit TypeScript und gestylt mit Tailwind CSS).

Das Projekt ist in einem Monorepo mit zwei Hauptverzeichnissen strukturiert:
* `/backend` (Die Django REST API)
* `/frontend` (Die React TS App)

---

##  Features

* **Vollständiges CRUD:** To-Dos erstellen, lesen, aktualisieren und löschen.
* **Status-Management:** Jedes To-Do kann den Status "offen", "in Bearbeitung" oder "erledigt" haben.
* **In-Place-Bearbeitung:** To-Dos können direkt in der Liste bearbeitet werden.
* **Responsives Design:** Die Benutzeroberfläche ist dank Tailwind CSS vollständig responsiv.
* **Saubere API:** Klare REST-Endpunkte für eine einfache Anbindung.

---

##  Technologie-Stack

### Backend
* Python
* Django & Django REST Framework
* django-cors-headers
* SQLite3 (als Entwicklungsdatenbank)

### Frontend
* React
* TypeScript
* Tailwind CSS
* Axios (für API-Anfragen)

---

## 🛠️ Lokale Installation & Ausführung

Um dieses Projekt lokal zu starten, benötigen Sie **Node.js (npm)** und **Python** (mit `pip`).

### 1. Projekt klonen

```bash
git clone [https://github.com/amdxa/to-do-von-ahmed.git](https://github.com/amdxa/to-do-von-ahmed.git)
cd to-do-von-ahmed
```

### 2. Backend starten (Terminal 1)

1.  Wechseln Sie in das Backend-Verzeichnis:
    ```bash
    cd backend
    ```
2.  Erstellen Sie eine virtuelle Umgebung und aktivieren Sie sie:
    ```bash
    # (Windows)
    python -m venv venv
    .\venv\Scripts\activate
    ```

    ```bash
    # (macOS / Linux)
    python3 -m venv venv
    source venv/bin/activate
    ```
3.  Installieren Sie die Python-Abhängigkeiten:
    ```bash
    pip install -r requirements.txt
    ```
4.  Führen Sie die Datenbank-Migrationen durch:
    ```bash
    python manage.py migrate
    ```
5.  Starten Sie den Django-Server:
    ```bash
    python manage.py runserver
    ```
    *Das Backend läuft jetzt auf `http://localhost:8000/api/todos/`.*

    ### 3. Frontend starten (Terminal 2)

1.  Öffnen Sie ein **neues Terminal** und wechseln Sie in das Frontend-Verzeichnis:
    ```bash
    cd frontend
    ```
2.  Installieren Sie die Node.js-Abhängigkeiten:
    ```bash
    npm install
    ```
3.  Starten Sie den React-Entwicklungsserver:
    ```bash
    npm start
    ```
    *Die React-App wird automatisch in Ihrem Browser unter `http://localhost:3000` geöffnet und verbindet sich mit dem Backend.*


    ## 📸 Screenshot

![Screenshot der To-Do App](./assets/mockup.png)

