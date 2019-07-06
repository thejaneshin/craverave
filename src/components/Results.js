import React from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import './animate.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      loading: true
    }
  }

  componentDidMount() {
    const { location, prices, type } = this.props.state;
    let pricesStr = prices.join();

    axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=10&categories=restaurants,food&', {
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY
      },
      params: {
        location: location,
        ...(pricesStr ? {price: pricesStr} : {}),
        ...(type ? {term: type} : {})
      }

    })
    .then(response => {
      console.log(response.data.businesses);
      this.setState({
        businesses: response.data.businesses,
        loading: false
      });

    })
    .catch(err => {
      console.log(err);
      this.setState({loading: false});
    });
  }

  render() {
    const { loading, businesses } = this.state;
    return (
      <div className="animated fadeIn">
        <p className="f2 fw6 center mv5">Results</p>
        <div className="mv5">
          {
            loading === true
              ? <div className="center"> 
                  <ReactLoading type={'spinningBubbles'} color={'#42a5f5'}  height={'10%'} width={'10%'} />
                </div>
              : (
                  <div className="res">
                    <ul className="list pl0 ml5">
                      {businesses.map((business, index) => {
                      return (
                        <li key={index} className="dt pl7 pb5">
                          <img src={business.image_url.replace('o.jpg', 'ls.jpg')} alt={business.name} className="dtc v-top mw-none br2" />
                          <div className="dtc pl6 v-mid lh-copy">
                            <a href={business.url} target="_blank" rel="noopener noreferrer" className="f4 link dim">{business.name}</a>
                            <br/>
                            <div className="dt-row"><br/></div>
                            <div className="ml3 v-mid dt-row">
                              <span> 
                                {
                                  business.rating === 5
                                    ? <img src={require("./yelpstars/large_5.png")} alt="five" />
                                    : (
                                        business.rating === 4.5
                                          ? <img src={require("./yelpstars/large_4_half.png")} alt="four_half" />
                                          : (
                                              business.rating === 4
                                                ? <img src={require("./yelpstars/large_4.png")} alt="four" />
                                                : (
                                                    business.rating === 3.5
                                                      ? <img src={require("./yelpstars/large_3_half.png")} alt="three_half" />
                                                      : (
                                                          business.rating ===  3
                                                            ? <img src={require("./yelpstars/large_3.png")} alt="three" />
                                                            : (
                                                                business.rating === 2.5
                                                                  ? <img src={require("./yelpstars/large_2_half.png")} alt="two_half" />
                                                                  : (
                                                                      business.rating === 2
                                                                        ? <img src={require("./yelpstars/large_2.png")} alt="two" />
                                                                        : (
                                                                            business.rating === 1.5
                                                                              ? <img src={require("./yelpstars/large_1_half.png")} alt="one_half" />
                                                                              : (
                                                                                  business.rating === 1
                                                                                    ? <img src={require("./yelpstars/large_1.png")} alt="one" />
                                                                                    : <img src={require("./yelpstars/large_0.png")} alt="zero" />
                                                                                )
                                                                          )
                                                                    )
                                                              )
                                                        )
                                                  )
                                            )

                                      )
                                }
                                <span className="f5 pl2 v-top nowrap">
                                  {`${business.review_count} reviews`}
                                </span>
                                
                              </span>
                            </div>
                            <div className="ml3 v-mid dt-row f5">
                              <span>
                                {business.price}
                              </span>
                              <span className="ml3 nowrap">
                                {business.categories.map((category, i) => {
                                  return (
                                    <span key={i}>
                                      {
                                        i < business.categories.length - 1
                                          ? `${category.title}, `
                                          : category.title
                                      }
                                    </span>
                                )})}
                              </span>
                            </div>
                            <div className="ml3 v-mid dt-row f5">
                              <br/>
                              <span className= "nowrap">
                                {business.display_phone}
                              </span>
                            </div>
                            <div className="ml3 v-mid dt-row f5">
                              <a 
                                href={`https://maps.google.com/?q=${business.name} ${business.location.address1} ${business.location.city}`} 
                                target="_blank" rel="noopener noreferrer" 
                                className="link dim">{business.location.address1}</a>
                            </div>
                          </div>
                        </li>
                      )})}
                    </ul>
                  </div>
                )
          }
        </div>
      </div>
    );
  }


}

export default Results;