import { Product, Testimonial, FooterSection, ContentCard } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Air Max Pulse",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Jordan One Take 4",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    price: 145.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Zoom Freak 5",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    price: 210.50,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Hellen Jummy",
    role: "Team Lead",
    company: "Zoomerr",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
  },
  {
    id: 2,
    name: "Hellena John",
    role: "Co-founder",
    company: "SHELLS",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
  },
  {
    id: 3,
    name: "David Oshodi",
    role: "Manager",
    company: "ArtVenue",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Designer",
    company: "Waves",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    text: "Magna egestas aliquet ut ultricies eget. Sed et sed ut eu purus aliquam vitae habitasse."
  }
];

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "#products" },
      { label: "Overview", href: "#solutions" },
      { label: "Browse", href: "#collection" },
      { label: "Accessibility", href: "#solutions" },
      { label: "Five", href: "#resources" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Brainstorming", href: "#solutions" },
      { label: "Ideation", href: "#collection" },
      { label: "Wireframing", href: "#resources" },
      { label: "Research", href: "#products" },
      { label: "Design", href: "#collection" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "mailto:support@collers.com" },
      { label: "Developers", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Reports", href: "#" }
    ]
  }
];

export const ARTICLES: ContentCard[] = [
  {
    id: 1,
    title: "Congue velit risus",
    description: "Nunc gravida semper tellus neque scelerisque eget tincidunt in.",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
    linkText: "Read article",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem a metus vehicula rhoncus. Sed efficitur, ligula eget aliquam venenatis, libero est volutpat eros, vitae blandit ex nulla ac orci. Nunc gravida semper tellus neque scelerisque eget tincidunt in. Fusce ac nulla vitae augue laoreet suscipit. \n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ullamcorper metus et nibh sodales, nec tristique ligula vehicula. Proin non tortor vel risus consectetur lacinia."
  },
  {
    id: 2,
    title: "Ut mauris",
    description: "Phasellus venenatis massa bibendum posuere dictum tristique.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
    linkText: "Read article",
    content: "Phasellus venenatis massa bibendum posuere dictum tristique. Vivamus ac odio ac eros maximus rhoncus. Donec et sapien in nunc ultricies rhoncus. Nam finibus, nunc id dictum iaculis, ipsum ipsum congue est, vel finibus ligula enim et orci. \n\nSuspendisse potenti. Duis vel ante dapibus, finibus mi sed, viverra risus. Maecenas blandit, sem non efficitur hendrerit, nibh diam facilisis libero, ac laoreet nisi est et lacus."
  },
  {
    id: 3,
    title: "Aliquam tortor nunc",
    description: "Leo mollis fermentum praesent in commodo ut velit purus in.",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
    linkText: "Read article",
    content: "Leo mollis fermentum praesent in commodo ut velit purus in. Morbi eu elit interdum, varius ligula vel, dapibus leo. Integer sed posuere nibh. Ut sit amet mauris vitae urna gravida pharetra. \n\nCras id massa in purus aliquet pharetra. Integer consectetur tincidunt turpis, ut condimentum erat. Sed id lorem urna. Curabitur id ex nec risus ultrices sagittis."
  },
  {
    id: 4,
    title: "Fusce rem morbi",
    description: "In sed bibendum metus pretium cursus tellus praesent.",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
    linkText: "Read article",
    content: "In sed bibendum metus pretium cursus tellus praesent. Ut lobortis nisl vitae lacus feugiat, vel facilisis nisi porttitor. Nullam varius velit in est viverra, a lacinia ligula tristique. \n\nDonec vulputate leo sed velit dictum, sed cursus metus ullamcorper. Praesent sed facilisis purus. Quisque et consectetur eros. Nulla facilisi. Proin eget lectus at ex venenatis venenatis."
  }
];

export const EVENTS: ContentCard[] = [
  {
    id: 1,
    title: "SneakerCon 2024",
    description: "The biggest sneaker convention in the world comes to your city.",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "Buy Tickets",
    date: "March 15, 2024",
    location: "Grand Expo Center, NY",
    price: 45.00
  },
  {
    id: 2,
    title: "Launch Party: Air Zoom",
    description: "Exclusive launch event for the new Air Zoom series.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "Buy Tickets",
    date: "April 02, 2024",
    location: "Collers Flagship, LA",
    price: 120.00
  },
  {
    id: 3,
    title: "Design Workshop",
    description: "Learn from top designers how to customize your kicks.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "Buy Tickets",
    date: "May 20, 2024",
    location: "Design Lab, Chicago",
    price: 250.00
  },
  {
    id: 4,
    title: "Summer Collector Meetup",
    description: "Trade, sell, and show off your collection with the community.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    linkText: "Buy Tickets",
    date: "June 10, 2024",
    location: "City Park, Miami",
    price: 15.00
  }
];