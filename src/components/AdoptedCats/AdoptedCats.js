import React from 'react'

export default class AdoptedCats extends React.Component {
  render(){
    let cats = this.props.cats.map((cat, i )=> {
      return(
        <div key ={i}>
         <img src={cat.image} alt="cats"></img>
        <ul>
          <li>
            Name: {cat.name}
          </li>
          <li>
            Gender: {cat.gender}
          </li>
          <li>
            Age:{cat.age}
          </li>
          <li>
            Breed: {cat.breed}
          </li>
          <li>
            Story: {cat.story}
          </li>
        </ul>
        </div>
      )
    })
    return(
      <div>
        {cats}
      </div>
    )
  }
}