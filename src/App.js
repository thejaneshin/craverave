import React, { Component } from 'react';
import Location from './components/Location';
import Price from './components/Price';
import Type from './components/Type';
import Results from './components/Results';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: 'location',
      location: '',
      price1: false,
      price2: false,
      price3: false,
      price4: false,
      prices: [],
      type: ''
    };
  }

  onHandleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

     this.setState({
      [name]: value
    });
  }

  onPriceChange = (event) => {
    if(event.target.checked) {
      this.state.prices.push(event.target.value);
    }
    else {
      const index = this.state.prices.indexOf(event.target.value);
      this.state.prices.splice(index, 1);
    }
    this.onHandleInputChange(event);
  } 

  onPageChange = (page) => {
    this.setState({page: page});
  }

  render() {
    const { page, location, price1, price2, price3, price4, type } = this.state;
    return (
      <div>
        <img src={require("./header.png")} alt="header" className="w-third mt3 center" />
        {
          page === 'results'
            ? <Results state={this.state} />
            : (
                <div className="App">
                  <article className="br3 ba b--black-10 mv5 mw6 shadow-5 center">
                    <main className="pa4 black-80 mt5">
                      {
                        page === 'location'
                          ? <Location 
                              onPageChange={this.onPageChange}
                              onHandleInputChange={this.onHandleInputChange}
                              location={location} />
                          : (
                              page === 'price'
                                ? <Price 
                                    onPageChange={this.onPageChange}
                                    onPriceChange={this.onPriceChange}
                                    price1={price1} price2={price2} price3={price3} price4={price4} />
                                : (
                                    page === 'type'
                                      ? <Type onPageChange={this.onPageChange} 
                                          onHandleInputChange={this.onHandleInputChange}
                                          type={type} />
                                      : (
                                          <div>
                                            <h2>404</h2>
                                          </div>
                                        )
                                  )
                            )
                      }
                    </main>
                  </article>  
                </div>
              )   
        }
      </div>
    );
  }

}

export default App;
