var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="product">
				<img src={this.props.image || 'http://a3.zassets.com/images/z/3/2/5/1/5/1/3251516-p-LARGE_SEARCH.jpg'} />
				<div className="brand">{this.props.brand || 'Bostonian'}</div>
				<div className="name">{this.props.name || 'Vesey Free'}</div>
				<div className="price">${this.props.price ||  '120.00' }</div>
			</div>
		);
	}
});