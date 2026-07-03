function FilterBar({ statusFilter, setStatusFilter }) {
    function handleFilter(value) {
        setStatusFilter(value);
    }

    function handleMobileFilter(event) {
        setStatusFilter(event.target.value);
    }

    return (
        <>
            {/* Desktop Tabs */}
            <div className="hidden h-9.2 items-center rounded-full border border-slate-700 bg-[#16324F] md:flex">
                <button
                    type="button"
                    onClick={() => handleFilter("all")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        statusFilter === "all"
                            ? "bg-[#01B4E4] text-white"
                            : "text-slate-300 hover:text-white"
                    }`}
                >
                    All
                </button>

                <button
                    type="button"
                    onClick={() => handleFilter("watched")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        statusFilter === "watched"
                            ? "bg-[#01B4E4] text-white"
                            : "text-slate-300 hover:text-white"
                    }`}
                >
                    Watched
                </button>

                <button
                    type="button"
                    onClick={() => handleFilter("unwatched")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        statusFilter === "unwatched"
                            ? "bg-[#01B4E4] text-white"
                            : "text-slate-300 hover:text-white"
                    }`}
                >
                    Unwatched
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className="block md:hidden">
                <select
                    value={statusFilter}
                    onChange={handleMobileFilter}
                    className="h-10 w-32 rounded-full border border-slate-700 bg-[#16324F] px-4 text-sm text-white outline-none transition-all duration-300 focus:border-[#01B4E4]"
                >
                    <option value="all">
                        All
                    </option>

                    <option value="watched">
                        Watched
                    </option>

                    <option value="unwatched">
                        Unwatched
                    </option>
                </select>
            </div>
        </>
    );
}

export default FilterBar;