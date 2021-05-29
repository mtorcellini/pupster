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
    axios.get(url + '/images/random/5')
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data.message
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
      <div>

        <h1>Search By Breed!</h1>

        <input name="breed"
          list="breeds"
          placeholder="Type in a dog breed to begin"
          onChange={this.handleInputChange}
          value={this.state.search}
        />

        <datalist id="breeds">
          {breedsList}
        </datalist>

        <button onClick={this.handleSubmit}>Search</button>
        <div>
          {dogImages}
        </div>
      </div>
    )
  }
}



export default Search;