import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './League.css';

const League = (props) => {
    const { strLeague, strSport, idLeague } = props.lig;
    return (
        <div className="main-league">
            <h2>{strLeague}</h2>
            <h4>Sports type: {strSport}</h4>
            <Link to={`/leagueDetail/${idLeague}`}><button className='main-button'>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </div>
    );
};

export default League;