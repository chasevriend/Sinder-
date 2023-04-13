import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://www.funkyspacemonkey.com/wp-content/uploads/2017/10/the-story-behind-steve-jobs-most-iconic-photo-FSMdotCOM.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://www.cnet.com/a/img/resize/2e58c4d277497c5d25fd78bb569dde70c7b8715b/hub/2021/04/27/42e0c41e-2754-45ef-ac62-96b5589040db/sunscreen.jpg?auto=webp&fit=crop&height=675&width=1200'
        }, 
    ]);

    return(
        <div>
            <h1>TinderCards</h1>

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
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;