import React from 'react'

export default class Cats extends React.Component {
  render() {
    return(
      <div>
        <h2>Cats</h2>
        <img src={this.props.cats[0].image} alt="cats"></img>
        <ul>
          <li>
            Name: {this.props.cats[0].name}
          </li>
          <li>
            Gender: {this.props.cats[0].gender}
          </li>
          <li>
            Age:{this.props.cats[0].age}
          </li>
          <li>
            Breed: {this.props.cats[0].breed}
          </li>
          <li>
            Story: {this.props.cats[0].story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }

}