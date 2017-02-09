var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few example locations to try here:</p>
      <ol>
        <li><Link to="/?location=Boston">Boston, MA</Link></li>
        <li><Link to="/?location=Berlin">Berlin, Germany</Link></li>
        <li><Link to="/?location=Sydney">Sydney, Australia</Link></li>
      </ol>
    </div>
  )
}

module.exports = Examples;
