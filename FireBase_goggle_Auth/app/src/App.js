import "./App.css";

import { BrowserRouter } from "react-router-dom";
import MainRoute from "./Routes/MainRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
