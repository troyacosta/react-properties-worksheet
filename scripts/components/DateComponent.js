var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="date">
				<header>{this.props.month}</header>
				<h1>{this.props.date}</h1>
				<h2>{this.props.day}</h2>
			</div>
		);
	}
});