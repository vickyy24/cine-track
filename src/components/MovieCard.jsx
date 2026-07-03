import { FaCheck, FaEye, FaTrash } from "react-icons/fa";

function MovieCard({ movie, toggleWatched }) {
    function handleToggleWatched() {
        toggleWatched(movie.id);
    }

    return (
        <article
            className="
                overflow-hidden
                rounded-xl
                border
                border-slate-700
                bg-[#16324F]
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#01B4E4]
                hover:shadow-xl
            "
        >
            <div className="overflow-hidden">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="aspect-2/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(event) => {
                        event.target.src =
                            "https://placehold.co/400x600/16324F/FFFFFF?text=No+Poster";
                    }}
                />
            </div>

            <div className="space-y-3 p-3 sm:p-4">
                <h3 className="line-clamp-1 text-base font-bold text-white sm:text-lg">
                    {movie.title}
                </h3>

                <div className="space-y-1">
                    <p className="text-xs text-slate-300 sm:text-sm">
                        {movie.genre}
                    </p>

                    <p className="text-xs text-slate-400 sm:text-sm">
                        Release Year : {movie.year}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold sm:text-xs ${
                            movie.watched
                                ? "bg-green-600/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                        {movie.watched
                            ? "Watched"
                            : "Unwatched"}
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={handleToggleWatched}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 sm:text-sm ${
                            movie.watched
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-[#01B4E4] hover:bg-[#0099C7]"
                        }`}
                    >
                        {movie.watched ? (
                            <>
                                <FaCheck />

                                Watched
                            </>
                        ) : (
                            <>
                                <FaEye />

                                Watch
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        className="rounded-lg bg-red-600 p-3 text-white transition-colors duration-300 hover:bg-red-700"
                        aria-label="Delete Movie"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default MovieCard;