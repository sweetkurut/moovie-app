import "./App.sass";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Studio from "./pages/studio/studio";
import Collection from "./pages/collection/collection";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studios" element={<Studio />} />
        <Route path="/collection-films" element={<Collection />} />
      </Routes>
    </Layout>
  );
}

export default App;
