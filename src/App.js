import React, { Component, Fragment } from 'react';
import "tachyons";
import './App.css';
import LogOut from './components/Log-out/Log-out';
import Image from './components/Image/Image';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import SignIn from "./components/SignIn/SignIn";
import Rank from "./components/Rank/Rank";
import Register from "./components/Register/Register";
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}



const input = "";

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: input,
      box: {},
      route: "signIn",
      currentUser: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        entries: "",
        joined: ""
      }
    }
  }


  loadUser = (user) => {
    this.setState({
      currentUser: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        userName: user.user_name,
        entries: user.entries,
        joined: user.joined,
      }
    })
    console.log(this.state.currentUser)
  }

  calculateFaceLocation = (response) => {
    const responseData = response;
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: responseData.left_col * width,
      topRow: responseData.top_row * height,
      rightCol: width - (responseData.right_col * width),
      bottomRow: height - (responseData.bottom_row * height)
    }
  }

  placeFaceBox = (faceLocation) => {
    this.setState({ box: faceLocation })
  }

  onClick = () => {
    fetch("https://guarded-crag-24920.herokuapp.com/imageUrl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://guarded-crag-24920.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.currentUser.id
            })
          })
            .then(response => response.json())
            .then(newEntries => {
              this.setState(Object.assign(this.state.currentUser, { entries: newEntries }))
            })
        }
        this.placeFaceBox(this.calculateFaceLocation(response.outputs[0].data.regions[0].region_info.bounding_box))

      })
      .catch(err => {
        console.log(err)
      })
  }

  onInputChange = (input) => {
    this.setState({ input: input.target.value })
  }

  onRouteChange = (route) => {
    this.setState({ input: input })
    this.setState({ route: route });
  }

  render() {
    const { box, input, route } = this.state;
    return (
      <Fragment>
        <Particles className="particles"
          params={particlesOptions} />
        {route === "home"
          ? <Fragment>
            <LogOut onRouteChange={this.onRouteChange} userName={this.state.currentUser.userName} />
            <Rank userName={this.state.currentUser.userName} entries={this.state.currentUser.entries} />
            <Image />
            <ImageLinkForm onInputChange={this.onInputChange} onClick={this.onClick} />
            <ImageDisplay box={box} input={input} />
          </Fragment>
          : (
            route === "signIn"
              ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }
      </Fragment>
    )
  }
}

export default App;
