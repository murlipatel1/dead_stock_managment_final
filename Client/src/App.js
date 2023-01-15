import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Histroy from './Pages/History';
import Messages from './Pages/Messages';
import Charts from './Pages/Charts';
import ProductInfo from './Elements/productInfo';
import DeadStock from './Pages/DeadStock';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
// import Blogs from '';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/Dashboard' element={ <Dashboard key = "dashboard" /> } />
      <Route path='/History' element = { <Histroy key="history" />} />
      <Route path='/Messages' element = {<Messages key="message" />}/>
      <Route path='/Charts' element = { <Charts key="charts" /> }/>
      <Route path='/ProductInfo' element = {<ProductInfo key="ProductInfo" />} />
      <Route path='/DeadStock' element = {<DeadStock />}/>
      <Route path='/' element = { <HomePage /> }/>
      <Route path='/about' element = {<AboutUs />}/>
      {/* <Route path='/Blogs' element = {<Blogs />}/> */}
     </Routes>
   </BrowserRouter>
  );
}

export default App;
