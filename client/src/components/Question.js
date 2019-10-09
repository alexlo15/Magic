import React, { Component } from "react";


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
      current: 0, dataSet: dataSet,
      // Blue: 0, White: 0, Red: 0, Black: 0, Green: 0,
      Blue: 0, White: 0, Red: 0, Black: 0, Green: 0,
      resultColor1: "", resultcolor2: "",
    }
    this.handleClick = this.handleClick.bind(this)

  } // end constructor


  // onClick of this choice
  handleClick(choice) {

    console.log(this.state.current);
    console.log(choice);


    // determine what was hit and add
    if (choice == "Blue") {
      this.setState({ Blue: this.state.Blue + 1 })
    } else if (choice == "Green") {
      this.setState({ Green: this.state.Green + 1 })
    } else if (choice == "Red") {
      this.setState({ Red: this.state.Red + 1 })
    } else if (choice == "White") {
      this.setState({ White: this.state.White + 1 })
    } else {
      this.setState({ Black: this.state.Black + 1 })
    }

    // if the counter runs out of questions, get results
    if (this.state.current === 9) {

      let getColorResults = () => {

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
        let maxColorValue = Math.max.apply(null, colorValues);
        const firstColor = colorKeys.filter(key => colorResults[key] === maxColorValue)
        console.log(firstColor);
        console.log(maxColorValue);
        console.log(colorValues);
        console.log(colorKeys);

        // if the array of max color answers is 2 or more,
        // we will have to split it into two separate variables
        if (firstColor.length >= 2) {
  
            let firstFinal = firstColor[0];
            let secondFinal = firstColor[1];
            console.log(firstFinal);
            console.log(secondFinal);
            return(firstFinal, secondFinal)
          
        // else the max is already 1, 
        // we'll have to splice and get a second
        } else {
        
          console.log(firstColor)
          let array2 = colorValues.splice(colorValues.indexOf(maxColorValue), 2);
          const max2 = Math.min.apply(null, array2);
          const secondColor = colorKeys.filter(key => colorResults[key] === max2);
          console.log(secondColor);
          console.log(array2);
          return(firstColor, secondColor)
        }



        this.setState({ current: 0 })
      }
      getColorResults();
      // this.setState({ Blue: 0 })
      // this.setState({ Red: 0 })
      // this.setState({ Black: 0 })
      // this.setState({ Green: 0 })
      // this.setState({ White: 0 })


    } else {
      this.setState({ current: this.state.current + 1 })
    }


  }


  render() {
    return (
      <div>
        <ScoreArea Counter={this.state.current}
          Black={this.state.Black} Blue={this.state.Blue} Red={this.state.Red}
          Green={this.state.Green} White={this.state.White} />
        <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
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

export default Question;