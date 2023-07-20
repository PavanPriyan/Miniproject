import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login1 from './Pages/Login1';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Reg from './Pages/Reg';
import Home from './Pages/home';
import Courses from './Pages/Courses';

import Mba from "./Pages/mba";
import Llb from "./Pages/llb";
import Mca from "./Pages/mca";
import Mphy from "./Pages/mphy";
import Pgdm from "./Pages/pgdm";
import Mcom from "./Pages/mcom";
import Apply from './Pages/Apply';
import Upload from './Pages/Upload';
import Payment from './Pages/Payment';


function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Login1/>}/>
      
      <Route path='/Reg' element={<Reg/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path="/mba" element={<Mba/>}/>
        <Route path="/llb" element={<Llb/>}/>
        <Route path="/mca" element={<Mca/>}/>
        <Route path="/mcom" element={<Mcom/>}/>
        <Route path="/mphy" element={<Mphy/>}/>
        <Route path="/pgdm" element={<Pgdm/>}/>
        <Route path='/Apply' element={<Apply/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Payment' element={<Payment/>}/>

      


   </Routes>
   
   </BrowserRouter>

    </div>
  );
}

export default App;
