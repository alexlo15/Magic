import React, { Component } from 'react';
import Jumbotron from '../components/Boxes/Jumbotron';
import Container from '../components/Boxes/Container';
import Row from '../components/Boxes/Row';
import Column from '../components/Boxes/Column';
import Card from '../components/Boxes/Card';
// import Result from '../components/Results';
import { getAllUsers, getGuilds } from "../utils/API";
import { Chart } from "react-google-charts";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreData: [],
            BlueData: [],
            GuildData: [],
            GuildCount: [],
            Boros: 0, Dimir: 0, Gruul: 0, Orz: 0, Azor: 0,
            Simic: 0, Rakdos: 0, Izzet: 0, Seles: 0, Golg: 0,
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

    };

    // getscores calls gatherGuilds
    getScores = () => {
        getAllUsers()
            .then(res => {
                this.setState({
                    scoreData: res.data
                });
                // console.log(this.state.scoreData)
                this.gatherGuilds();

            })
            .catch(err => console.log(err));
    };

    // gatherguilds calls getGUildNums
    gatherGuilds = () => {
        getGuilds()
            .then(res => {
                this.setState({
                    GuildData: res.data
                });
                this.getGuildNums();
                console.log(this.state.GuildData);
            })
            .catch(err => console.log(err));
    };

    getGuildNums = () => {
        let guildsData = this.state.GuildData;

        let guildList = guildsData.map(({ guildMatch }) => guildMatch);
        let counts = {};

        for (var i = 0; i < guildList.length; i++) {
            let num = guildList[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        this.setState({
            Dimir: counts["House Dimir"],
            Boros: counts["Boros Legion"],
            Gruul: counts["Gruul Clan"],
            Orz: counts["Orzhov Syndicate"],
            Rakdos: counts["Rakdos Cult"],
            Azor: counts["Azorius Senate"],
            Seles: counts["Selesnaya Conclave"],
            Simic: counts["Simic Combine"],
            Golg: counts["Golgari Swarm"],
            Izzet: counts["Izzet League"],
        })
    
        // console.log(guildsData);
        // console.log(guildList);
        // console.log(this.state.Dimir);
        // console.log(this.state.Gruul);
        // console.log(this.state.Boros);
        // console.log(this.state.Orz);
        // console.log(this.state.Golg);
        // console.log(this.state.Izzet);
        // console.log(this.state.Seles);
        // console.log(this.state.Simic);
        // console.log(this.state.Rakdos);
        // console.log(this.state.Azor);
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
                                        ['Guild',"Count"],
                                        ['Boros', this.state.Boros],
                                        ['Golgari', this.state.Golg],
                                        ['Dimir', this.state.Dimir],
                                        ['Selesnaya', this.state.Seles],
                                        ['Rakdos', this.state.Rakdos],
                                        ['Izzet', this.state.Izzet],
                                        ['Azorius', this.state.Azor],
                                        ['Gruul', this.state.Gruul],
                                        ['Orzhov', this.state.Orz],
                                        ['Simic', this.state.Simic],
                                    ]}
                                    options={{
                                        title: '',
                                        chartArea: { width: '60%' },

                                        isStacked: false,
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