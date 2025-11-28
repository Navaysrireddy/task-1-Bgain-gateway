export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export interface User {
  email: string;
  name: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: LinkItem[];
}

export interface ContentCard {
  id: number;
  title: string;
  description: string;
  image: string;
  linkText: string;
  date?: string;
  content?: string; // Full text for articles
  location?: string; // Venue for events
  price?: number; // Ticket cost
}