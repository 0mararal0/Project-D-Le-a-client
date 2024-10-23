import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/auth/Login";
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
import { NotFound } from "./pages/error/NotFound";
import { ServerError } from "./pages/error/ServerError";
import { EditUser } from "./pages/user/EditUser";
import { History } from "./pages/user/History";
import { Sumary } from "./pages/user/Sumary";
import Private from "./components/auth/Private";
import { HomeAdmin } from "./pages/admin/HomeAdmin";
import PrivateAdmin from "./components/auth/PrivateAdmin";

import { Product } from "./pages/admin/Product";
import { Statistic } from "./pages/admin/Statistic";
import { User } from "./pages/admin/User";
import { Legal } from "./pages/Legal";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <div style={{ minHeight: "calc(100dvh - 150px)" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/product/pizza" element={<Pizza />} />
          <Route path="/product/paste" element={<Paste />} />
          <Route path="/product/salad" element={<Salad />} />
          <Route path="/product/dessert" element={<Dessert />} />
          <Route path="/product/drink" element={<Drink />} />
          <Route
            path="/user/profile"
            element={
              <Private>
                <EditUser />
              </Private>
            }
          />
          <Route
            path="/user/history"
            element={
              <Private>
                <History />
              </Private>
            }
          />
          <Route
            path="/user/sumary"
            element={
              <Private>
                <Sumary />
              </Private>
            }
          />
          <Route
            path="/admin/home"
            element={
              <PrivateAdmin>
                <HomeAdmin />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/product"
            element={
              <PrivateAdmin>
                <Product />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/statistics"
            element={
              <PrivateAdmin>
                <Statistic />
              </PrivateAdmin>
            }
          />
          <Route
            path="/admin/user"
            element={
              <PrivateAdmin>
                <User />
              </PrivateAdmin>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<ServerError />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
