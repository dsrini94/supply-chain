import React from 'react';
import {Segment, Grid, Card, Icon, Image,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class DashBoard extends React.Component {
  render() {
    return (<Segment inverted style={{
        backgroundColor: '#120426',
        height:window.innerHeight
      }}>

      <Header as='h1' style={{marginTop:window.innerHeight/5,textAlign:'center',marginBottom:'20px'}}><span className='headers'>Select your Role</span></Header>
      <div >
      <Grid style={{width:window.innerWidth, margin:'0px auto'}}>
        <Grid.Row >
          <Grid.Column width={3}>
            <center>
              <Link to='/baker'>
              <Image src='./../../images/b.jpg' circular style={{width:175,height:175}}/>
              <Header><span className="headers">HP Bakers</span></Header>
              </Link>
            </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/log1'>
            <Image src='data:image/png;base64,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' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">FoodHaul Logistics</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/dc'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvCzFk4tY7xGPpqjAkjMyzsY6lgq9ejKoI653qOtJV45_wUuOCw' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Distribution Center</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
            <Link to='/log2'>
            <Image src='data:image/png;base64,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' circular style={{width:175,height:175}}/>
            </Link>
            <Header><span className="headers">TimBrothers Logistics</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/retailer'>
            <Image src='data:image/png;base64,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' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Retailer</span></Header>
          </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </Segment>);
  }
}
