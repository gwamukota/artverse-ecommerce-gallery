export interface ArtItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  type: 'digital' | 'framed' | 'print' | 'webdesign' | 'animation';
  image: string;
  description: string;
}

export interface CartItem extends ArtItem {
  quantity: number;
}

export type PaymentMethod = 'mpesa' | 'paypal' | 'bank' | 'payoneer';

export interface PaymentDetails {
  method: PaymentMethod;
  email?: string;
  phone?: string;
  accountNumber?: string;
}