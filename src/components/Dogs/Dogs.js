import React from 'react'

export default class Dogs extends React.Component {
  render(){
    return (
      <div>
        <h2>Dogs</h2>
        <img src={this.props.dog.image} alt="dogs"></img>
        <ul>
          <li>
            Name: {this.props.dog.name}
          </li>
          <li>
            Gender: {this.props.dog.gender}
          </li>
          <li>
            Age:{this.props.dog.age}
          </li>
          <li>
            Breed: {this.props.dog.breed}
          </li>
          <li>
            Story: {this.props.dog.story}
          </li>
        </ul>
        <button type="button" disabled={this.props.disabled  || this.props.count !== 0 || this.props.adoptable.name !== this.props.dog.name} onClick={()=>this.props.handleDogAdopt()}>Adopt</button>
      </div>
    )
  }
}