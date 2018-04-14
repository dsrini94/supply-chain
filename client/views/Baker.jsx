import React from 'react';
import {Segment, Grid, Card, Icon, Image,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class Baker extends React.Component
{
  render()
  {
    return(
      <div style={{position:'relative'}}>
        <Image style={{width:window.innerWidth}} src='./../../images/manu.jpeg' />
        <center><Header style={{fontSize:'100px',position:'absolute',top:'15%',left:'27%',color:'white'}}><span className="heroText">Manufacturer</span></Header></center>
        <Header as='h1' style={{textAlign:'center'}}><span className="headers" style={{color:'#676b72'}}>Select a Product</span></Header>
        <br/>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image as={Link} to='/bakerInfo' src='https://images-na.ssl-images-amazon.com/images/I/71FyTpYC8IL._UX385_.jpg'/>
              <center><Header as='h1'><span className="headers" style={{color:'#676b72'}}>T-Shirt</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <center><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UstXSe-Rh_l0f2zb0XgwyTQhD9Ah6Kfm_ODzvW1i9bGVJXzt'/></center>
              <center><Header as='h1'><span className="headers" style={{color:'#676b72'}}>Trousers</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwb1599dfe/images/hi-res/57227_PLCN.jpg?sw=750&sh=750&sm=fit&sfrm=png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#676b72'}}>Shorts</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='https://assets.abfrlcdn.com/img/app/product/2/232524-813340-large.jpg'/>
              <center><Header as='h1'><span className="headers" style={{color:'#676b72'}}>Joggers</span></Header></center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
