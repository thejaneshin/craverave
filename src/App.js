import React, { Component } from 'react';
import Location from './components/Location';
import Price from './components/Price';
import Type from './components/Type';
import DecidedType from './components/DecidedType';
import UndecidedType from './components/UndecidedType';
import Random from './components/Random';
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
      type: '',
      allCategories: [],
      notWanted: [],
      randomPick: ""
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
    this.setState({page});
  }

  onCategoriesRetrieve = (allCategories) => {
    this.setState({allCategories});
  }

  onNotWantedChange = (notWanted) => {
    this.setState({notWanted});
  }

  onPickRandom = () => {
    const leftovers = this.state.allCategories.filter((el) => !this.state.notWanted.includes(el));
    const type = leftovers[Math.floor(Math.random() * leftovers.length)];
    this.setState({type});
  }

  render() {
    const { page, location, price1, price2, price3, price4, type } = this.state;
    return (
      <div>
        <div className="header pl5 pv2">
          <img src={require("./header.png")} alt="header" width="15%" height="auto" />
        </div>
        {
          page === 'results'
            ? <Results state={this.state} />
            : (
                <div className="App">
                  {
                    page === 'undecided'
                      ? 
                        <UndecidedType 
                          onPageChange={this.onPageChange}
                          onCategoriesRetrieve={this.onCategoriesRetrieve}
                          onNotWantedChange={this.onNotWantedChange} />
                      : (
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
                                                ? <Type onPageChange={this.onPageChange} />
                                                : (
                                                    page === 'decided'
                                                      ? <DecidedType
                                                          onPageChange={this.onPageChange} 
                                                          onHandleInputChange={this.onHandleInputChange}
                                                          type={type} />
                                                      : (
                                                          page === 'random'
                                                            ? <Random 
                                                                onPageChange={this.onPageChange}
                                                                type={type}
                                                                onPickRandom={this.onPickRandom} />
                                                            : <div>404</div>
                                                        )
                                                  )
                                            )
                                      )
                              }
                            </main>
                          </article>
                        )
                    }
                  </div>
              )   
        }
      </div>
    );
  }


}

export default App;
