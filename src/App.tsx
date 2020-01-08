import React from 'react';
import logo from './logo.svg';
import './Apps.scss';
import Header from './header';
import Main from './main';
import Footer from './footer';

const App: React.FC = () => {
  return (
      <div className="App">
        <div className="App-background">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
  );
};

export default App;
