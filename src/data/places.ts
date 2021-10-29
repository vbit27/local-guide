// Restaurant url: https://maps.googleapis.com/maps/api/place/details/json?place_id=ADD_PLACE_ID&fields=name%2Caddress%2Ctype%2Curl%2Cphone_number%2Crating%2Cprice_level&key=AIzaSyDqkIi7UVpXvcUyb0eWH3p-ebnD0dn2Yhg}

export const restaurants = [
  {
    address: 'Rruga Idriz Alidhima, Sarandë, Albania',
    phone_number: '+355 69 786 1816',
    name: 'Taverna Erjoni',
    rating: 4.4,
    price_level: '$',
    types: ['restaurant', 'Mediterranean'],
    url: 'https://maps.google.com/?cid=8223485386262412288',
    id: 'ChIJnyzbtioVWxMRAHzJj2OwH3I',
    description:
      'A small restaurant owned from a fishermen and right next where the fishermen boats are anchored',
    location: {
      lat: 39.8748685,
      lng: 19.988761,
    },
  },
  {
    address: 'Rruga Jonianet 38, Sarandë, Albania',
    phone_number: '+355 69 279 1713',
    name: 'Taverna Garden',
    price_level: '$',
    rating: 4.6,
    types: ['restaurant', 'Mediterranean'],
    url: 'https://maps.google.com/?cid=404154598749224308',
    id: 'ChIJAYN0ZPkUWxMRdL3JXHfYmwU',
    description:
      'A restaurant at the promenade where you can eat good fish with good prices',
    location: {
      lat: 39.8734518,
      lng: 20.0059262,
    },
  },

  {
    address: 'Rruga Mitat Hoxha 49, Sarandë, Albania',
    name: 'Onhezmi Lounge Bar',
    rating: 4.5,
    types: ['restaurant', 'Traditional'],
    price_level: '$',
    url: 'https://maps.google.com/?cid=6942685553138264899',
    location: {
      lat: 39.8701702,
      lng: 20.00240780000001,
    },
    description:
      'A hidden restaurant with amazing hoe made dishes and a lovely view',
    id: 'ChIJVajFkPwUWxMRQ-sKBrpfWWA',
  },
];

export const bars = [
  {
    address: 'Shëtitorja Naim Frashëri, Sarandë 9701, Albania',
    phone_number: '+355 67 715 1845',
    name: 'Jericho Cocktail Bar',
    rating: 4.5,
    price_level: '$$',
    types: ['bar', 'Cocktails'],
    url: 'https://maps.google.com/?cid=13624261783785041750',
    location: {
      lat: 39.8736492,
      lng: 20.0110354,
    },
    description: 'Probably the best cocktails in town',
    id: 'ChIJj3_lE_cUWxMRVu9vbegZE70',
  },
];

export const streetFood = [
  {
    address: 'Rruga Adem Sheme 11, Sarandë, Albania',
    phone_number: '+355 69 968 7919',
    name: 'Fast Food Cuci',
    rating: 4.8,
    price_level: '$',
    types: ['streetFood', 'Street-food'],
    url: 'https://maps.google.com/?cid=14878851165164447503',
    id: 'ChIJ08FsgmQVWxMRD6eInU1MfM4',
    description: 'A great place for grilled chicken or a souvlaki',
    location: {
      lat: 39.8745584,
      lng: 20.0044074,
    },
  },
];

export const usefulServices = [
  {
    address: 'Rruga Flamurit, Sarandë, Albania',
    name: 'Bus Station',
    types: ['usefulServices', 'Bus station'],
    url: 'https://goo.gl/maps/MGGRbPkMLcHgVZhK7',
    id: 'ChIJ08FsgmQVWxMRD6eInU1Mfbus',
    description:
      'The street where buses depart. Buses might park at the beginning of the street or after the crossroad',
    location: {
      lat: 39.8756506411089,
      lng: 20.006450330992145,
    },
  },
];
