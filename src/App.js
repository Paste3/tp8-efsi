import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contacto from "./screens/Contacto";
import Estadistica from "./screens/Estadistica"
import Layout from "./components/Layout";
import Persona from "./screens/Persona";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/persona/:IdPersona" element={<Persona />}></Route>
            <Route path="/estadistica" element={<Estadistica />}></Route>
            <Route path="*" element={<p className="colorB">404</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
