export default function SearchInput ({textChange}) {

    const handleChange = event => {
        textChange(event)
    }

    return(
        <div>
            <div><input onChange={handleChange} /></div>
        </div>
    )
}