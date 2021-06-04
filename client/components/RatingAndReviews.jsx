import React from 'react';
import { Average } from './Average.jsx';
import Reviews from './Reviews.jsx';
import ProgressBar from './ProgressBar.jsx';
import axios from "axios"



export default class RatingAndReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      data: { results: [] },
      ratings: {},
      count: 2,
      show: 'block'
    };
    this.addReview = this.addReview.bind(this)
  }

  componentDidMount() {

    axios.get('/getreviews')
      .then((response) => {
        console.log('aaaaaaaaaaaaaa', response.data.results.length)
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('/getcharacteristics')
      .then((response) => {
        console.log("test", response.data)
        this.setState({
          rate: response.data.ratings
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addReview() {
    console.log('-------------------', this.state.data)
    if (this.state.count >= this.state.data.results.length - 1) {
      this.setState({
        show: 'hidden'
      })
    }
    this.setState({
      count: this.state.count + 2
    })
  }




  render() {
    //  console.log("data", this.state.data)
    //console.log("ka", this.state.rate)
    return (
      <div className="flex items-stretch grid grid-cols-3 gap-4">
        <div className="h-64 grid grid-rows-2 grid-flow-col gap-4">
          <Average reviews={this.state.data.results} />
          <div className="App">
            <ProgressBar completed={this.state.rate} bgcolor={"#ffd700"} />
          </div>
        </div>
        <div className="col-span-2">
          <Reviews show={this.state.show} count={this.state.count} addReview={this.addReview} data={this.state.data} />
        </div>
      </div>
    );
  }
}

