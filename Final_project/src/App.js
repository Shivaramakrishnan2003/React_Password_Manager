import './App.css';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components//Layout";
import Login from "./Components//Login";
import Signup from './Components//Signup';


function App() {
  return (
      // <div className="App">
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route path='main' element={<Main/>}/>
                  <Route path="login" element={<Login/>} />
                  <Route path="signup" element={<Signup/>} />
                </Route>
              </Routes>
          </BrowserRouter>
      // </div>
  );
}

export default App;
