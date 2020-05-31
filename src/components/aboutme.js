import React, { Component } from 'react'
import JoelPic from './photos/BusinessPic3.jpg';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className='about-body'>
        <Grid className='about-grid'>
          <Cell style={{width: '40%', height: '80%'}} col={6}  className='parent'>
            <h3 className='center'>About Me</h3>
            <p className='child'>
              Hey there folks, I'm Craig, an enthusiastic software developer, disc golfer,
              dirt biker, and family man. I started my professional experience in electronics,
              but after discovering an interest in automation, I began working towards
              a career change into software. I'll be completing my BS in Computer Science from
              Texas State University in December 2020 and am excited to put my development
              hobby to practical use. Professionally, I aim to add value to any organization
              that I'm apart of by striving for excellence. I am looking forward
              to the challenges and growth that will come with this career switch.
              <br></br><br></br>Thanks for reading! Feel free to reach out about any potential
              projects/jobs.

            </p>

          </Cell>
          <Cell col={6}>
            <div style={{ paddingTop: '100px'}}>
              <img
                className='aboutme-pic1'
                src={JoelPic}
                alt="avatar"
              />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
