import React from 'react';
import "./Results.css"
import Container from "./Boxes/Container";
import Row from "./Boxes/Row";
import Column from "./Boxes/Column";

const Result = ({ bg, title, color1, color2, children }) => {

    // Color check I stole from Josh Appel, Thanks Josh!
    const checkColor = () => {
        const darkText = ['warning', 'light'];

        if (bg) {
            if (darkText.includes(bg)) {
                return 'text-dark';
            } else {
                return 'text-light';
            }
        }
        return 'default';
    };
    const textColor = checkColor();


    console.log(color1);
    console.log(color2);
    console.log(color2[0]);
    // // sets the second color to 1 thing if multiple are passed (ie. tied)
    // if (color2 === "White" || color2 === "Red" ||
    //     color2 === "Green" || color2 === "Blue" || color2 === "Black") {
    //     const color2Shortened = color2;
    //     console.log(color2Shortened);
    // } else {
    //     const color2Shortened = color2[0];
    //     console.log(color2Shortened);
    // }



    const guildPic = (oneColor, twoColor) => {
        let firstGuild = oneColor;
        let secondGuild = twoColor;
        if ((firstGuild === "Red" & secondGuild === "Green") || (firstGuild === "Green" & secondGuild === "Red")) {
            console.log("gruul");
            return (<>
                <a href="https://edhrec.com/commanders/rg" target="_blank">Gruul</a>
                <a href="https://edhrec.com/commanders/rg" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 2 boros
        else if ((firstGuild === "Red" && secondGuild === "White") || (firstGuild === "White" && secondGuild === "Red")) {
            console.log("boros");
            return (<>
                <a href="https://edhrec.com/commanders/rw" target="_blank">Boros</a>
                <a href="https://edhrec.com/commanders/rw" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 3 izzet
        else if ((firstGuild === "Red" && secondGuild === "Blue") || (firstGuild === "Blue" && secondGuild === "Red")) {
            console.log("izzet");
            return (<>
                <a href="https://edhrec.com/commanders/ur" target="_blank">Izzet</a>
                <a href="https://edhrec.com/commanders/ur" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 4 rakdos
        else if ((firstGuild === "Red" && secondGuild === "Black") || (firstGuild === "Black" && secondGuild === "Red")) {
            console.log("rakdos");
            return (<>
                <a href="https://edhrec.com/commanders/br" target="_blank">Rakdos</a>
                <a href="https://edhrec.com/commanders/br" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 5 Azorius
        else if ((firstGuild = "Blue" && secondGuild === "White") || (firstGuild === "White" && secondGuild === "Blue")) {
            console.log("azor");
            return (<>
                <a href="https://edhrec.com/commanders/wu" target="_blank">Azorius</a>
                <a href="https://edhrec.com/commanders/wu" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 6 orzhov
        else if ((firstGuild === "Black" && secondGuild === "White") || (firstGuild === "White" && secondGuild === "Black")) {
            console.log("orzhov");
            return (<>
                <a href="https://edhrec.com/commanders/wb" target="_blank">Orzhov</a>
                <a href="https://edhrec.com/commanders/wb" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 7 selesnaya
        else if ((firstGuild === "Green" && secondGuild === "White") || (firstGuild === "White" && secondGuild === "Green")) {
            console.log("seles");
            return (<>
                <a href="https://edhrec.com/commanders/gw" target="_blank">Selesnaya</a>
                <a href="https://edhrec.com/commanders/gw" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 8 simic
        else if ((firstGuild === "Blue" && secondGuild === "Green") || (firstGuild === "Green" && secondGuild === "Blue")) {
            console.log("simic");
            return (<>
                <a href="https://edhrec.com/commanders/gu" target="_blank">Simic</a>
                <a href="https://edhrec.com/commanders/gu" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
        }
        // 9 golgari
        else if ((firstGuild === "Black" && secondGuild === "Green") || (firstGuild === "Green" && secondGuild === "Black")) {
            console.log("golgi");
            return (<>
                <a href="https://edhrec.com/commanders/bg" target="_blank">Golgari</a>
                <a href="https://edhrec.com/commanders/bg" target="_blank"><i className="ss ss-golgari"></i></a>
            </>)
        }
        // 10 dimir
        else {
            // ((firstGuild = "Black" && secondGuild = "Blue") || (firstGuild = "Blue" && secondGuild = "Black")) {
            console.log("dimir");
            return (<>
                <a href="https://edhrec.com/commanders/ub" target="_blank">Dimir</a>
                <a href="https://edhrec.com/commanders/ub" target="_blank"><i className="ss ss-dimir"></i></a>

            </>)
            // }
        }

    }

    const yourGuild = guildPic(color1, color2);

    return (

        // the results component returns a header div with title passed
        // and a body div with the contents passed from parent cmpnt
        // add your divs under that one
        <Container>
            <Row>
                <Column>
                    <div className={bg ? `card bg-${bg} mb-2` : 'card mb-2'}>
                        <div className={textColor}>
                            {title && <h5 className={'card-header text-center'}>{title}</h5>}

                            <div className="card-body">{children}</div>
                            <p>Your first color is: {color1}</p>
                            <p>Second is: {color2}</p>
                        </div>
                    </div>
                </Column>
                <Column>
                    <div className={bg ? `card bg-${bg} mb-2` : 'card mb-2'}>
                        <div className={textColor}>
                            <h5 className={'card-header text-center'}>Your Guild:</h5>
                            <div className="guild card-body">{yourGuild}</div>
                        </div>
                    </div>
                </Column>
            </Row>
        </Container>
    );
};

export default Result;
