import React from 'react';
import config from '../../config';
import Cats from '../../components/Cats/Cats';
import Dogs from '../../components/Dogs/Dogs';
import ApiService from '../../service/ApiService';

export default class AdoptPage extends React.Component {
  state = {
    dogs: null,
    cats: null,
    dogNode: null,
    catNode: null
  };

  handleDogAdopt = () => {
    ApiService.handleDogAdopt()
      .then(dogs => {
        this.setState({dogs, dogNode: dogs.first });
      })
      .catch(error => console.error(error));
  };

  handleCatAdopt = () => {
    ApiService.handleCatAdopt()
      .then(cats => {
        console.log(cats);
        this.setState({cats, catNode: cats.first });

      })
      .catch(error => console.error(error));
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/dogs`),
      fetch(`${config.API_ENDPOINT}/cats`)
    ])
      .then(([dogsRes, catsRes]) => {
        if (!dogsRes.ok) return dogsRes.json().then(e => Promise.reject(e));
        if (!catsRes.ok) return catsRes.json().then(e => Promise.reject(e));

        return Promise.all([dogsRes.json(), catsRes.json()]);
      })
      .then(([dogs, cats]) => {
        this.setState({ dogs, cats, dogNode: dogs.first, catNode: cats.first });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  handleSeeMore = () => {
    if (this.state.catNode.next && this.state.dogNode.next) {
      this.setState({
        catNode: this.state.catNode.next,
        dogNode: this.state.dogNode.next
      });
    }
  };

  render() {

    return (
      <div>
        <header>
          <h1>Here are the pets for adoption</h1>
        </header>
        {this.state.catNode !== null && <Cats handleCatAdopt={this.handleCatAdopt} cat={this.state.catNode.data} />}
        {this.state.dogNode !== null && <Dogs handleDogAdopt={this.handleDogAdopt} dog={this.state.dogNode.data} />}
        <button onClick={() => this.handleSeeMore()}>See More pets</button>
      </div>
    );
  }
}
