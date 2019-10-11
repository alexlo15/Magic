import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card';
// import Result from '../components/Results';
import { getAllUsers, getColor1, getColor2 } from "../utils/API";
import { Chart } from "react-google-charts";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreData: [],
            BlueData:[],
            colorAppearances: {
                Blue: 0,
                Green: 0,
                Red: 0,
                White: 0,
                Black: 0
            }
        }
    };

    componentDidMount() {
        this.getScores();
        this.getBlue();
    };

    getScores = () => {
        getAllUsers()
            .then(res => {
                this.setState({
                    scoreData: res.data
                });
                // console.log(this.state.scoreData)
            })
            .catch(err => console.log(err));
    }

    getBlue = (Blue) => {
        getColor1(Blue)
        .then(res => {
            this.setState({
                BlueData: res.data
            });
            console.log(res)
        })
        .catch(err => console.log(err));

    }



    render() {

        let scores = this.state.scoreData
        // console.log(scores)
        let eachRow = scores.map(user => {
            return (
                <tr key={user._id}>
                    <td>{user.userName}</td>
                    <td>{user.color1}</td>
                    <td>{user.color2}</td>
                    <td>{user.guildMatch}</td>
                    <td>{user.timestamp}</td>
                </tr>
            )
        })

        return (
            <>
                <Jumbotron
                    fluid
                    bg={'dark'}
                    color={'light'}
                    pageTitle={'Viewing Saved Books'} />
                <Container>
                    <Row>
                        <Column xs={12} md={6} lg={6}>
                            <Card title={"All the Nerd Results"}>
                                <table id='table'>
                                    <tbody className="scoreTableBody">

                                        <tr>
                                            <th>Name</th>
                                            <th>Color 1</th>
                                            <th>Color 2</th>
                                            <th>Guild</th>
                                            <th>Date</th>
                                        </tr>
                                        {eachRow}
                                    </tbody>
                                </table>
                            </Card>
                        </Column>
                        <Column xs={12} md={6} lg={6}>
                            <Card title={"Guild Popularity Contest"}>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Guild', '2010 Population', '2000 Population'],
                                        ['Boros', 8175000, 8008000],
                                        ['Golgari', 3792000, 3694000],
                                        ['Dimir', 2695000, 2896000],
                                        ['Selesnaya', 2099000, 1953000],
                                        ['Rakdos', 1526000, 1517000],
                                        ['Izzet', 1526000, 1517000],
                                        ['Azorius', 1526000, 1517000],
                                        ['Gruul', 1526000, 1517000], ['Rakdos', 1526000, 1517000],
                                        ['Orzhov', 1526000, 1517000],
                                        ['Simic', 1526000, 1517000],
                                    ]}
                                    options={{
                                        title: 'Commonly represented Guilds',
                                        chartArea: { width: '60%' },
                                        isStacked: true,
                                        hAxis: {
                                            title: 'Appearances',
                                            minValue: 0,
                                        },
                                        vAxis: {
                                            title: 'Guild',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '3' }}
                                />
                            </Card>
                        </Column>
                    </Row>
                </Container>


            </>
        )

    };




};

export default Results;