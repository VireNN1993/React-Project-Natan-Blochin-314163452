// Complete card data as received from server (includes _id, likes, user_id, bizNumber)
export type CardType = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web?: string;
  image: {
    url: string;
    alt: string;
  };
  address: {
    state?: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip?: number;
  };
  bizNumber?: number;
  likes: string[];
  user_id: string;
};

// Form inputs for creating a new card
export type CreateCardFormData = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web?: string;
  imageUrl?: string;
  imageAlt?: string;
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip?: number;
};
