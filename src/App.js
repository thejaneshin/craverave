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
      page: 'location'
    };
  }

  onPageChange = (page) => {
    this.setState({page: page});
  }

  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <article className="br3 ba b--black-10 mv5 mw6 shadow-5 center">
          <main className="pa4 black-80 mt5">
            {
              page === 'location'
                ? <Location onPageChange={this.onPageChange} />
                : (
                    page === 'price'
                      ? <Price onPageChange={this.onPageChange} />
                      : (
                          page === 'deliverytakeout'
                            ? <DeliveryOrTakeout onPageChange={this.onPageChange} />
                            : ( 
                                page === 'category'
                                  ? <Category onPageChange={this.onPageChange} />
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
