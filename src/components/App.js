import { Component } from 'react'
import { CarReady } from './CarReady'
import cardata from './data.json'

export class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    allCars: cardata
  }
  this.sortHeadAZ = this.sortHeadAZ.bind(this);
  this.sortSubHeadAZ = this.sortSubHeadAZ.bind(this);
  this.sortPriceLTH = this.sortPriceLTH.bind(this);
  this.sortPriceHTL = this.sortPriceHTL.bind(this);
}

sortHeadAZ() {
  this.setState(prevState => {
    this.state.allCars.sort((a,b) => {
      const HeadingA = a.Heading.toUpperCase();
      const HeadingB = b.Heading.toUpperCase();
      if (HeadingA < HeadingB){
        return -1;
      }
      if (HeadingA > HeadingB){
        return 1;
      }
      return 0;
    })
  });
}

sortSubHeadAZ() {
  this.setState(prevState => {
    this.state.allCars.sort((a,b) => {
      const SubheadingA = a.Subheading.toUpperCase();
      const SubheadingB = b.Subheading.toUpperCase();
      if (SubheadingA < SubheadingB){
        return -1;
      }
      if (SubheadingA > SubheadingB){
        return 1;
      }
      return 0;
    })
});
}

sortPriceLTH() {
  this.setState(prevState => {
    this.state.allCars.sort((a, b) => (a.Price - b.Price))
});
}

sortPriceHTL() {
  this.setState(prevState => {
    this.state.allCars.sort((a, b) => (b.Price - a.Price))
});
}

  render(){
    return(
      <div className="bigpart">
      <div className="sortBox">
        <button onClick={this.sortHeadAZ}>
          Head AtoZ
        </button>
        <button onClick={this.sortSubHeadAZ}>
          Head AtoZ
        </button>
        <button onClick={this.sortPriceLTH}>
          low to high
        </button>
        <button onClick={this.sortPriceHTL}>
          high to low
        </button>
      </div>
        <CarReady cars={this.state.allCars}/>
      </div>
    )
  }
}
