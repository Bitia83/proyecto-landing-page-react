import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MusicSection } from './componentes';
import { Navbar } from './componentes';
import { DiscoverSection } from './componentes';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <MusicSection />
      <DiscoverSection />
    </Router>
  );
}
export default App;
