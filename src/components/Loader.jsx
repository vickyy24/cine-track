import { FaFilm } from "react-icons/fa";

function Loader() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-[#032541]">
            <div className="flex flex-col items-center">
                <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-[#01B4E4] border-t-transparent"></div>

                    <FaFilm className="text-4xl text-[#01B4E4]" />
                </div>

                <h2 className="mt-8 text-3xl font-bold text-white">
                    CineTrack
                </h2>

                <p className="mt-2 text-center text-slate-400">
                    Loading your movie collection...
                </p>

                <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-[#16324F]">
                    <div className="h-full w-full animate-pulse rounded-full bg-[#01B4E4]"></div>
                </div>
            </div>
        </section>
    );
}

export default Loader;