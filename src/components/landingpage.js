import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css'
import  BusinessPic2 from './photos/BusinessPic2.jpg';

class LandingPage extends Component {
  render() {
    return(
      <div style = {{width : '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src={BusinessPic2}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Craig Sandlin</h1>

              <hr/>
              <p>C++ | Python | Java | VBA</p>
              <div className='social-links'>
                <a href="https://www.linkedin.com/in/craig-sandlin-883315138/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/cjs141" rel="noopener noreferrer" target="_blank">
                  <i className='fa fa-github-square' aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
