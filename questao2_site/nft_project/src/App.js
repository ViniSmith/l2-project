import React from 'react';
import Header from './components/organisms/Header';
import CardSection from './components/organisms/CardSection';
import LearnMoreSection from './components/organisms/LearnMoreSection';
import IconsSection from './components/organisms/IconsSection';
import Footer from './components/organisms/Footer';


function App() {

  return (
    <>
      <Header />
      <CardSection />
      <div className='grid-section'>
        <LearnMoreSection />
        <section className='divider-learn-more'></section>
        <IconsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
