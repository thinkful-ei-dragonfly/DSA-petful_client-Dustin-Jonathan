import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import AdoptedCats from '../../components/AdoptedCats/AdoptedCats'
import AdoptedDogs from '../../components/AdoptedDogs/AdoptedDogs'

export default class extends React.Component {
  state = {
    cats: [],
    dogs: []
  }

  componentDidMount(){
    Promise.all([
      fetch(`${config.API_ENDPOINT}/adoptedcats`),
      fetch(`${config.API_ENDPOINT}/adopteddogs`)
    ])
    .then(([dogsRes, catsRes]) => {
      if(!dogsRes.ok) return dogsRes.json().then(e => Promise.reject(e))
      if(!catsRes.ok) return catsRes.json().then(e => Promise.reject(e))

      return Promise.all([dogsRes.json(), catsRes.json()])
    })
    .then(([dogs, cats]) => {
      this.setState({ dogs, cats })
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render(){
    return(
      <div>
        <header>
          <h1>Here are the pets that have been adopted!</h1>
        </header>
        {(this.state.cats.length > 0) && <AdoptedCats cats={this.state.cats}/>}
        {(this.state.dogs.length > 0) && <AdoptedDogs dogs={this.state.dogs}/>}
        <Link to='adopt'><button type="button">Back to adopt some pets</button></Link>
      </div>
    )
  }
}