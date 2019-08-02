import React from 'react'
import ApiService from '../../service/ApiService'
// import {Link} from 'react-router-dom';

export default class LandingPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    let user = ''
    if (e.target['name'].value !== ''){
      user = e.target['name'].value
    }
    window.localStorage.setItem("name", user)
    ApiService.handleUserPost(user)
    .then(user => {
      console.log(user)
      this.props.history.push(`/adopt`)
    })
    .catch(error => {
      console.error(error)
    })
  }

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
        <form onSubmit={e => this.handleSubmit(e)}><label htmlFor="Name">Name:</label> 
        <input placeholder="e.g. James M." name="name" id="name"></input>
        <button type="submit">Start</button>
        </form>
        


      </div>
    )
  }
}
