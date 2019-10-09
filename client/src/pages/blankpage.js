import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Card from '../components/Card';
import { mtgSearch } from "../utils/API"

class Blank extends Component {


    render() {

        return (
            <>
                <Jumbotron
                    fluid
                    bg={'dark'}
                    color={'light'}
                    pageTitle={'Search For A Commander!'}
                />
                <Container>
                    <Row>
                        <Column xs={12} md={4}>
                            <Card title={"Commander Personality Quiz"}>
                            <form onSubmit={this.startQuiz}>
                                <button type="submit" className="btn btn-block btn-dark mt-2">
                                    Start!
                            </button>

                            </form>
                            
                            
                        </Card>
                        
                    </Column>
                    
                </Row>
            </Container >
</>
        );


    }

}

export default Blank;