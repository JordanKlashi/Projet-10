import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Page from "./pages/Home";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <Router>
      <Routes>
        <DataProvider>
          <Page />
          <Route path="/Projet-10" element={<Page />} />
        </DataProvider>
      </Routes>
    </Router>
  );
}

export default App;
