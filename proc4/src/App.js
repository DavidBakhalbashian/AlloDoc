
import './App.css';
import Footer from './Footer/footer';
import Header from './Header/header';
import Main from './Main/main'

import ru from './local/ru.json'
import en from './local/en.json'

import { useState } from 'react';
import TransletCon from './constex/TranslateContext';

import AboutDoctor from './Page2/page2';
import { Outlet, Route, Routes } from 'react-router-dom';
import Balance from './Balance/balance';
import Zapis from './zapis';
function App() {
//  document.title ="AlloDoc"
  const lang = ru || en
  const [len, setlen] = useState(lang)
  const lenq = len === ru ? "RU" : "EN"

  return (
    <>
      <TransletCon.Provider value={len}>
        <Header setlen={setlen} len={lenq} />
       
        <Routes>
    <Route path='/' element = {<Main />}></Route>
    <Route path='/AboutDoctor' element = {<AboutDoctor />}></Route>
    <Route path='/Balance' element = {<Balance />}></Route>
    <Route path='/Zapis' element ={<Zapis />}></Route>
   </Routes>
   <Outlet />
   
        <Footer /> 
      </TransletCon.Provider>
        
       

   
    </>
  );
}

export default App;
