import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import NotePage from "./Pages/NotePage";
import NotesPage from "./Pages/NotesPage";

function App() {

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesPage} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
