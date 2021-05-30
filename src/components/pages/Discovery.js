import axios from "axios";
import React from "react";

class Discovery extends React.Component {

  state = {
    image : "",
    friends : 0,
    liked: false
  }

  componentDidMount() {
    this.getDog();
  }

  getDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({image : response.data.message})
      })
  }

  handleDown = () => {
    this.state.liked = false;
    this.getDog();
  }

  handleUp = () => {
    this.state.liked = false;
    // one in five chance
    const res = Math.floor(Math.random() * 3);
    if (res == 0) {
      this.setState({
        friends : this.state.friends + 1,
        liked : true
      })
    }
    this.getDog();
  }

  render() {

    const dogUrl = this.state.image;
    let message = "";

    if (this.state.liked) {
      message = <p className="like-message">That dog liked you too! You made another friend!</p>
    }

    return (
      <div className="discover">
        <h2>Make New Friends</h2>
        <h3>Thumbs up on any pups you'd like to meet!</h3>
        <div className="dogpic" style={{backgroundImage: `url(${dogUrl})`, backgroundSize: 
        "cover", backgroundPosition: "center", height: "500px", width: "500px"}} id="doggo-frame">
        <button type="button" className="thumb btn btn-danger" id="no" onClick={this.handleDown}>
        <i className="fas fa-thumbs-down"></i>
        </button>
        <button type="button" className="thumb btn btn-success" id="yes" onClick={this.handleUp}>
        <i className="fas fa-thumbs-up"></i>
        </button>
      </div>
      {message}
      <p>You have {this.state.friends} friends!</p>
    </div>
    )
  } 
}

export default Discovery;