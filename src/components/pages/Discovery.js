import axios from "axios";
import React from "react";

class Discovery extends React.Component {

  state = {
    image : ""
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

  render() {

    const dogUrl = this.state.image;

    return (
      <div>
        <h2>Make New Friends</h2>
        <h3>Thumbs up on any pups you'd like to meet!</h3>
        <div style={{backgroundImage: `url(${dogUrl})`, backgroundSize: 
        "cover", backgroundPosition: "center", height: "500px", width: "500px"}} id="doggo-frame">
        <button type="button" className="btn btn-outline-danger" id="no">
        <i className="fas fa-thumbs-up"></i>
        </button>
        <button type="button" className="btn btn-outline-success" id="yes">
        <i className="fas fa-thumbs-down"></i>
        </button>
      </div>
    </div>
    )
  } 
}

export default Discovery;