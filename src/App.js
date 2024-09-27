import { useEffect } from 'react';
import axios from 'axios'
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { AboutUs } from './pages/aboutus/AboutUs';
import { Shop } from './pages/shop/Shop';
import { Contact } from './pages/contact/Contact';
import './App.css';



function App() {

  // useEffect(()=>  {
  //    function fetchProucts (){
  //     // try {
  //     //   const data = await axios.get('https://fakestoreapi.com/products')
  //     //   console.log(data);
  //     // } catch (error) {
  //     //   console.log(error);
  //     // }
  //     const data = axios.get('https://fakestoreapi.com/products')
  //     .then((res) =>{
  //       console.log(res);
        
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  //   }
  //   fetchProucts()
    
  // }, [])



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/about-us' element={<AboutUs/>}/>
        <Route exact path='/contact-us' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
