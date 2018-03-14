import{ CarBody } from './CarBody'
import { PropTypes } from 'react'

export const CarReady = ({cars}) => (
  <div>
    {cars.map((car, i)=>
      <CarBody key={i}
                {...car}/>
    )}
  </div>
)

CarReady.propTypes = {
	cars: function(props) {
		if(!Array.isArray(props.cars)) {
			return new Error(
				"CarReady should be an array"
				)
		} else if(!props.cars.length) {
			return new Error(
				"CarReady must have at least one record"
				)
		} else {
			return null
		}
	}
}
