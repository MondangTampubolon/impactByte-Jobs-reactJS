  
import React from 'react';

import './App.css';
import './component/cardPhilosophy';
import Header from './layout/Header/header';
import Home from "./pages/home";
import SearchJobs from './pages/searchJobs';
import DetailBlog from './pages/detailBlog';

function App() {

  return (
    <>
      <Header home={Home} search={SearchJobs} detailBlog={DetailBlog} />
    </>
  );
}

export default App;