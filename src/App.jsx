import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  return (
      <>
    <Router>
      
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/creator/:name" element={<ViewCreator />} />
        <Route path="/edit/:name" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </Router>
      </>
  );
}

export default App;
