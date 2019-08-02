import React from 'react'
import config from '../../config'
import Cats from '../../components/Cats/Cats'
import Dogs from '../../components/Dogs/Dogs'

export default class AdoptPage extends React.Component {
  state = {
    dogs: [],
    cats: []
  }
  componentDidMount(){
    Promise.all([
      fetch(`${config.API_ENDPOINT}/dogs`),
      fetch(`${config.API_ENDPOINT}/cats`)
    ])
    .then(([dogsRes, catsRes]) => {
      if(!dogsRes.ok)
      return dogsRes.json().then(e => Promise.reject(e))
      if(!catsRes.ok)
      return catsRes.json().then(e => Promise.reject(e))

      return Promise.all([
        dogsRes.json(),
        catsRes.json(),
      ])
    })
    .then(([dogs, cats]) => {
      this.setState({ dogs, cats })
    })
    .catch(error => {
      console.error({ error })
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <header>
          <h1>
            Here are the pets for adoption
          </h1>
        </header>
        {this.state.cats[0] && (<Cats cats={this.state.cats}/>)}
        {this.state.dogs[0] && (<Dogs dogs={this.state.dogs}/>)}
      </div>
    )
  }
}