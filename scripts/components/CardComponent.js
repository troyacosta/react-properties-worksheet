var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="card">
				<header>
					<img src="http://blogdailyherald.com/wp-content/uploads/2014/10/wallpaper-for-facebook-profile-photo.jpg" />
					<div>
						<a href="#" className="name">Tracy Lawrence</a>
						<div>
							<div className="time">23 mins</div>
							<div className="location">Milwaukee, WI</div>
						</div>
					</div>
				</header>
				<p>
					Concerned Mother Quote of the Day:<br />
					&quot;Well I'm glad you're having fun with all those dogs of
					yours, whether it be chasing them around the park or trying
					to sell them on the internet&quot;
				</p>
			</div>

		);
	}
});