import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import StreamList from "./components/StreamList";
import Movies from './components/Movies';
import Cart from './components/Cart';
import MyAboutPage from './components/About';
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StreamList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<MyAboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
