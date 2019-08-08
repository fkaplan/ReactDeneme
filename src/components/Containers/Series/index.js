import React, { Component } from "react";
import SeriesList from "../../SeriesList";
import Loader from "../../Loader";
import Intro from "../../Intro";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  /*
  componentDidMount(){
    const series=["Vikings","Game of Thrones"];
    setTimeout(() => {
      this.setState({series : series});
    }, 2000);
  }
  */

  /*
  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=vikings")
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }
  */

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <Intro message="Here you can find all of your most loved series!" />
        The length of series array = {this.state.series.length}
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please enter series name into the input</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV series have been found</p>
        )}
        {isFetching && (
          <p>
            <Loader />
          </p>
        )}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
