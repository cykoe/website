import React from 'react';
import './Apps.scss';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './col.css';

const App: React.FC = () => {
  return (
      // TODO: make it responsive
      <div className="App">
        <div className="App-background">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
};
  );

export default App;
