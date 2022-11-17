import React from 'react';
import Header from './components/organisms/Header';
import CardSection from './components/organisms/CardSection';
import LearnMoreSection from './components/organisms/LearnMoreSection';
import IconsSection from './components/organisms/IconsSection';


function App() {
  
  return (
    <div>
      <Header/>
      <CardSection/>
      <div className='grid-section'>
        <LearnMoreSection/>
        <section className='divider' style={{marginTop: '150px', marginBottom: '150px'}}></section>
        <IconsSection/>
      </div>
    </div>
  );
}

export default App;
