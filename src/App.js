import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MusicSection } from './componentes';
import { Navbar } from './componentes';
import { DiscoverSection } from './componentes';
import { JoinSection } from './componentes';
import { FooterSection } from './componentes';

function App() {
  return (
    
    <Router>
     
      <GlobalStyle />
      <Navbar />
      <MusicSection />
      <DiscoverSection />
     <JoinSection />
      <FooterSection/>
    </Router>
  );
}
export default App;
