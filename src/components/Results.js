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

    axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants,food&', {
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
      this.setState({
        businesses: response.data.businesses,
        loading: false
      });

    })
    .catch(err => console.log(err));
  }

  render() {
    const { loading, businesses } = this.state;
    return (
      <div className="measure animated fadeIn">
        <p className="f2 fw6 ph0 mh0">Results</p>

        <div>
          {
            loading === true
              ? <ReactLoading type={'spinningBubbles'} color={'#42a5f5'}  height={'20%'} width={'20%'} />
              : (
                  <div>
                    {businesses.map((business, index) => {
                      return (
                        <p key={index}><img src={business.image_url} alt={business.name} height="100%" width="100%"/><a href={business.url} target="_blank" rel="noopener noreferrer">{business.name}</a> {business.rating} {business.review_count}</p>)
                    })}
                  </div>
                )
          }
        </div>
      </div>
    );
  }


}

export default Results;