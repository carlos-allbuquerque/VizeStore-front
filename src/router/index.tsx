import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../providers/AppContext";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SIgnIn";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
