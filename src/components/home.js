import React, { Component } from 'react'
import oceanvid from '../ocean1.mp4'


const profPic = require('../profile.png');
// const vid = require('../ocean.mp4');


export default class Home extends Component {
  render() {

    return (
        <div>
          <video id = "background-video"
              autoPlay
              muted
              loop
            >
          <source src={oceanvid} type="video/mp4" />
        </video>
        <div class = "foreground-box">
          <img src={profPic} width="200" height="200" alt="Pic of Shu"/>
        </div>
        <div>
          <h1>Hi my name is Shu and I'm a 4th year Computer Science student at University of California Santa Barbara</h1>  
        </div>
        </div>

    )
  }
} 