import { createRoot } from "react-dom/client";
import { AuthWrapper } from "./context/auth.context.jsx";
import { BrowserRouter } from "react-router-dom";
import { AddProductProvider } from "./context/addproduct.context.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    <BrowserRouter>
      <AddProductProvider>
        <App />
      </AddProductProvider>
    </BrowserRouter>
  </AuthWrapper>
);
