# Portfolio Website
> Creator: Craig Sandlin

> Project Description: Used ReactJS to develop a personal website to display my resume, projects, and contact
info.

## Technologies
* ReactJS


## Code Examples
>Project View
```
class Projects extends Component {

  render() {
    return(
      <div>
        <Grid>
          <Cell col={12}>
            <div className='projects-grid'>
              <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
                <CardTitle
                  style={{color: '#FFF', fontWeight: '1500', height: '200px',
                          background: 'url(https://blog.radware.com/wp-content/uploads/2019/03/AdobeStock_103497099.jpeg) center / cover'}}
                >
                  GUI Automation | Python/VBA
                </CardTitle>
                <CardText>Tasks can be automated so long as the sequence of instructions is known beforehand. Works on all software including proprietary software with no API. </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/cjs141/GUI-Automation" target="_blank">Github</Button>
                </CardActions>
              </Card>

              <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
                <CardTitle
                  style={{color: '#FFF', fontWeight: '100', height: '200px',
                          background: 'url(https://www.hellotech.com/blog/wp-content/uploads/2019/12/What-Is-a-CPU_Understanding-the-Basics.jpg) center / cover'}}
                >
                  CPU Emulator | C++
                </CardTitle>
                <CardText>Functionality of a five-stage pipelined CPU with an L1 cache using write-back, write allocate with a round robin replacement policy.</CardText>
                <CardActions border>
                  <Button colored href="https://github.com/cjs141/CPU-Emulator" target="_blank">Github</Button>
                </CardActions>
              </Card>

              <Card shadow={5} style={{width: '450', height:'300', margin: 'auto'}}>
                <CardTitle
                  style={{color: '#fff', fontWeight: 'bold', height: '200px',
                          background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXaTllNLHR0aT4TpJF1OdOZjLN1579MpuVGJ_IvwqFr1fUCo6IQ) center / cover'}}
                >
                  Portfolio Website | ReactJS</CardTitle>
                <CardText>Personal website to display my resume, projects, and contact info. </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/cjs141/cjs141.github.io" target="_blank">Github</Button>
                </CardActions>
              </Card>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
```

## Status
Project is: Open, plan to update the projects view in the coming months
