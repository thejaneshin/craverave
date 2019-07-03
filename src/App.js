import React, { Component } from 'react';
import axios from 'axios';
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
      price: '1',
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

  onPageChange = (page) => {
    this.setState({page: page});
  }

  createUrl = () => {
    const { location, price, type } = this.state;

    axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?', {
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY
      },
      params: {
        location: location,
        price: price,
        term: type
      }

    })
    .then(response => {
      const resResults = response.data.businesses
      console.log(resResults);
    });
  }

  render() {
    const { page, location, price, type } = this.state;
    return (
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
                          onHandleInputChange={this.onHandleInputChange}
                          price={price} />
                      : (
                          page === 'type'
                            ? <Type onPageChange={this.onPageChange} 
                                onHandleInputChange={this.onHandleInputChange}
                                type={type} />
                            : <Results createUrl={this.createUrl} />
                        )
                  )
            }
          </main>
        </article>  
      </div>
    );
  }

}

export default App;
