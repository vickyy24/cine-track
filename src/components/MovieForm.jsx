import { useState } from "react";

function MovieForm({ addMovie, closeAddMovieForm }) {
    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        year: "",
        poster: "",
    });

    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    }

    function validateForm() {
        const validationErrors = {};

        if (!formData.title.trim()) {
            validationErrors.title = "Movie title is required.";
        }

        if (!formData.genre.trim()) {
            validationErrors.genre = "Genre is required.";
        }

        if (!formData.year.trim()) {
            validationErrors.year = "Release year is required.";
        } else if (
            Number(formData.year) < 1900 ||
            Number(formData.year) > new Date().getFullYear()
        ) {
            validationErrors.year = "Enter a valid release year.";
        }

        if (!formData.poster.trim()) {
            validationErrors.poster = "Poster URL is required.";
        } else {
            try {
                new URL(formData.poster);
            } catch {
                validationErrors.poster = "Enter a valid URL.";
            }
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        addMovie({
            title: formData.title.trim(),
            genre: formData.genre.trim(),
            year: Number(formData.year),
            poster: formData.poster.trim(),
        });

        setFormData({
            title: "",
            genre: "",
            year: "",
            poster: "",
        });

        setErrors({});
    }

    return (
        <section className="px-5 pb-8 sm:px-8 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-screen-2xl rounded-2xl border border-slate-700 bg-[#16324F] p-6 shadow-lg">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        Add New Movie
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Add a new movie to your CineTrack collection.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
                >
                    <div>
                        <label
                            htmlFor="title"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Movie Title
                        </label>

                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Movie Title"
                            className="h-11 w-full rounded-lg border border-slate-700 bg-[#032541] px-4 text-white placeholder:text-slate-500 focus:border-[#01B4E4] focus:outline-none"
                        />

                        {errors.title && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="genre"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Genre
                        </label>

                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={formData.genre}
                            onChange={handleChange}
                            placeholder="Genre"
                            className="h-11 w-full rounded-lg border border-slate-700 bg-[#032541] px-4 text-white placeholder:text-slate-500 focus:border-[#01B4E4] focus:outline-none"
                        />

                        {errors.genre && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.genre}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="year"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Release Year
                        </label>

                        <input
                            type="number"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="2025"
                            className="h-11 w-full rounded-lg border border-slate-700 bg-[#032541] px-4 text-white placeholder:text-slate-500 focus:border-[#01B4E4] focus:outline-none"
                        />

                        {errors.year && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.year}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="poster"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Poster URL
                        </label>

                        <input
                            type="url"
                            id="poster"
                            name="poster"
                            value={formData.poster}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="h-11 w-full rounded-lg border border-slate-700 bg-[#032541] px-4 text-white placeholder:text-slate-500 focus:border-[#01B4E4] focus:outline-none"
                        />

                        {errors.poster && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.poster}
                            </p>
                        )}
                    </div>

                    <div className="md:col-span-2 xl:col-span-4">
                        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={closeAddMovieForm}
                                className="h-11 rounded-lg border border-slate-700 px-6 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-slate-700"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="h-11 rounded-lg bg-[#01B4E4] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0099C7]"
                            >
                                Add Movie
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MovieForm;