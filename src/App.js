import React, { Component } from 'react';
import { Router } from 'mirrorx'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Routes from '@/routes'

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Header />
          <Footer />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
