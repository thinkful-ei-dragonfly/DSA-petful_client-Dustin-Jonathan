import React from 'react'

export default class LandingPage extends React.Component {
  render(){
    return(
      <div>
        <header>
          <h1>
            Welcome to Petful
          </h1>
        </header>
        <p>
          To start the adoption process, click the start button below. 
          You'll be shown a cat and a dog that are available for adoption.
          You'll get a name of the pet, their gender, age, breed, and their story.
          If you're first in line, you will the option to adopt either pet. 
        </p>
        <img src={require('../../Images/dog-and-cat.jpg') }></img>
        <button type="button">Start</button>

      </div>
    )
  }
}
