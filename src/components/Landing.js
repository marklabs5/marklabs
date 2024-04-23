import * as React from 'react'
import '../css/xmark.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Intro from './Intro';
import Network from './Network';
import Partners from './Partners';
import Advantages from './Advantages';
import Functions from './Functions';
import FAQ from './FAQ';
import Application from './Application';
import News from './News';
import Footer from './Footer';

function Landing () {
    return (
      <div className="App bg-gradient-to-b from-[#03081E] to-[#0D5085]">
        <div className='relaitve'>
          <img src="./img/intro_back.png" className="absolute top-0 left-0 hidden sm:block"></img>
          <img src="./img/intro_ecllipse.png" className='absolute top-0 right-0 hidden sm:block'></img>
          <Navbar />
          <Intro />        
        </div>
        <Network />
        <Partners />
        <Advantages />
        <Functions />
        <FAQ />
        <Application />
        <News />
        <Footer />
      </div>
    );
}

export default Landing;
