import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Todo from "./Pages/Todo";
import Header from "./Components/Header";
function App() {
  let isAuthorized = localStorage.getItem("JWT");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={isAuthorized ? <Todo /> : <Signin />} />
        <Route path="/signup" element={isAuthorized ? <Todo /> : <Signup />} />
        <Route path="/todo" element={isAuthorized ? <Todo /> : <Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
