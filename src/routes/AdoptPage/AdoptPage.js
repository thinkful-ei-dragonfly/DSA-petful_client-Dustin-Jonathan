import React from 'react'
import config from '../../config'
import Cats from '../../components/Cats/Cats'
import Dogs from '../../components/Dogs/Dogs'

export default class AdoptPage extends React.Component {
  state = {
    dogs: null,
    cats: null,
    dogNode: null,
    catNode: null
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
      this.setState({ dogs, cats, dogNode: dogs.first, catNode: cats.first })
    })
    .catch(error => {
      console.error({ error })
    })
  }

  handleSeeMore = () => {
    if(this.state.catNode.next && this.state.dogNode.next){
      this.setState({
        catNode: catNode.next,
        dogNode: dogNode.next
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
        {this.state.catNode && (<Cats cat={this.state.catNode} />)}
        {this.state.dogNode && (<Dogs dog={this.state.dogNode} />)}
        <button onClick={() => this.handleSeeMore()}>See More pets</button>
      </div>
    )
  }
}