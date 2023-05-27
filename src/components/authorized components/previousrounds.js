import Authnavbar from "./authnavbar";
import Newroundbutton from "./newroundbutton";
import "../../Styles/previousrounds.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Previousrounds() {
    const rounds = [
        {
            name: "Round 1",
            date: "2023-05-20",
            totalsg: 2,
            puttingsg: 0.5,
            shortgamesg: 0.8,
            approachsg: 0.7,
            teesg: 0.3,
            score: 75,
        },
        {
            name: "Round 2",
            date: "2023-05-22",
            totalsg: 1.5,
            puttingsg: 0.3,
            shortgamesg: 0.6,
            approachsg: 0.5,
            teesg: 0.2,
            score: 76,
        }
    ];
    return (

        <div className="gray">
            <Newroundbutton />
            <Authnavbar />
            <div className="round">
                {rounds.map((round, index) => (

                    <div className="roundgrid">
                        <div>
                            <h4>{round.name}</h4> <br />
                            <p className="date">{round.date}</p>
                        </div>
                        <div className="sggrid">
                            <div>
                                <p className="number">{round.totalsg}</p> <br />
                                <p className="description">Total SG</p>
                            </div>
                            <div>
                                <p className="number">{round.puttingsg}</p> <br />
                                <p className="description">SG Putting</p>
                            </div>
                            <div>
                                <p className="number">{round.shortgamesg}</p> <br />
                                <p className="description">SG Short Game</p>
                            </div>
                            <div>
                                <p className="number">{round.approachsg}</p> <br />
                                <p className="description">SG Approach</p>
                            </div>
                            <div>
                                <p className="number">{round.teesg}</p> <br />
                                <p className="description">SG Tee</p>
                            </div>
                            <div>
                                <p className="score">{round.score}</p>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} className="score marginn" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}