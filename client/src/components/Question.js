import React, { Component } from "react";
import "./Results.css"
// import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Card from '../components/Card';
// import Quiz from "../pages/Quiz";
// import { cpus } from "os";
// import { userInfo } from "os";

class Question extends Component {
  constructor(props) {
    super(props)

    var dataSet = [
      {
        question: 'I am task oriented in order to achieve certain goals.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      {
        question: 'I get bored easily when disscussing abstract concepts.',
        answers: [
          {
            type: 'Red',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Green',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Blue',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Black',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      {
        question: 'I like to try things out myself.',
        answers: [
          {
            type: 'Black',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Blue',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'White',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'Green',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Red',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      {
        question: "I like to know where I'm going before I leave the house.",
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Red',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Black',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      // question #5
      {
        question: 'I believe there is a logical explanation for everything.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      // question #6 here 
      {
        question: 'I tend to keep my social circle small.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      // question #7
      {
        question: 'I like to share my ideas with others.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      // question #8
      {
        question: 'I enjoy using social media.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      // question #9
      {
        question: 'I always express concern for others when making decisions.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      },
      // question #10
      {
        question: 'I like to try new things.',
        answers: [
          {
            type: 'Blue',
            content: 'YEP! THAT IS ME!'
          },
          {
            type: 'Black',
            content: 'I HAVE NO IDEA!'
          },
          {
            type: 'Red',
            content: "NO WAY NOT ME!"
          },
          {
            type: 'White',
            content: 'MORE OFTEN THAN NOT!'
          },
          {
            type: 'Green',
            content: 'MAYBE, ON A GOOD DAY!'
          }
        ]
      }
    ];

    this.state = {
      showQuiz: true, resultButton: false,
      current: 0, dataSet: dataSet,
      Blue: 0, White: 0, Red: 0, Black: 0, Green: 0,
      resultColor1: "", resultColor2: "",
      userInfo: this.props.user,
      guild: "", guildpic: "",

    }
    this.handleClick = this.handleClick.bind(this)

  } // end constructor

  componentDidMount() {

    console.log(this.state.userInfo);
  };



  // onClick of this choice
  handleClick(choice) {

    // console.log(this.state.current);
    // console.log(choice);


    // determine what was hit and add
    if (choice === "Blue") {
      this.setState({ Blue: this.state.Blue + 1 })
    } else if (choice === "Green") {
      this.setState({ Green: this.state.Green + 1 })
    } else if (choice === "Red") {
      this.setState({ Red: this.state.Red + 1 })
    } else if (choice === "White") {
      this.setState({ White: this.state.White + 1 })
    } else {
      this.setState({ Black: this.state.Black + 1 })
    }

    // if the counter runs out of questions, get results
    if (this.state.current === 9) {

      const getColorResults = () => {

        let colorResults = {
          White: this.state.White,
          Blue: this.state.Blue,
          Black: this.state.Black,
          Red: this.state.Red,
          Green: this.state.Green
        }

        // gets the colors keys and values, 
        // starts doing math and finds top
        let colorValues = Object.values(colorResults);
        let colorKeys = Object.keys(colorResults);
        // sets the colorValue for #1 highest
        let maxColorValue = Math.max.apply(null, colorValues);
        // identifies the key for that matching highest value
        const firstColor = colorKeys.filter(key => colorResults[key] === maxColorValue)


        // console.log(firstColor);
        // console.log(secondColor);
        // console.log(maxColorValue);
        console.log(colorValues);
        // console.log(colorKeys);

        // if the array of max color answers is 2 or more,
        // we will have to split it into two separate variables
        if (firstColor > 1) {

          let firstFinal = firstColor[0];
          let secondFinal = firstColor[1];

          this.setState({ current: 0 });
          this.setState({ showQuiz: false });
          this.setState({ resultButton: true });
          this.setState({ resultColor1: firstFinal });
          this.setState({ resultColor2: secondFinal });
          console.log(this.state.resultColor1);
          console.log(this.state.resultColor2);
          return (firstFinal, secondFinal);

          // else the max is already 1 color, 
          // we'll have to splice and get a second
        } else {

          let firstFinal = firstColor;
          let arrayFor2 = colorValues.sort((a, b) => (a > b) ? 1 : -1)
          console.log(arrayFor2);
          // array2 is going to be the highest number split from the array, 
          let array2 = arrayFor2.splice(4, 1);
          // so that when we do mathMax now the highest element will be #2 technically
          let secondNum = Math.max.apply(null, arrayFor2);
          console.log(secondNum);
          const secondTry = colorKeys.filter(key => colorResults[key] === secondNum);
          let secondFinal;
          if (!secondTry[1]) {
            const secondFinal = secondTry;
            console.log(secondFinal);
            this.setState({ resultColor1: firstFinal });
            this.setState({ resultColor2: secondFinal });
            
          } else {
            const secondFinal = secondTry[0];
            console.log(secondFinal);
            this.setState({ resultColor1: firstFinal });
            this.setState({ resultColor2: secondFinal });
          }
          console.log(firstFinal);
          // let colorValues = Object.values(colorResults);
          // let colorKeys = Object.keys(colorResults);
          // let maxColorValue2 = Math.max.apply(null, array2);
          // const firstColor = colorKeys.filter(key => colorResults[key] === maxColorValue)


          // const max2 = Math.min.apply(null, array2);
          // const secondFinal = colorKeys.filter(key => colorResults[key] === max2);
          // let ourSecond;
          // if (secondFinal > 1) {
          //   let ourSecond = secondFinal[0];
          //   this.setState({ resultColor2: ourSecond })
          // }

          // console.log(firstColor);
          // console.log(ourSecond);
          // console.log(array2);
          // console.log(maxColorValue);
          // this.setState({resultColor1: firstColor}, {resultColor2: secondFinal})
          this.setState({ current: 0 });
          this.setState({ showQuiz: false });
          this.setState({ resultButton: true });
          this.setState({ resultColor1: firstFinal });
          this.setState({ resultColor2: secondFinal });
          console.log(this.state.resultColor1);
          console.log(this.state.resultColor2);
          return (firstFinal, secondFinal);


        }

      }


      getColorResults();

    } else {
      this.setState({ current: this.state.current + 1 })
    }


  }


  render() {

    const doingQuiz = this.state.showQuiz;
    let card;
    if (doingQuiz) {
      card = <>
        <Row>
          <Column xs={12} md={6} lg={6}>
            <ScoreArea Counter={this.state.current}
              Black={this.state.Black} Blue={this.state.Blue} Red={this.state.Red}
              Green={this.state.Green} White={this.state.White} />
          </Column>
          <Column xs={12} md={6} lg={6}>
            <Card>
              <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
            </Card>
          </Column>
        </Row>
      </>
    } else {
      card =
        <>
          <ResultsArea user={this.state.userInfo} Color1={this.state.resultColor1} Color2={this.state.resultColor2} />
          <GuildArea Guild={this.state.guild} Guildpic={this.state.guildpic} />
        </>
    }

    return (
      <div>
        {card}
      </div>
    )
  }
}

// Ques, Answer, AnswerList make up the Quiz Area
function Ques(props) {
  return (
    <h1>{props.dataSet.question}</h1>
  )
}
function Answer(props) {
  return (
    <div>
      <button onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}
function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer key={props.dataSet.answers[i].type.toString()} choice={props.dataSet.answers[i].type.toString()} handleClick={props.handleClick} answer={props.dataSet.answers[i].content} />)
  }
  return (
    <div>
      {answers}
    </div>
  )
}

// Quiz Area
function QuizArea(props) {
  return (
    <div>
      <Ques dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  )
}

// Score Area
function ScoreArea(props, Colors) {
  return (
    <div>
      <h3>Question: {props.Counter + 1}</h3>
      <h4>W: {props.White}</h4>
      <h4>U: {props.Blue}</h4>
      <h4>B: {props.Black}</h4>
      <h4>R: {props.Red}</h4>
      <h4>G: {props.Green}</h4>
    </div>
  )
}

function ResultsArea(props) {
  return (
    <div>
      <Row>
        <Column xs={12} md={6} lg={6}>
          <Card title={"Congrats! you finished!"}>
            <p>Thanks for taking the time, {props.user}</p>
            <p>Your first color is: {props.Color1}</p>
            <p>Your second color is: {props.Color2}</p>
          </Card>
        </Column>
      </Row>
    </div>
  )
}

function GuildArea(props) {

  return (
    <div>
      <Row>
        <Column xs={12} md={6} lg={6}>
          <Card title={"Your Guild is..."}>
            <h3>{props.Guild}</h3>
            <p>{props.Guildpic}</p>
          </Card>
        </Column>
      </Row>
    </div>
  )
}


export default Question;