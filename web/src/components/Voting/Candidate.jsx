import React from 'react'
import {Row, Col} from 'reactstrap'


export default function Candidate (props){
    return(
        <Row>
          <Col xs="2.5" style={{margin: 'auto'}}>
          <img style={{width:125, height:125}} src={props.data.profilePic} alt="Candidate"/>
          </Col>
          <Col style={{textAlign: 'left'}} xs="8">
              <h3>{props.data.firstName} {props.data.lastName}</h3>
              <h5>Party: {props.data.party.name}</h5>
              <p>
              {props.data.party.manifesto}
              </p>
          </Col>
          <Col style={{margin: 'auto'}} xs="1">
          {props.children}
          
          </Col>

          </Row>
    )
}