var React = require('react');
var ProductBoxComponent = require('./ProductBoxComponent');
var CardComponent = require('./CardComponent');
var DateComponent = require('./DateComponent');

/*
 * INSTRUCTIONS
 * 1. Customize each one of the pricing boxes to have a different image, brand,
 *    product name and price. Only change the contents of this file.
 * 2. Customize each one of the cards to show a different image, poster, time, 
 *    location and message. Only change the contents of the CardComponent.js 
 *    file.
 * 3. Customize each one of the dates to show a different month, day of the
 *    month and day of the week. You will need to change this file as well as
 *    the DateComponent.js file.
 */

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="row">
					<ProductBoxComponent />
					<ProductBoxComponent />
					<ProductBoxComponent />
					<ProductBoxComponent />
				</div>
				<div className="row">
					<CardComponent
						image="https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg"
						name="Sammy Earhart"
						time="18 mins"
						location="Milwaukee, WI"
						message="So many people forget this: Saying you're a leader doesn't make you a leader. Leading makes you a leader."/>
					<CardComponent
						image="http://www.morganstanley.com/assets/images/people/tiles/michael-wilson.jpg"
						name="Dewey Foerster"
						time="22 mins"
						location="Madison, WI"
						message="Just preordered a Nexus 5x. Google fi here I come!"/>
					<CardComponent
						image="https://ouishare.s3.amazonaws.com/uploads/user/image/104/Profile_Ouishare.jpg"
						name="Betty Bradford"
						time="18 mins"
						location="Madison, WI"
						message="Vote for my boss sister to help her win the Alpine Club Photo contest for this photo of the beautiful New Mexico countryside!"/>
				</div>
				<div className="row">
					<DateComponent />
					<DateComponent />
					<DateComponent />
					<DateComponent />
				</div>
			</div>
		);
	}
});