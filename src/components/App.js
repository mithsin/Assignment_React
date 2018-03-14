import { Component } from 'react'
import { CarReady } from './CarReady'
import cardata from './data.json'

export class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    allCars: cardata
  }
}

  render(){
    return(
      <div className="bigpart">
        <CarReady cars={this.state.allCars}/>
      </div>
    )
  }
}
