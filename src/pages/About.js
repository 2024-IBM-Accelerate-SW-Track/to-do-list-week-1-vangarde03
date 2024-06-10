import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                // Image goes here
                src={profile_pic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Nigel Alexis</div>
              <div className="brief_description">
                <h3>I'm a 3rd year student studying Computer Science at Columbia University!</h3>
                <br></br>
                - Interests: Music, Languages, Video Games, Programming, and more!
                <br></br>
                - Fun Fact: I am currently a 4th kyu in Aikido!
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}