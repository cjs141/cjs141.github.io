/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
import { Resume } from './components/photos/ResumeCopy.pdf';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <a href={Resume} rel ="noopener noreferrer" target="_blank">Resume</a>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
