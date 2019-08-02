import React from 'react'

export default class Dogs extends React.Component {
  render(){
    return (
      <div>
        <h2>Dogs</h2>
        <img src={this.props.dogs[this.props.i].image} alt="dogs"></img>
        <ul>
          <li>
            Name: {this.props.dogs[this.props.i].name}
          </li>
          <li>
            Gender: {this.props.dogs[this.props.i].gender}
          </li>
          <li>
            Age:{this.props.dogs[this.props.i].age}
          </li>
          <li>
            Breed: {this.props.dogs[this.props.i].breed}
          </li>
          <li>
            Story: {this.props.dogs[this.props.i].story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }
}