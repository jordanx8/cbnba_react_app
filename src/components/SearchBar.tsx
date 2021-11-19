

const SearchBar = ({ label, setVariable }: any) => 
{
    function handleChange(event:any){
        setVariable(event.target.value);
    }

    return (
    <form>
    <label>
        {label}
        <input type="text" name="name" onChange={handleChange}/>
    </label>
    </form>
    )
}

export default SearchBar;