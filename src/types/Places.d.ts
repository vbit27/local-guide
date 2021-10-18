interface Places {
  address: string;
  phone_number?: string;
  name: string;
  rating?: number;
  price_level?: number;
  types?: string[];
  url: string;
  id: string;
  location: {
    lat: number;
    lng: number;
  };
}
