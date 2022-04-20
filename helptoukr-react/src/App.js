import logo from './logo.svg';
import './App.css';

import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Footer} from "./Footer/Footer";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
            </Routes>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
