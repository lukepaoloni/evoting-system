import React from 'react'
import {Row, Col} from 'reactstrap'

export default function Candidate (props){
    return(
        <Row>
          <Col xs="2" style={{margin: 'auto'}}>
          <img style={{width:125, height:125}} src={props.data.image} alt="Candidate"/>
          </Col>
          <Col style={{textAlign: 'left'}} xs="9">
              <h3>{props.data.name}</h3>
              <p>
              {props.data.manifesto}
              </p>
          </Col>
          <Col style={{margin: 'auto'}} xs="1">
          {props.children}
          
          </Col>

          </Row>
    )
}