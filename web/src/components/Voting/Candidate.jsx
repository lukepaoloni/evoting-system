import React from 'react'
import {Row, Col} from 'reactstrap'

export default function Candidate (props){
    return(
        <Row>
          <Col xs="2.5" style={{margin: 'auto'}}>
          <img style={{width:125, height:125}} src={"data:image/jpeg;base64,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"} alt="Candidate"/>
          </Col>
          <Col style={{textAlign: 'left'}} xs="8">
              <h3>{props.data.firstName} {props.data.lastName}</h3>
              <h5>Party: {props.data.party.name}</h5>
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