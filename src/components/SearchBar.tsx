

const SearchBar = ({ label, setVariable }: any) => {
    function handleChange(event: any) {
        setVariable(event.target.value);
    }

    return (
        <form>
            <label>
                <input className="form-control" type="text" name="name" placeholder={label} onChange={handleChange} />
            </label>
        </form>
    )
}

export default SearchBar;