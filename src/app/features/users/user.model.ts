export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:{
      lat: number;
      lng: number;
    }
  }
  phone: string;
  website: string;
}
