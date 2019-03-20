import React from 'react'
import { Button} from 'reactstrap'

import strings from '../../lang/strings';

import './style.css'

export default class Popup extends React.Component {
    render() {
        strings.setLanguage(sessionStorage.getItem("lang"))
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{strings.vote_confirm}</h1>
            <p style={{fontSize:24}}>you are voting for <span style={{fontWeight:'bold'}}>{this.props.detail.firstName} {this.props.detail.lastName}</span><br/>
            pleas click ok to confirm vote. click cancle to pick another candidate</p>
          
          <Button style={{marginRight: 20}}  color="info" onClick={this.props.confirmPopup}>{strings.vote_confirm}</Button>
          <Button  style={{marginLeft: 20}}  color="danger" onClick={this.props.closePopup}>cancel</Button>        
          </div>
        </div>
      );
    }
  }