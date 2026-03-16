import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vedic A2 Cow Ghee',
    subtitle: 'Sahiwal Heritage',
    price: 42.00,
    rating: 5,
    reviews: 124,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5NsKBEJeF9a8vjTOC0X7USISNP-JrmaNjIqdKD9NRrkt8yfJWgaITwQtjQ8OONiNmrRQqnxtfn9jgrZCcs671x7hSt7PWH2wE8feaThmH-iYNlQbA23Jo_RHIS56Qiy5QgaforsWnsWK4R0mlhokB9JSHV4IqUa4DuA8peA7qYal2Vm8NwQPaDE4mxxM3ylqK-f5uv0i-_jXyQ3e4neTyjEOnWCMUEyfQGFVZTWo7R_p2GRrENtaUiXUwUNRwKBIFH9romPT8Ol9i',
    tags: ['Grass-Fed', 'Hand-Churned', 'Gluten-Free'],
    description: 'Crafted from the milk of free-roaming A2 cows, our ghee is slow-cooked over wood fires using the traditional Bilona method. This ensures a rich, nutty aroma and a granular texture that melts like liquid gold.'
  },
  {
    id: '2',
    name: 'Artisan Buffalo Ghee',
    subtitle: 'Rich & Creamy',
    price: 38.00,
    rating: 4,
    reviews: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXWxyNSBvfy7lEwd61VT2d9ak4QLpk1RJBcbrF7LGzkvRFiVuRvkGEhIA-lVSygibqzeUSE3F8hSjs29eXTQmQ-TAXlGJzOKN0JSQGFEFOA2Nvt6SWTPks2tanwB548kuQofz3CBUStlisD6R7nZMWmk1Php5NK0iE9o10Bsuxw4V3NVvygijGohsNlbOdTM-KzsqPyyPheYJOUSWqCAwOAauhyNd5Qg3X5rHyF5YHqsCezKVI-4Z_lluIwjWJ1jkgsrhcmWnjhbAT',
    tags: ['Slow-Cooked', 'Artisanal'],
    description: 'Our Artisan Buffalo Ghee is known for its pure white color and thick, creamy consistency. Sourced from water buffaloes, it offers a distinct flavor profile that is perfect for high-heat cooking.'
  },
  {
    id: '3',
    name: 'Herb Infused Ghee',
    subtitle: 'Garlic & Rosemary',
    price: 45.00,
    rating: 5,
    reviews: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA32u98kuxUctdPnvVc8cEQ5K2-AB-XjMVuP5wz5OKD-nEHAqSSTybMmtd0O4f9jaQW8ey8PPWJg82tEAGqzB92Jv0ENeuVicPEOa_b0jWPrqRkN1zhIS87d97OzBHcl4FVsIjrrMNYNXojrMHiK-J6XgEW6uhyhpEn0Uca7CcHXW9XEud5Tm5ZPLhG2Bd8oFEZM0O6wMW2aLdP118UDutsn97t-SOqhhR7OFSSs8APwvUc2QH6HRqOTus1K_jh8j854wWajgJ-fEu6',
    tags: ['Small Batch', 'Infused'],
    description: 'A savory blend of our premium ghee infused with fresh garlic and rosemary. Perfect for roasting vegetables, searing steaks, or simply spreading on warm sourdough bread.'
  },
  {
    id: '4',
    name: 'Heritage Grass-Fed Ghee',
    subtitle: 'Smoked Batch',
    price: 42.00,
    rating: 5,
    reviews: 156,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPUGX4PTNZPBEVPge7YE3AOp8NnyW86RYdeIa-_uhofFXmhTqqUYGq8ylijD4CatFgLf0HIBltii83QXrAO_DtY14LSbi6HIBxyTJ4M4OODkiAMylDhEcKEm_tzfqpR9Xe9qFngoJtP7gJXs2NAH22KzV9zt11Qx2QpyO5H1peWew5vz7Y__Dcab8V1CSRHzpViP5lzo_eHSHMOEGqS8hUVC_m5J2jtqrd-YgTZF458dGkq-3QGvzZI-cgyEZ5JTdJAUPEsMEvZBZc',
    tags: ['Smoked', 'Traditional'],
    description: 'Slow-clarified over slow wood fires for a rich, nutty profile that elevates every dish.'
  },
  {
    id: '5',
    name: 'Turmeric Root Essence',
    subtitle: 'Curcumin Infused',
    price: 48.00,
    rating: 5,
    reviews: 92,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUOijyyhs0Xxx0qULfx0BidRFVz6eGxPHV9ImGbbMZoyyiVS9U2eu2f_syv_OZ7XZgBBSY856Iv1dxcASpdG5Y45pCz5t0kTRTR7GmZFmZlpFun_dwZCT1bzxVdsZ4_aBvucZrdSM47t_6GcQhbb6Etl2p6LUp67vAZ869_F6BAbXZUhR2b9sZ1bwQ7wYTzWZy6QZ1AxZ3fPjbqO_8tMMy5P_X6JFJ30JyvznF_0xeeCArGiW9-xKJnl2SMA4ZfbAztb3sw2f1xpzt',
    tags: ['Healing', 'Infused'],
    description: 'Infused with wild turmeric and black pepper to maximize the golden healing properties.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Eleanor Vance',
    verified: true,
    rating: 5,
    comment: '"The texture is unlike anything I\'ve bought at a supermarket. It has this incredible graininess that just speaks of its authenticity. I use it for my morning bulletproof coffee and it\'s transformative."'
  },
  {
    id: 'r2',
    author: 'Julian Thorne',
    verified: true,
    rating: 4,
    comment: '"Rich aroma and a deep golden color. You can really taste the wood-fire clarification process. My only gripe is that it sells out too fast! Will be ordering two jars next time."'
  }
];
