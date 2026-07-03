import { FaFilm, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-700 bg-[#021D33]">
            <div className="mx-auto max-w-screen-2xl px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <FaFilm className="text-3xl text-[#01B4E4]" />

                            <h2 className="text-2xl font-bold text-white">
                                CineTrack
                            </h2>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-400">
                            Manage your personal movie watchlist, keep track of
                            watched movies, and organize your favorite films in
                            one place.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Features
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>Add Movies</li>
                            <li>Search Movies</li>
                            <li>Filter by Status</li>
                            <li>Movie Watchlist</li>
                            <li>Local Storage</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Built With
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Vite</li>
                            <li>React Icons</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Connect
                        </h3>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16324F] text-white transition-all duration-300 hover:bg-[#01B4E4]"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16324F] text-white transition-all duration-300 hover:bg-[#01B4E4]"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-6 text-center md:flex-row">
                    <p className="text-sm text-slate-400">
                        © 2026 CineTrack. All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-2 text-sm text-slate-400">
                        Built with
                        <FaHeart className="text-red-500" />
                        using React.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;