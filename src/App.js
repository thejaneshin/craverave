import React, { Component } from 'react';
import Location from './components/Location';
import Price from './components/Price';
import DeliveryOrTakeout from './components/DeliveryOrTakeout';
import Category from './components/Category';
import Results from './components/Results';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: 'location',
      location: '',
      price: '1',
      delivery: false,
      takeout: false,
      category: ''
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


  render() {
    const { page, location, price, delivery, takeout, category } = this.state;
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
                          page === 'deliverytakeout'
                            ? <DeliveryOrTakeout 
                                onPageChange={this.onPageChange}
                                onHandleInputChange={this.onHandleInputChange}
                                delivery={delivery}
                                takeout={takeout} />
                            : ( 
                                page === 'category'
                                  ? <Category onPageChange={this.onPageChange} 
                                      onHandleInputChange={this.onHandleInputChange}
                                      category={category} />
                                  : <Results />
                              )
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
