# CineTrack

CineTrack is a responsive Movie Watchlist application built with React.js and Tailwind CSS. It allows users to manage their personal movie collection by adding movies, searching by title, filtering based on watch status, and marking movies as watched or unwatched. Movie data is persisted using the browser's localStorage.

## Live Demo

https://cine-track-omega.vercel.app/

## GitHub Repository

https://github.com/vickyy24/cine-track

---

## Features

- Add new movies to the watchlist
- Toggle movie status between Watched and Unwatched
- Search movies by title
- Filter movies by:
  - All Movies
  - Watched
  - Unwatched
- Loading spinner during initial application load
- Responsive design for Mobile, Tablet, and Desktop
- Data persistence using localStorage
- Clean and modern user interface

---

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Icons
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Project Structure

```
cine-track/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieForm.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── data/
│   │   └── movies.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/vickyy24/cine-track.git
```

Navigate to the project directory.

```bash
cd cine-track
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## Production Build

Generate the production build.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

---

## Assignment Requirements Covered

- Responsive Movie Dashboard
- Add Movie Form
- Search Functionality
- Status Filter
- Toggle Watch Status
- Loading State
- Local Storage Persistence
- GitHub Repository
- Live Deployment on Vercel

---

## Future Improvements

- Edit Movie Details
- Movie Ratings
- Movie Reviews
- Movie Categories
- API Integration with TMDB
- Pagination
- Sorting Options
- Dark/Light Theme

---

## Author

**Vikas Sontakke**

GitHub: https://github.com/vickyy24