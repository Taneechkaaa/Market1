import { Route, Routes } from "react-router-dom";
import "./App.css";
import { House } from "./pages/house/House";
import { Reproduction } from "./pages/reproduction/Reproduction";
import { NewItems } from "./pages/new/NewItems";
import { About } from "./pages/about/About";
import { Frame } from "./pages/frame/Frame";
import Layout from "./pages/layout/Layout";
import { Favorites } from "./pages/favorites/Favorites";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/house" element={<House />}></Route>
            <Route path="/reproduction" element={<Reproduction />}></Route>
            <Route path="/new" element={<NewItems />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/frame" element={<Frame />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
