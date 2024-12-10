import "./App.css";
import NoteForm from "./Components/NoteForm";
import ShowAllNotes from "./Components/ShowAllNotes";

function App() {

  return (
    <div className="App">
      <NoteForm></NoteForm>
      <ShowAllNotes></ShowAllNotes>
    </div>
  );
}

export default App;
