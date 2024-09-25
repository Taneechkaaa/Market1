import { Route, Routes } from "react-router-dom";
import "./App.css";
import { House } from "./components/house/House";
import { Reproduction } from "./components/reproduction/Reproduction";
import { NewItems } from "./components/new/NewItems";
import { About } from "./components/about/About";
import { Frame } from "./components/frame/Frame";
import Layout from "./components/layout/Layout";

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
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
