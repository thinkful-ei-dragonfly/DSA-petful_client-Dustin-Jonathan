import React from 'react'

export default class Cats extends React.Component {
  render() {
    return(
      <div>
        <h2>Cats</h2>
        <img src={this.props.catNode.image} alt="cats"></img>
        <ul>
          <li>
            Name: {this.props.catNode.name}
          </li>
          <li>
            Gender: {this.props.catNode.gender}
          </li>
          <li>
            Age:{this.props.catNode.age}
          </li>
          <li>
            Breed: {this.props.catNode.breed}
          </li>
          <li>
            Story: {this.props.catNode.story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }

}