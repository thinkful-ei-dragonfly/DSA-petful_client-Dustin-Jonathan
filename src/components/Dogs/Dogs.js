import React from 'react'

export default class Dogs extends React.Component {
  render(){
    return (
      <div>
        <h2>Dogs</h2>
        <img src={this.props.dogNode.image} alt="dogs"></img>
        <ul>
          <li>
            Name: {this.props.dogNode.name}
          </li>
          <li>
            Gender: {this.props.dogNode.gender}
          </li>
          <li>
            Age:{this.props.dogNode.age}
          </li>
          <li>
            Breed: {this.props.dogNode.breed}
          </li>
          <li>
            Story: {this.props.dogNode.story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }
}