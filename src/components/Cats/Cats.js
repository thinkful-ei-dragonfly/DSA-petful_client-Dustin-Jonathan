import React from 'react'

export default class Cats extends React.Component {
  render() {
    return(
      <div>
        <h2>Cats</h2>
        <img src={this.props.cats[this.props.i].image} alt="cats"></img>
        <ul>
          <li>
            Name: {this.props.cats[this.props.i].name}
          </li>
          <li>
            Gender: {this.props.cats[this.props.i].gender}
          </li>
          <li>
            Age:{this.props.cats[this.props.i].age}
          </li>
          <li>
            Breed: {this.props.cats[this.props.i].breed}
          </li>
          <li>
            Story: {this.props.cats[this.props.i].story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }

}