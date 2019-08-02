import React from 'react'
import config from '../../config'
import Cats from '../../components/Cats/Cats'
import Dogs from '../../components/Dogs/Dogs'

export default class AdoptPage extends React.Component {
  state = {
    dogs: [],
    cats: [],
    catIndex: 0,
    dogIndex: 0
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

  handleSeeMore = () => {
    if(this.state.cats[this.state.catIndex+1] && this.state.dogs[this.state.dogIndex + 1]){
      this.setState({
        catIndex: this.state.catIndex +1,
        dogIndex: this.state.dogIndex +1
      })
    }
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
        {this.state.cats[this.state.catIndex] && (<Cats i={this.state.catIndex} cats={this.state.cats}/>)}
        {this.state.dogs[this.state.dogIndex] && (<Dogs i={this.state.dogIndex} dogs={this.state.dogs}/>)}
        <button onClick={() => this.handleSeeMore()}>See More pets</button>
      </div>
    )
  }
}