var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      alert(errorMessage);
    });
  },
  componentDidMount: function() {
    var queryLocation = this.props.location.query.location;
    if(queryLocation && queryLocation.length > 0) {
      this.handleSearch(queryLocation);
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function(newProps) {
    var queryLocation = newProps.location.query.location;
    if(queryLocation && queryLocation.length > 0) {
      this.handleSearch(queryLocation);
      window.location.hash = "#/";
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Getting weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
