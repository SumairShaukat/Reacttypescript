import * as React from "react";
import { Loading } from "./components/Loading";
import { CharacterInformation } from "./components/CharacterInformation";
import { fetchCharacter, CharacterType } from "./components/Characters";
import "./App.css";

function App() {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div className="App">
      {character && <CharacterInformation characters={character} />}
    </div>
  );
}

export default App;
