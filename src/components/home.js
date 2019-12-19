import React, { Component } from 'react'


const profPic = require('../profile.png');


export default class Home extends Component {
  render() {
    return (
      <div>
          <img src={profPic} width="200" height="200" alt="Picture of Shu"/>
      </div>
    )
  }
}