import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Shahrukh Khan',
            url: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg"
        },
        {
          name: 'Alia Bhatt',
          url: 'https://assets.vogue.in/photos/622f9af651da11b2e5b0b176/1:1/w_1080,h_1080,c_limit/7%20times%20Alia%20Bhatt%20served%20sublime%20beauty%20moments%20.jpg'
        },
        {
          name: 'Aditya Roy Kapoor',
          url: 'https://images.news18.com/ibnlive/uploads/2019/11/Happy-Birthday-Aditya-Roy-Kapur-F2.jpg?impolicy=website&width=510&height=356'
        },
        {
          name: 'Kiara Advani',
          url: 'https://pbs.twimg.com/media/Fwe1s4aX0AQHySI.jpg'
        },
    ]);


const swiped = (direction , nameToDelete) => {
  console.log("removing: " + nameToDelete);
  //setLastDirection(direction);
};

const outOfFrame = (name) => {
  console.log(name + "left the screen!");
};
  return (
  <div className='tinderCards'>
      <div className= "tinderCards__cardContainer">

       {people.map(person => 
      (
        <TinderCard 
        className='swipe'
        key={person.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir)=> swiped(dir, person.name)}
        onCardLeftScreen={() => outOfFrame(person.name)}>

        <div style={{backgroundImage: `url(${person.url})`}} className='card'>
        <h3>{person.name}</h3>

        </div>
        </TinderCard>
    
      ))}
      </div>
  </div> )
}

export default TinderCards;
