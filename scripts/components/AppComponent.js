var React = require('react');
var ProductBoxComponent = require('./ProductBoxComponent');
var CardComponent = require('./CardComponent');
var DateComponent = require('./DateComponent');

/*
 * INSTRUCTIONS
 * 1. Customize each one of the product boxes to have a different image, brand,
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
					<ProductBoxComponent 
					image="http://www.allkidsgolfclubs.com/images/product-images/tartansports/Precise%20XR9%20Ages%209-12.jpg"
					brand="Ping"
					name="Golf CLubs"
					price= "$400"
					/>
					<ProductBoxComponent 
					image="http://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-XboxOne-Himalaya-Console-Bundle-KG4-00051/en-INTL-L-XboxOne-Himalaya-Console-Bundle-KG4-00051-mnco.jpg"
					brand="Microsoft"
					name="Xbox One"
					price= "$400"
					/>
					<ProductBoxComponent 
					image="http://netgadgets.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/h/rh42-7-1500.jpg"
					brand="Tyco"
					name="Helicopter"
					price= "$250"
					/>
					<ProductBoxComponent 
					image="http://img.gawkerassets.com/img/17bdfbe5kgto7jpg/original.jpg"
					brand="Evil"
					name="Killer Shark"
					price= "$1,000,000"
					/>
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
					<DateComponent 
						month= "june"
						date= "10"
						day= "monday"
					/>
					<DateComponent 
						month= "july"
						date= "15"
						day= "friday"						
					/>
					<DateComponent 
						month= "june"
						date= "2"
						day= "wednesday"
					/>
					<DateComponent 
						month= "june"
						date= "6"
						day= "sunday"
					/>
				</div>
			</div>
		);
	}
});