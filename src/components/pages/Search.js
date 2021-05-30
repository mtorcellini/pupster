import React from "react";
import axios from 'axios';

class Search extends React.Component {

  state = {
    search: "",
    results: [],
    breeds: []
  }

  componentDidMount() {
    this.getDogList();
  }

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://dog.ceo/api/breed/${this.state.search}`;
    axios.get(url + '/images/random/9')
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data.message,
          search: ""
        })
      });
  }

  getDogList = () => {
    const url = `https://dog.ceo/api/breeds/list/all`;
    axios.get(url)
      .then(res => {
        const breeds = Object.keys(res.data.message);
        this.setState({
          breeds : breeds
        })
      })
  }

  render() {

    const dogImages = this.state.results.map(imageUrl => {
      return (
        <figure>
          <img src={imageUrl} alt=""/>
        </figure>
        )
      });

    const breedsList = this.state.breeds.map(breed => <option value={breed}></option>)

    return (
      <div className="search container">

        <h1 className="mt-3 mb-3">Search By Breed!</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="breed" className="form-label">Breed Name:</label>
            <input name="breed"
              list="breeds"
              className="form-control"
              placeholder="Type in a dog breed to begin"
              onChange={this.handleInputChange}
              value={this.state.search}
            />
            <datalist id="breeds">
              {breedsList}
            </datalist>
          </div>

          <button type="submit" className="btn btn-primary" >Search</button>
        </form>

        <div className="gallery">
          {dogImages}
        </div>
      </div>
    )
  }
}



export default Search;