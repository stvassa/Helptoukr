import logo from './logo.svg';
import './App.css';

import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Footer} from "./Footer/Footer";
import {MyRoutes} from "./MyRoutes/MyRoutes"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Switch,
} from "react-router-dom";

function App() {
  return (
      <div>
          <Header />
          <Router>
              <div className="App">
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route exact path="/my-routes" element={<MyRoutes />}/>
                  </Routes>
              </div>
          </Router>
          <Footer />
      </div>
  );
}

export default App;
