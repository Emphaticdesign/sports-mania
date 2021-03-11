import React from 'react';
import { useEffect, useState } from "react";
import Header from '../Header/Header';
import League from '../League/League';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then((data) => setLeagues(data.leagues))
    }, []);
    const league = leagues.slice(0, 15);
    return (
        <div className="main-home">
            <div>
                <Header></Header>
            </div>
            <div id="leagues">
                {
                    league.map(lig => <League lig={lig} key={lig.idLeague}></League>)
                }
            </div>
        </div>
    );
};

export default Home;