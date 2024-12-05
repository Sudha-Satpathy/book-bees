
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Register from "./components/Register";
import Home from "./Pages/Home";
import { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Routes,Route,
  Navigate
} from 'react-router-dom'
import { useAuth } from "./contextApi/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/courses" element={ authUser?<Courses/>:<Navigate to={"/register"}/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/register" element={ <Register/>}/>
      </Routes>
    </Router>
    <Toaster />
    </>
  );
}

export default App;
