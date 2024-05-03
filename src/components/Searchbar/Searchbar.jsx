import "./Searchbar.css";

export const Searchbar = ({ handleSubmit, handleChange }) => {

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span class="SearchForm-button-label">Search</span>
                </button>

                <input
                    onChange={handleChange}
                    className="SearchForm-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}
