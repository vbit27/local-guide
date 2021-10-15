import axios from 'axios';

export async function getData() {
  /*const options = {
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: '12.91285',
      longitude: '100.87808',
      limit: '30',
      currency: 'USD',
      distance: '2',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '8bb992d559msh4c1cffd32d2f4c0p1c5798jsn87a62d414b84',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

    */

  var config = {
    //method: 'get',
    // url: `http://example.com`,
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shop&location=35.792491,-78.653009&radius=2000&region=us&type=cafe,bakery&key=${process.env.REACT_APP_GOOGLE_KEY}`,

    headers: {
      'access-control-allow-credentials': 'true',
      'access-control-allow-headers': 'ver',
      'access-control-allow-methods': 'GET, POST',
      'access-control-allow-origin': '*',
      connection: 'keep-alive',
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  //////

  /*  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${process.env.REACT_APP_GOOGLE_KEY}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }*/
}
