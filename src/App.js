import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Utils/Routes";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
