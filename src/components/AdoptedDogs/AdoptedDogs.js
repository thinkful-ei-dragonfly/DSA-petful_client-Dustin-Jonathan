import React from 'react'

export default class AdoptedDogs extends React.Component {
  render(){
    let dogs = this.props.dogs.map((dog,i) => {
      return (
        <div key ={i}>
          <img src={dog.image} alt="dogs"></img>
        <ul>
          <li>
            Name: {dog.name}
          </li>
          <li>
            Gender: {dog.gender}
          </li>
          <li>
            Age:{dog.age}
          </li>
          <li>
            Breed: {dog.breed}
          </li>
          <li>
            Story: {dog.story}
          </li>
        </ul>
        </div>
      )
    })
    return(
      <div>
        {dogs}
      </div>
    )
  }
}