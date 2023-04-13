import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import database from './firebase';
import SwipeButtons from './SwipeButtons';
import "./TinderCards.css"
import Header from "./Header";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {       
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return(
        <div>
            <Header />
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>
                                {person.name}
                                <CheckCircleOutlineIcon 
                                className="tinderCards__cardCheck"
                                />
                            </h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <SwipeButtons />
        </div>
    )
}

export default TinderCards;