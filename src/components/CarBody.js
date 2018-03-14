import { PropTypes } from 'react'

const blanka = "http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png";
const bridge = "http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg";



export const CarBody = ({ showBridge, Heading, Subheading, Price}) => (
	<div className="carbody">
		<div className="innerBody">
	    <div className={(showBridge === true)? "carBodyBg2" : "carBodyBg"}>
	      <img className="tImg" src={(showBridge === true)? null : blanka} />
	    </div>
			<div className="mid">
				<p className="heading">{Heading}</p>
				<p className="subhead">{Subheading}</p>
			</div>
			<div className="priceBox">
			<hr />
			<p className="price">${Price}</p>
			</div>
		</div>
	</div>

)
