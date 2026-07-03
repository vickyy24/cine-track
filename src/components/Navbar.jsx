import { FaFilm, FaPlus } from "react-icons/fa";

function Navbar({ toggleAddMovieForm }) {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-700 bg-[#032541]/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-5 lg:h-18 lg:px-8 xl:px-10">
                <div className="flex items-center gap-3">
                    <FaFilm className="text-3xl text-[#01B4E4]" />

                    <h1 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
                        CineTrack
                    </h1>
                </div>

                <button
                    type="button"
                    onClick={toggleAddMovieForm}
                    className="flex items-center gap-2 rounded-full bg-[#01B4E4] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0099C7] active:scale-95 lg:px-5"
                >
                    <FaPlus className="text-xs" />

                    <span className="hidden sm:block">
                        Add Movie
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;