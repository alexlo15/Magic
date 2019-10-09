import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Card from '../components/Card';
import quizQuestions from "../utils/quizQuestions";
import Question from "../components/Question";
// import { mtgSearch } from "../utils/API"

class Quiz extends Component {

    state = {
        showQuestions: false,
        showIntro: true,
        counter: 0,
        questionId: 1,
        question: "",
        answerOptions: [],
        answer: "",
        colorCount: {
            Green: 0,
            White: 0,
            Blue: 0,
            Red: 0,
            Black: 0
        },
        resultColor1: '',
        resultColor2: '',
    };

    // start quiz goes to question 1 from 
    // the intro card
    startQuiz = e => {
        this.setState({
            showQuestions: true,
            showIntro: false,
        });
    };

    ques = () => {

        const answerOptions = quizQuestions.map(question => question.answers)
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: answerOptions[0]
        })

    };


    render() {

        //Toggles SHOW state to show intro or questions
        const intro = this.state.showIntro;
        let card;
        if (intro) {
            card = <Card title={"Commander Personality Quiz"}>
                <form onSubmit={this.startQuiz}>
                    <button type="submit" className="btn btn-block btn-dark mt-2">
                        Start!
                    </button>
                </form>
            </Card>
        } else {
            card = <Question>

            </Question>
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
                    <Row>
                        <Column xs={12} md={4}>
                            {card}
                        </Column>

                    </Row>
                </Container >
            </>
        );


    }

}

export default Quiz;