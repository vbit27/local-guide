// Restaurant url: https://maps.googleapis.com/maps/api/place/details/json?place_id=ADD_PLACE_ID&fields=name%2Caddress%2Ctype%2Curl%2Cphone_number%2Crating%2Cprice_level&key=AIzaSyDqkIi7UVpXvcUyb0eWH3p-ebnD0dn2Yhg}

export const restaurants = [
  {
    address: 'Rruga Idriz Alidhima, Sarandë, Albania',
    phone_number: '+355 69 786 1816',
    name: 'Taverna Erjoni',
    rating: 4.4,
    price_level: '$',
    types: ['restaurant', 'Mediterranean'],
    image: '../images/taverna-erjoni.jpg',
    alt: 'fried fish',
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
    address: 'Rruga Mitat Hoxha 49, Sarandë, Albania',
    name: 'Onhezmi Restaurant',
    rating: 4.5,
    types: ['restaurant', 'Traditional'],
    image: '../images/restaurant-onhezmi.jpg',
    alt: 'filled paprika with rice',
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
  {
    address: 'Rruga Jonianet 38, Sarandë, Albania',
    phone_number: '+355 69 279 1713',
    name: 'Taverna Garden',
    price_level: '$',
    rating: 4.6,
    types: ['restaurant', 'Mediterranean'],
    image: '../images/taverna-garden.jpg',
    alt: 'greek salad',
    url: 'https://maps.google.com/?cid=404154598749224308',
    id: 'ChIJAYN0ZPkUWxMRdL3JXHfYmwU',
    description:
      'A restaurant at the promenade where you can eat good fish with good prices',
    location: {
      lat: 39.8734518,
      lng: 20.0059262,
    },
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
    image: '../images/jericho-bar.jpg',
    alt: 'cocktail with orange',
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
    address: 'Rruga Skënderbeu, Sarandë, Albanien',
    name: 'Byrektore Xhavara',
    rating: 5,
    price_level: '$',
    types: ['streetFood', 'Street-food'],
    image: '../images/byrektore-xhavara.jpg',
    alt: 'pastry',
    url: 'https://goo.gl/maps/rrfMQQ745xkeGDrZA',
    id: 'ChIJqw8cf_cUWxMRX0cjXKNopck',
    description:
      'This is place that every local knows. The most delicious byrek in town, perfect for a long day in the beach. Unbeatable prices',
    location: {
      lat: 39.875023,
      lng: 20.009301,
    },
  },
  {
    address: 'AL, Rruga Adem Sheme, 9701, Albanien',
    name: 'Pizza Savos',
    rating: 4.5,
    price_level: '$',
    types: ['streetFood', 'Street-food'],
    image: '../images/pizza-savos.jpg',
    alt: 'wraps om a table',
    url: 'https://g.page/pizzasavos?share',
    id: 'ChIJgY8zQigVWxMRpGP4VBvlJe8',
    description:
      'Ever tried a skepasti? If not, then you are missing out. This pizza place is up on the hill, but offers the best skepasti. If not in the mood to walk all the way up there, you can also call and make a delivery. And be careful, the portion is huge. ',
    location: {
      lat: 39.877848,
      lng: 20.003734,
    },
  },
  {
    address: 'Rruga Adem Sheme 11, Sarandë, Albania',
    phone_number: '+355 69 968 7919',
    name: 'Fast Food Cuci',
    rating: 4.8,
    price_level: '$',
    types: ['streetFood', 'Street-food'],
    image: '../images/fast-food-cuci.jpg',
    alt: 'grilled chicken',
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
    name: 'Bus Station (National and International)',
    types: ['bus-station', 'usefulServices'],
    image: '../images/bus-station.jpg',
    alt: 'bus station',
    url: 'https://goo.gl/maps/MGGRbPkMLcHgVZhK7',
    id: 'ChIJ08FsgmQVWxMRD6eInU1Mfbus',
    description:
      'The street where buses depart. Buses might park at the beginning of the street or after the crossroad',
    location: {
      lat: 39.8756506411089,
      lng: 20.006450330992145,
    },
  },
  {
    address: 'Rruga Jonianet, Sarandë, Albania',
    name: 'Fresh Vegetable Market',
    types: ['bus-station', 'usefulServices'],
    image: '../images/vegetable-market.jpg',
    alt: 'vegetable market',
    url: 'https://goo.gl/maps/nXfvGWD8HdQKwrw16',
    id: 'ChIJwYYmaSMVWxMRUQ643gbDBb8',
    description:
      'The fresh fruit and vegetable market with vendors from all around the region. Go early in the morning to get the freshest things.',
    location: { lat: 39.87321480394076, lng: 20.003192743981245 },
  },
  {
    address: 'Rruga Mitat Hoxha 5, Sarandë, Albanien',
    name: 'Bus Stop to Ksamil & Butrint',
    types: ['bus-station', 'usefulServices'],
    image: '../images/ksamil-bus-station.jpg',
    alt: 'bus from the inside',
    url: 'https://goo.gl/maps/VgWjsUW3BPXrDxPU8',
    id: 'ChIJB5Z9n-YVWxMRteAb9Gm3JXw',
    description:
      'Station of departure of the bus that drives to Butrint through Ksamil. Check at the bus station for an updated timetable',
    location: { lat: 39.87320756408015, lng: 20.00240206718445 },
  },
  {
    address: 'Lagjia Nr 4, Rruga Mitat Hoxha, Sarandë 9701, Albanien',
    name: 'Port of Saranda',
    types: ['bus-station', 'usefulServices'],
    image: '../images/port.jpg',
    alt: 'port with boats',
    url: 'https://goo.gl/maps/orEyC4TAMJSUzFM28',
    id: 'ChIJg_UtnfwUWxMRxaOvgivR7q8',
    description:
      'The main port of Saranda. Here is where boats to Corfu and Italy depart from. Next to the port are all the travel agencies that sell tickets',
    location: { lat: 39.87142487853256, lng: 20.00312626361847 },
  },
  {
    address: 'Rruga Flamurit, Sarandë, Albanien',
    name: 'Money Exchange',
    types: ['bus-station', 'usefulServices'],
    image: '../images/money-exchange.jpg',
    alt: 'hands holding dollars',
    url: 'https://goo.gl/maps/wTGgQ45NaaSvrfe58',
    id: 'ChIJv_1f0BcVWxMRhZ5wVvAJNI8',
    description:
      'A very small money exchange office. Exchange rate in Albania is better in exchange offices than doing it through the banks',
    location: { lat: 39.87405154454185, lng: 20.009772777557373 },
  },
  {
    address: 'Rruga Flamurit, Sarandë, Albanien',
    name: 'Post Office',
    types: ['bus-station', 'usefulServices'],
    image: '../images/post-office.jpg',
    alt: 'letters and envelopes',
    url: 'https://goo.gl/maps/tqrL1hiD4E8rwX9e7',
    id: 'ChIJ3YLV0PkUWxMRdUFGDyAroro',
    description: 'The official post office in Saranda',
    location: { lat: 39.87433767214605, lng: 20.008522868156433 },
  },
  {
    address: 'Rruga Onheizmi, Sarandë 9701, Albanien',
    name: 'Hospital',
    types: ['bus-station', 'usefulServices'],
    image: '../images/hospital.jpg',
    alt: 'nurse',
    url: 'https://goo.gl/maps/k1gWksWCs2Qm4dPx8',
    id: 'ChIJM9fCpkgVWxMRrVBamIZ1cUU',
    description: 'The only hospital in town',
    location: { lat: 39.8743808999537, lng: 20.000776648521423 },
  },
];
