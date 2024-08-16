import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./Context/Notes/NoteState";
import About from "./Components/About";
import ContactUS from "./Components/ContactUS";
import Home from "./Components/Home";


function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUS' element={<ContactUS />} /> 
        </Routes>  
      </BrowserRouter>
    </NoteState>

  );
}

export default App;
