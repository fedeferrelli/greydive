import { DataProvider } from "./context/Context";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

import Links from "./components/Links";
import ShowTest from "./components/ShowTest";

function App() {
  return (
    <DataProvider>
      <div>
        <h1>greydive challenge</h1>
        <a href="https://portafolio-fedeferrelli.vercel.app/" target="_blank">
          Fede Mazza
        </a>

        <HashRouter>
          <Routes>
            <Route path="/" element={<Links />} />
            <Route path="/clientes/:testerNumber" element={<ShowTest />} />
          </Routes>
        </HashRouter>
      </div>
    </DataProvider>
  );
}

export default App;
