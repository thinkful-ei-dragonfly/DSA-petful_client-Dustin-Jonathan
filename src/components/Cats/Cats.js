import React from 'react'

export default class Cats extends React.Component {
  render() {
    return(
      <div>
        <h2>Cats</h2>
        <img src={this.props.cat.image} alt="cats"></img>
        <ul>
          <li>
            Name: {this.props.cat.name}
          </li>
          <li>
            Gender: {this.props.cat.gender}
          </li>
          <li>
            Age:{this.props.cat.age}
          </li>
          <li>
            Breed: {this.props.cat.breed}
          </li>
          <li>
            Story: {this.props.cat.story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }

}