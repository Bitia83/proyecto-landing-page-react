import React from 'react';
import GlobalStyle from './globalStyles';
import { MusicSection, Navbar, DiscoverSection,  JoinSection, FooterSection}  from './componentes';

function App() {
  return (
    <>
       <GlobalStyle />
      <Navbar />
      <MusicSection />
     <DiscoverSection/>
      <JoinSection/> 
      <FooterSection />
      </>
  );
}
export default App;
