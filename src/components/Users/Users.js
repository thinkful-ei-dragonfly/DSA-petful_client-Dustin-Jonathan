import React from 'react'

export default class Users extends React.Component {
  displayUsers(){
    let currNode = this.props.users.first
    let i = 0
    let usersArr = []
    while(currNode!== null){
      usersArr.push(<p key={i}>{currNode.data}</p>)
      i++
      currNode = currNode.next
    }
    return usersArr

  }
  render(){
    return(
      <div>
        <h2>Users list:</h2>
        <ul>
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}