import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron/Jumbotron';
import Container from '../components/Boxes/Container';
// import Row from '../components/Row';
// import Column from '../components/Column';
import Card from '../components/Boxes/Card/Card';
// import quizQuestions from "../utils/quizQuestions";
import Question from "../components/Boxes/Question/Question";
// import { mtgSearch } from "../utils/API"

class Quiz extends Component {

    state = {
        showQuestions: false,
        showIntro: true,
        userName: "",
        error: null,
        // counter: 0,
        // questionId: 1,
        // question: "",
        // answerOptions: [],
        // answer: "",
        // colorCount: {
        //     Green: 0,
        //     White: 0,
        //     Blue: 0,
        //     Red: 0,
        //     Black: 0
        // },
        // resultColor1: '',
        // resultColor2: '',
    };

    // start quiz goes to question 1 from 
    // the intro card

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    startQuiz = () => {
        this.setState({
            showQuestions: true,
            showIntro: false,
        });
        console.log(this.state.userName);
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.userName === '') {
            return this.setState({ error: 'Please enter your name.' });
        }

        this.startQuiz();

    };


    render() {

        //Toggles SHOW state to show intro or questions
        const intro = this.state.showIntro;
        let card;
        if (intro) {
            card = <Card title={"Commander Personality Quiz"}>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name!"
                        onChange={this.handleInputChange}
                        value={this.state.userName}
                        name="userName"
                    />
                    {this.state.error && !this.state.userName.length && (
                        <div className="alert alert-danger my-2">
                            {this.state.error}
                        </div>
                    )}
                    <button type="submit" className="btn btn-block btn-dark mt-2">
                        Start Quiz!
                  </button>
                </form>
            </Card>
        } else {
            card = <Card>
                <Question user={this.state.userName}>
                </Question>
            </Card>
        }

        // Return is here
        return (
            <>
                <Jumbotron
                    fluid
                    bg={'dark'}
                    color={'light'}
                    pageTitle={'Search For A Commander!'}
                />
                <Container>
                    {/* <Row>
                        <Column xs={12} md={12} lg={12}> */}
                    {card}
                    {/* </Column>

                    </Row> */}
                </Container >
            </>
        );


    }

}

export default Quiz;