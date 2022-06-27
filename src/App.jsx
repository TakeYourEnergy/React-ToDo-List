import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Main from './main/main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className='container py-5'>
      <Header />
      <Main />
    </div>
  )
}

export default App;
