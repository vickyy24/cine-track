import { FiSearch } from "react-icons/fi";

function SearchBar({ searchTerm, setSearchTerm }) {
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80">
            <div className="relative">
                <FiSearch
                    className="
                        pointer-events-none
                        absolute
                        top-1/2
                        left-4
                        -translate-y-1/2
                        text-base
                        text-slate-400
                    "
                />

                <input
                    type="search"
                    name="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search movies..."
                    className="
                        h-9.2
                        w-full
                        rounded-full
                        border
                        border-slate-700
                        bg-[#16324F]
                        py-2
                        pr-4
                        pl-11
                        text-sm
                        text-white
                        placeholder:text-slate-500
                        transition-all
                        duration-300
                        focus:border-[#01B4E4]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#01B4E4]/30
                    "
                />
            </div>
        </div>
    );
}

export default SearchBar;