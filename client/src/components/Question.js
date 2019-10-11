import React, { Component } from "react";
import "./Results.css"
// import Container from "./Container";
import Row from "./Boxes/Row";
import Column from "./Boxes/Column";
import Card from './Boxes/Card';
import { saveUser } from "../utils/API";
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
      guild: "",

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
          Green: this.state.Green,
        }

        // gets the colors keys and values, 
        // starts doing math and finds top       
        // sets the colorValue for #1 highest
        // identifies the key for that matching highest value
        let colorValues = Object.values(colorResults);
        let colorKeys = Object.keys(colorResults);
        let maxColorValue = Math.max.apply(null, colorValues);
        const firstColor = colorKeys.filter(key => colorResults[key] === maxColorValue)

        // console.log(firstColor); console.log(secondColor); console.log(maxColorValue); console.log(colorKeys);
        console.log(colorValues);

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
          console.log(firstFinal);
          console.log(secondFinal);
          console.log(this.state.resultColor1);
          console.log(this.state.resultColor2);
          return (firstFinal, secondFinal);

          // else the max is already 1 color, 
          // we'll have to splice and get a second
        } else {

          let firstFinal = firstColor;
          let arrayFor2 = colorValues.sort((a, b) => (a > b) ? 1 : -1)
          // console.log(arrayFor2);
          // array2 is going to be the highest number split from the array, 
          arrayFor2.splice(4, 1);
          // so that when we do mathMax now the highest element will be #2 technically
          let secondNum = Math.max.apply(null, arrayFor2);
          // console.log(secondNum);
          const secondTry = colorKeys.filter(key => colorResults[key] === secondNum);
          let secondFinal = secondTry;
          console.log(secondTry);
          if (!secondTry[1]) {
            // const secondFinal = secondTry;
            console.log(firstFinal);
            console.log(secondFinal);
            this.setState({ resultColor1: firstFinal });
            this.setState({ resultColor2: secondFinal });

          } else {
            const secondFinal = secondTry[0];
            console.log(firstFinal);
            console.log(secondFinal);
            this.setState({ resultColor1: firstFinal });
            this.setState({ resultColor2: secondFinal });
          }

          console.log(firstFinal);
          console.log(secondFinal);
          this.setState({ current: 0 });
          this.setState({ showQuiz: false });
          this.setState({ resultButton: true });

          const guildPic = (oneColor, twoColor) => {

            const saveMyScore = (my1, my2, myG) => {
              saveUser({
                userName: this.state.userInfo,
                color1: my1.toString(),
                color2: my2.toString(),
                guildMatch: myG,
              })
                .then(res => console.log("results posted"))
                .catch(err => console.log(err));
            };
            let firstGuild = oneColor;
            let secondGuild;
            if (!twoColor[1]) {
              secondGuild = twoColor;
            } else {
              secondGuild = twoColor[0];
            }
            console.log(firstGuild);
            console.log(secondGuild);
            if ((firstGuild == "Red" & secondGuild == "Green") || (firstGuild == "Green" & secondGuild == "Red")) {
              console.log("gruul");
              this.setState({ guild: "Gruul Clan" });
              saveMyScore(firstGuild, secondGuild, "Gruul Clan");

            }
            // 2 boros
            else if ((firstGuild == "Red" && secondGuild == "White") || (firstGuild == "White" && secondGuild == "Red")) {
              console.log("boros");
              this.setState({ guild: "Boros Legion" });
              saveMyScore(firstGuild, secondGuild, "Boros Legion");

            }
            // 3 izzet
            else if ((firstGuild == "Red" && secondGuild == "Blue") || (firstGuild == "Blue" && secondGuild == "Red")) {
              console.log("izzet");
              this.setState({ guild: "Izzet League" });
              saveMyScore(firstGuild, secondGuild, "Izzet League");

            }
            // 4 rakdos
            else if ((firstGuild == "Red" && secondGuild == "Black") || (firstGuild == "Black" && secondGuild == "Red")) {
              console.log("rakdos");
              this.setState({ guild: "Rakdos Cult" });
              saveMyScore(firstGuild, secondGuild, "Rakdos Cult");

            }
            // 5 Azorius
            else if ((firstGuild == "Blue" && secondGuild == "White") || (firstGuild == "White" && secondGuild == "Blue")) {
              console.log("azor");
              this.setState({ guild: "Azorius Senate" });
              saveMyScore(firstGuild, secondGuild, "Azorius Senate");

            }
            // 6 orzhov
            else if ((firstGuild == "Black" && secondGuild == "White") || (firstGuild == "White" && secondGuild == "Black")) {
              console.log("orzhov");
              this.setState({ guild: "Orzhov Syndicate" });
              saveMyScore(firstGuild, secondGuild, "Orzhov Syndicate");

            }
            // 7 selesnaya
            else if ((firstGuild == "Green" && secondGuild == "White") || (firstGuild == "White" && secondGuild == "Green")) {
              console.log("seles");
              this.setState({ guild: "Selesnaya Conclave" });
              saveMyScore(firstGuild, secondGuild, "Selesnaya Conclave");

            }
            // 8 simic
            else if ((firstGuild == "Blue" && secondGuild == "Green") || (firstGuild == "Green" && secondGuild == "Blue")) {
              console.log("simic");
              this.setState({ guild: "Simic Combine" });
              saveMyScore(firstGuild, secondGuild, "Simic Combine");

            }
            // 9 golgari
            else if ((firstGuild == "Black" && secondGuild == "Green") || (firstGuild == "Green" && secondGuild == "Black")) {
              console.log("golgi");
              this.setState({ guild: "Golgari Swarm" });
              saveMyScore(firstGuild, secondGuild, "Golgari Swarm");
            }
            // 10 dimir
            else {
              // ((firstGuild = "Black" && secondGuild = "Blue") || (firstGuild = "Blue" && secondGuild = "Black")) {
              console.log("dimir");
              this.setState({ guild: "House Dimir" });
              saveMyScore(firstGuild, secondGuild, "House Dimir");


            }





          };

          guildPic(firstFinal, secondFinal);

          return (firstFinal, secondFinal);

        }
      }

      getColorResults();
      // saveMyScore();
      console.log(this.state.guild);
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
          <GuildArea Guild={this.state.guild} />
          {/* <MyColorGraph Black={this.state.Black} Blue={this.state.Blue} Red={this.state.Red}
            Green={this.state.Green} White={this.state.White} /> */}
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
            <GetDamnIcons ofThis={props.Guild} />
          </Card>
        </Column>
      </Row>
    </div>
  )
}

function GetDamnIcons(ofThis) {
  console.log(ofThis);
  if (ofThis == "Rakdos Cult") {
    return (<i className="ss ss-rakdos"></i>)
  } else if (ofThis == "Boros Legion") {
    return (<i className="ss ss-boros"></i>)
  } else if (ofThis == "Simic Combine") {
    return (<i className="ss ss-simic"></i>)
  } else if (ofThis == "Orzhov Syndicate") {
    return (<i className="ss ss-orzhov"></i>)
  } else if (ofThis == "Golgari Swarm") {
    return (<i className="ss ss-golgari"></i>)
  } else if (ofThis == "Izzet League") {
    return (<i className="ss ss-izzet"></i>)
  } else if (ofThis == "Selesnaya Conclave") {
    return (<i className="ss ss-selesnaya"></i>)
  } else if (ofThis == "House Dimir") {
    return (<i className="ss ss-dimir"></i>)
  } else if (ofThis == "Azorious Senate") {
    return (<i className="ss ss-azorius"></i>)
  } else if (ofThis == "Gruul Clan") {
    return (<i className="ss ss-gruul"></i>)
  } else return (<h2>oops</h2>)
}


export default Question;