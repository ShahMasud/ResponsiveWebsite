import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
// import Array from "./Components/Data/Data";
// import Form from "./Components/formValidation";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{background:"#131226", height:"100%"}}>
    {/* <Form/> */}
    






    <Navbar/>
    <ToastContainer/>
    {/* <Array/> */}


    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
    
      
    </div>
  );
}

export default App;
