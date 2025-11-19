# To-Do-von-Ahmed

   ## 📸 Screenshot

![Screenshot der To-Do App](./assets/mockup.png)

# Full-Stack To-Do App (Django & React)

This is a simple yet fully functional To-Do application built as a full-stack project. It features a Django REST Framework backend and a modern React frontend (created with TypeScript and styled with Tailwind CSS).

The project is structured in a monorepo with two main directories:
* `/backend` (The Django REST API)
* `/frontend` (The React TS App)

---

##  Features

* **Full CRUD:** Create, read, update, and delete To-Dos.
* **Status-Management:** Each To-Do can have the status "open", "in progress" or "completed".
* **In-Place-Editing:** To-Dos can be edited directly in the list.
* **Responsive Design:** The user interface is fully responsive thanks to Tailwind CSS.
* **clean API:** Clear REST endpoints for easy connection.

---

##  Technologie-Stack

### Backend
* Python
* Django & Django REST Framework
* django-cors-headers
* SQLite3 (as development database)

### Frontend
* React
* TypeScript
* Tailwind CSS
* Axios (for API requests)

---

##  Local Installation & Execution

To start this project locally, you will need **Node.js (npm)** and **Python** (with `pip`).

### 1. Clone the Project

```bash
git clone [https://github.com/amdxa/to-do-von-ahmed.git](https://github.com/amdxa/to-do-von-ahmed.git)
cd to-do-von-ahmed
```

### 2. Start the Backend (Terminal 1)

1.  Switch to the backend directory:
    ```bash
    cd backend
    ```
2.  Create a virtual environment and activate it:
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
3.  Install the Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Run the database migrations:
    ```bash
    python manage.py migrate
    ```
5.  Start the Django server:
    ```bash
    python manage.py runserver
    ```
    *The backend is now running `http://localhost:8000/api/todos/`.*

    ### 3. start Frontend (Terminal 2)

1.  Open a **new terminal** and switch to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install the Node.js dependencies:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
    *The React app will automatically open in your browser at `http://localhost:3000` and connect to the backend.*


 
