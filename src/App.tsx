import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { SignIn } from "./pages/signIn";
import { SignUp } from "./pages/signUp";

function App () {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>} path="dashboard" />
        <Route element={<SignIn/>} path="signin" />
        <Route element={<SignUp/>} path="signup" />
      </Routes>
    </BrowserRouter>
  )
}

export default App