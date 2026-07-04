import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import MovieForm from "../components/MovieForm";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import movies from "../data/movies";

function Home() {
    const [loading, setLoading] = useState(true);

    const [movieList, setMovieList] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [statusFilter, setStatusFilter] = useState("all");

    const [isAddMovieFormOpen, setIsAddMovieFormOpen] = useState(false);

    useEffect(() => {
        const storedMovies = localStorage.getItem("cineTrackMovies");

        if (storedMovies) {
            const localMovies = JSON.parse(storedMovies);

            if (localMovies.length === 0) {
                setMovieList(movies);
            } else {
                setMovieList(localMovies);
            }
        } else {
            setMovieList(movies);
        }

        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "cineTrackMovies",
            JSON.stringify(movieList)
        );
    }, [movieList]);

    function toggleAddMovieForm() {
        setIsAddMovieFormOpen((prevState) => !prevState);
    }

    function closeAddMovieForm() {
        setIsAddMovieFormOpen(false);
    }

    function addMovie(newMovie) {
        const movie = {
            id: Date.now(),
            ...newMovie,
            watched: false,
        };

        setMovieList((prevMovies) => [movie, ...prevMovies]);

        closeAddMovieForm();
    }

    function toggleWatched(movieId) {
        setMovieList((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === movieId
                    ? {
                          ...movie,
                          watched: !movie.watched,
                      }
                    : movie
            )
        );
    }

    const filteredMovies = useMemo(() => {
        return movieList.filter((movie) => {
            const matchesSearch = movie.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            const matchesStatus =
                statusFilter === "all"
                    ? true
                    : statusFilter === "watched"
                    ? movie.watched
                    : !movie.watched;

            return matchesSearch && matchesStatus;
        });
    }, [movieList, searchTerm, statusFilter]);

    if (loading) {
        return <Loader />;
    }
        return (
        <>
            <Navbar
                toggleAddMovieForm={toggleAddMovieForm}
            />

            <main className="min-h-screen bg-[#032541] pt-24">
                {isAddMovieFormOpen && (
                    <MovieForm
                        addMovie={addMovie}
                        closeAddMovieForm={closeAddMovieForm}
                    />
                )}

                <section className="px-4 py-6 sm:px-5 lg:px-8 xl:px-10">
                    <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4">

                        <div className="flex items-center gap-5">

                            <h2 className="text-2xl font-bold text-white lg:text-4xl">
                                Movies
                            </h2>

                            <FilterBar
                                statusFilter={statusFilter}
                                setStatusFilter={setStatusFilter}
                            />

                        </div>

                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />

                    </div>
                </section>

                <section className="px-4 pb-14 sm:px-5 lg:px-8 xl:px-10">
                    <div
                        className="
                            mx-auto
                            grid
                            max-w-screen-2xl
                            grid-cols-2
                            gap-4
                            md:grid-cols-3
                            lg:grid-cols-4
                            2xl:grid-cols-5
                        "
                    >
                        {filteredMovies.length > 0 ? (
                            filteredMovies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    toggleWatched={toggleWatched}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-[#16324F] py-20">
                                <h3 className="text-2xl font-semibold text-white">
                                    No Movies Found
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Try another search or filter.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
    }

export default Home;