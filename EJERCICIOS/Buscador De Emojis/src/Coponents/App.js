import { useState } from "react"
import SearchText from "./SearchInput"
import EmojiResults from "./EmojiResult";
import filterEmoji from "../logic/filterEmoji";

function App() {

  const [state, setState] = useState({
    filteredEmoji: filterEmoji("", 5)
  })

  const handleSearchChange = event => {
    setState({
      filteredEmoji: filterEmoji(event.target.value, 3)
    })
  }

  console.log(state)

  return (
    <div>
      <h1>Buscador de Emojis 😄 </h1>
      <SearchText textChange={handleSearchChange} />
      <EmojiResults emojiData={state.filteredEmoji} />
    </div>
  );
}

export default App;
