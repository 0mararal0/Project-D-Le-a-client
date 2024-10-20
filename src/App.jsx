import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/auth/login";
import { Signup } from "./pages/auth/Signup";
import { Navbar } from "./components/navbar/Navbar";
import { Pizza } from "./pages/product/pizza/Pizza";
import { Paste } from "./pages/product/paste/Paste";
import { Salad } from "./pages/product/salad/Salad";
import { Dessert } from "./pages/product/dessert/Dessert";
import { Drink } from "./pages/product/drink/Drink";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Order } from "./pages/Order";

function App() {
  return (
    <>
      <div style={{ minWidth: "100dvh" }}>
        {<Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/pizza" element={<Pizza />} />
          <Route path="/product/paste" element={<Paste />} />
          <Route path="/product/salad" element={<Salad />} />
          <Route path="/product/dessert" element={<Dessert />} />
          <Route path="/product/drink" element={<Drink />} />
        </Routes>
        {/* {<Footer />} */}
      </div>
    </>
  );
}

export default App;
