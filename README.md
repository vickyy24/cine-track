# CineTrack

CineTrack is a modern and responsive movie watchlist application built with React.js and Tailwind CSS. It enables users to manage their personal movie collection by adding movies, searching by title, filtering based on watch status, and tracking watched movies. The application uses browser localStorage to persist data across sessions.

## Live Demo

https://cine-track-omega.vercel.app/

---

## Features

- Add new movies to your watchlist
- Toggle movies between Watched and Unwatched
- Search movies by title
- Filter movies by watch status
- Client-side form validation
- Loading spinner during initial application load
- Persistent data using localStorage
- Fully responsive layout for mobile, tablet, and desktop devices
- Clean and modern user interface

---

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Icons
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

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd cine-track
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## Build for Production

Generate an optimized production build.

```bash
npm run build
```

Preview the production build locally.

```bash
npm run preview
```

---

## Screenshots

> Add screenshots of the application here.

- Home Page
- Add Movie Form
- Mobile View

---

## Future Enhancements

- Movie ratings and reviews
- Edit existing movies
- Sorting by title and release year
- Integration with TMDB API
- User authentication
- Favorites and collections

---

## Author

**Vikas Sontakke**