import "./SearchInput.css";

export default function SearchInput ({textChange}) {

    const handleChange = event => {
        textChange(event)
    }

    return(
        <div className="component-search-input">
            <div>
                <input onChange={handleChange} />
            </div>
        </div>
    )
}