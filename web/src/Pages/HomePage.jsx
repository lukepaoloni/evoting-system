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
                <Container>
                    <Jumbotron>
                        <h1 className="display-3">Abpout Online Voting</h1>
                        <p>As technology advances and more transactions become electronic, many wonder when voting will truly enter the digital age. There are many issues to consider when it comes to exercising the right to vote through a computer. This includes building trust in the process, preserving secrecy of the ballot and ensuring citizens are not coerced or intimidated when using technology to vote.</p>
                        <p className="lead">
                            <Button color="primary">Vote Now</Button>
                        </p>
                    </Jumbotron>
                </Container>
        </div>
        )
    }
    
}