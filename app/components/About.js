var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="page-title">About</h1>
      <div className="callout primary">
        <h5>This website is made using <a href="https://facebook.github.io/react">ReactJS</a></h5>
        <h5>Weather is found using <a href="http://openweathermap.org">Open Weather Map</a></h5>
      </div>
    </div>
  )
}

module.exports = About;
