# 🧸 Garderie App

A responsive web application for a children's daycare ("garderie"). It features a landing page whose content is loaded dynamically from a REST API.

## Technologies Used

- **Frontend:** Next.js (App Router), React, Bootstrap 5
- **Backend:** Node.js, Express, CORS
- **Version control:** Git and GitHub

## Folder Structure

```
garderie-app/
├── backend/
│   ├── server.js          # Express server and API routes
│   ├── package.json
│   └── .gitignore
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   └── Services.js
│   │   ├── config.js      # API address
│   │   ├── layout.js      # Global layout, loads Bootstrap CSS
│   │   └── page.js        # Main page
│   └── package.json
└── README.md
```

## Installation and Running

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version)
- [Git](https://git-scm.com)

### 1. Clone the repository
```bash
git clone https://github.com/Hedi-AM/garderie-app.git
cd garderie-app
```

### 2. Start the backend (port 4000)
```bash
cd backend
npm install
npm start
```

### 3. Start the frontend (port 3000)
Open a **second terminal**:
```bash
cd frontend
npm install
npm run dev
```

### 4. Open the app
Go to http://localhost:3000. Both servers must be running at the same time.

## API Documentation

Base URL: `http://localhost:4000`

### GET /api/garderie
Returns general information about the daycare.

**Example response:**
```json
{
  "name": "Les Petits Anges",
  "slogan": "A happy place for your little ones",
  "description": "At Les Petits Anges, your children learn, play and grow in a safe, caring and colorful environment.",
  "address": "12 Rue des Fleurs, Tunis",
  "phone": "+216 00 000 000",
  "email": "contact@petitsanges.tn",
  "openingHours": "Monday to Friday, 7:30 AM - 6:00 PM"
}
```

### GET /api/services
Returns the list of services offered.

**Example response:**
```json
[
  {
    "id": 1,
    "icon": "🍎",
    "title": "Healthy Meals",
    "description": "Balanced and tasty meals prepared fresh every day."
  }
]
```

### GET /api/activites
Returns the list of activities for children.

**Example response:**
```json
[
  {
    "id": 1,
    "name": "Finger Painting",
    "ageGroup": "2-3 years",
    "time": "9:00 AM"
  }
]
```

## Git Workflow

Each development step was done in a dedicated branch, committed, then merged into `main`:

| Branch | Purpose |
|---|---|
| `feature/landing-page` | Landing page in a single file |
| `feature/components` | Navbar, Hero and Services components |
| `feature/backend` | Express backend and REST APIs |
| `feature/api-integration` | Frontend connected to the APIs |
| `feature/polish` | Logo integration and visual improvements |
| `docs/readme` | Project documentation |

## Author

Hedi BEN ABDELMOUMEN