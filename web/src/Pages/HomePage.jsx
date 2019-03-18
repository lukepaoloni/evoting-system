import React, {Component} from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

export default class HomeView extends Component{
    constructor(props){
        super(props)
        this.state = {
          };
    }
    render() {
        return(
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">About Online Voting</h1>
                        <section>
                            <p className="lead">Voting has started now. Voting will close at ...</p>
                            <p className="lead">
                                <Button color="primary" size="lg" block>Login and Vote</Button>
                            </p>
                        </section>
                    </Container>
                </Jumbotron>

                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-4">
                        <h2>Security <span className="fa fa-shield-alt"/></h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Speed <span className="fa fa-running"/></h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Usability <span className="fa fa-blind"/></h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    </div>
            </div>
        </div>
        )
    }
    
}