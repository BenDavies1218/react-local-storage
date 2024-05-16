import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

function App() {
  let [journalEntries, setJournalEntries] = useState([]);
  let [storedEntries, setStoredEntries] = useLocalStorage("journalEntries");

  useEffect(() => {
    setJournalEntries(storedEntries);

    return () => {
      setStoredEntries(journalEntries);
    };
  }, []);

  return (
    <div className="App">
      {journalEntries.length > 0 && <p>{JSON.strigify(journalEntries)}</p>}
    </div>
  );
}

export default App;
