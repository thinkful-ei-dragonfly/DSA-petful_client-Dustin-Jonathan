import React from 'react'

export default class AdoptPage extends React.Component {
  state = {
    dog: [
      {
        image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1y0laje_50411b56.jpeg?height=354&region=0%2C0%2C400%2C225&width=630',
        name: 'Old Yeller',
        gender: 'Male',
        age: 5,
        breed: 'Yellow Mastador',
        story: 'Owner passed away'
      },
      {
        image: '',
        name: 'Casey',
        gender: 'Female',
        age: 10,
        breed: 'Black lab',
        story: 'Thrown out on the street'
      },
    ],
    cat: [
      {
        image: 'https://scontent.find1-1.fna.fbcdn.net/v/t1.0-9/30798_102597843119736_4949205_n.jpg?_nc_cat=104&_nc_oc=AQlqNjxordoXL50j6YntAX2OiP9vE9K7mgiZqHY0iPGV7bZKncB0Vk1v_m-th0r3gJ0&_nc_ht=scontent.find1-1.fna&oh=e72f72611a1f5ec0728c510af8e54223&oe=5DDE13CB',
        name: 'Sox',
        gender: 'Female',
        age: 12,
        breed: 'Domestic Short-hair',
        story: 'Owner could no longer take care of her'
      },
      {
        image: '',
        name: 'Miss Prissy',
        gender: 'Female',
        age: 4,
        breed: 'Domestic Short-hair',
        story: 'Owner could no longer take care of her'
      }
    ]
  }
  render() {
    return (
      <div>
        <header>
          <h1>
            Here are the pets for adoption
          </h1>
        </header>
        <h2>Cat</h2>
        <img src={this.state.cat[0].image} alt="Cat"></img>
        <ul>
          <li>
            Name: {this.state.cat[0].name}
          </li>
          <li>
            Gender: {this.state.cat[0].gender}
          </li>
          <li>
            Age:{this.state.cat[0].age}
          </li>
          <li>
            Breed: {this.state.cat[0].breed}
          </li>
          <li>
            Story: {this.state.cat[0].story}
          </li>
        </ul>
        <button type="button">Adopt</button>
        <h2>Dog</h2>
        <img src={this.state.dog[0].image} alt="Dog"></img>
        <ul>
          <li>
            Name: {this.state.dog[0].name}
          </li>
          <li>
            Gender: {this.state.dog[0].gender}
          </li>
          <li>
            Age:{this.state.dog[0].age}
          </li>
          <li>
            Breed: {this.state.dog[0].breed}
          </li>
          <li>
            Story: {this.state.dog[0].story}
          </li>
        </ul>
        <button type="button">Adopt</button>
      </div>
    )
  }
}