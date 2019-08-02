import React from 'react'

export default class Dogs extends React.Component {
  render(){
    return (
      <div>
        <h2>Dogs</h2>
        <img src={this.props.dogs[0].image} alt="dogs"></img>
        <ul>
          <li>
            Name: {this.props.dogs[0].name}
          </li>
          <li>
            Gender: {this.props.dogs[0].gender}
          </li>
          <li>
            Age:{this.props.dogs[0].age}
          </li>
          <li>
            Breed: {this.props.dogs[0].breed}
          </li>
          <li>
            Story: {this.props.dogs[0].story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }
}