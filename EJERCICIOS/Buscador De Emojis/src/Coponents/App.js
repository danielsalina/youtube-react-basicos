import { useState } from "react"
import SearchText from "./SearchInput"
import EmojiResults from "./EmojiResult";
import filterEmoji from "../logic/filterEmoji";
import "./App.css"

function App() {

  const [state, setState] = useState({
    filteredEmoji: filterEmoji("", 10)
  })

  const handleSearchChange = event => {
    setState({
      filteredEmoji: filterEmoji(event.target.value, 10)
    })
  }

  console.log(state)

  return (
    <div>
      <header className="component-header"> Buscador de Emojis 😄 </header>
        <SearchText textChange={handleSearchChange} />
        <EmojiResults emojiData={state.filteredEmoji} />
    </div>
  );
}

export default App;
