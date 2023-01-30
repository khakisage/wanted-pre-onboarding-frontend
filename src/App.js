// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Todo from "./Pages/Todo";
import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
