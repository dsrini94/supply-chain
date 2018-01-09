import React from 'react';
import {
  List,
  Modal,
  Divider,
  Form,
  Segment,
  Grid,
  Card,
  Icon,
  Image,
  Header,
  Button,
  Input
} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import LogisticLogin from './../components/logisticLogin.jsx';
import CustomerInfo from './../components/customerProductInfo.jsx';



export default class Customer extends React.Component {

  constructor()
  {
    super();
    this.state={slidingIndex:0}
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogin()
  {
    this.setState({slidingIndex:(this.state.slidingIndex+1)})
  }

  render() {
    return (<div>
      <Grid>
        <Grid.Row style={{
            marginTop: '10px'
          }}>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Segment inverted="inverted" color="teal" >
              <Header as='h2' style={{
                  textAlign: 'center',
                  margin:'0px',
                  border:'none'
                }}>
                <span className="headers">Hello Rachel</span>
              </Header>
            </Segment>

          </Grid.Column>
          <Grid.Column width={2}>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={4} >
              <Image src ='./../../images/rachel.jpg' style={{marginTop:'50px'}}/>
            </Grid.Column>
            <Grid.Column width={8}>
                <SwipeableViews index={this.state.slidingIndex} >
                  <div style={{overflow:'hidden'}}>
                    <LogisticLogin handleLogin={this.handleLogin}/>
                  </div>
                  <div style={{overflow:'hidden'}}>
                    < CustomerInfo />
                  </div>
                </SwipeableViews>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>
      </div>
      );
  }
}
