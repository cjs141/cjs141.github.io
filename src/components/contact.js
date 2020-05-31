import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import  BusinessPic  from './photos/BusinessPic2.jpg';

class Contact extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Craig Sandlin</h2>
            <img
              className='business-contact-pic'
              src={BusinessPic}
              alt="avatar"
              style={{height: '250px'}}
            />

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className='contact-list'>

              <List>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    1 (512) 975 5757
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    /in/CraigSandlin
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    cjs141@txstate.edu
                  </ListItemContent>
                </ListItem>

              </List>

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
