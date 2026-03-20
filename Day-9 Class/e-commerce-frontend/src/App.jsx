import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHome from "./pages/AdminHome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route  path="login" element={<Login/>}/>
        <Route  path="register" element={<Register/>}/>
        <Route path='admin-home' element={<AdminHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
