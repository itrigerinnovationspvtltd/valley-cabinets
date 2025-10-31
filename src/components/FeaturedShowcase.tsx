import Image from 'next/image';

const showcaseItems = [
  {
    id: 'alpine-mist',
    name: 'Alpine Mist Collection',
    image: '/Web Images/Apline Mist/Alpine Hero.jpg',
    description: 'Experience the beauty of our Alpine Mist collection, featuring a stunning blend of natural wood tones and contemporary design. This collection brings the serenity of mountain landscapes into your home with its soft, misty finish that complements any interior style.',
    features: [
      'Natural wood grain texture',
      'Soft, muted finish',
      'Perfect for modern and traditional homes',
      'Easy to maintain and clean'
    ],
    price: 'Starting at $1,450/linear ft'
  },
  {
    id: 'maple-vale',
    name: 'Maple Vale Collection',
    image: '/Web Images/Maple Vale/maple hero.jpeg',
    description: 'Discover the warmth and elegance of our Maple Vale collection. Crafted from premium maple wood with a rich, honey-toned finish that adds sophistication to any kitchen space. Perfect for those who appreciate timeless beauty and exceptional craftsmanship.',
    features: [
      'Premium maple wood construction',
      'Rich honey-toned finish',
      'Timeless design appeal',
      'Durable and long-lasting'
    ],
    price: 'Starting at $1,600/linear ft'
  },
  {
    id: 'stone-harbour',
    name: 'Stone Harbour',
    image: '/Web Images/stone-harbour/E2-Charcoal-Gallery1.jpg',
    description: 'The Stone Harbour collection offers a perfect balance of warmth and sophistication. Featuring a rich, neutral gray tone with refined shaker styling, it adds depth and character to any kitchen while maintaining a clean, contemporary aesthetic.',
  features: [
    'Smooth neutral gray finish',
    'Elegant shaker-style design',
    'Crafted for durability and timeless appeal',
    'Customizable layout and sizing options'
  ],
  price: 'Starting at $1,750/linear ft'
  },
  {
  id: 'whitewater-bay',
  name: 'Whitewater Bay',
  image: '/Web Images/whitewater-bay/E1-5.jpg',
  description: 'The Whitewater Bay collection embodies timeless coastal elegance with its crisp white finish and subtle detailing. Designed to bring a bright, airy feel to any kitchen, this collection combines classic shaker styling with modern durability and effortless sophistication.',
  features: [
    'Crisp white shaker finish',
    'Bright and airy coastal design',
    'Durable construction with premium materials',
    'Available in multiple configurations'
  ],
  price: 'Starting at $1,700/linear ft'
},
{
  id: 'sage-green',
  name: 'Sage Green',
  image: '/Web Images/Sage Green/sage-hero-edit.jpg',
  description: 'The Sage Green collection introduces a refreshing touch of nature-inspired charm to your kitchen. With its soft green hue and classic shaker craftsmanship, this design creates a calming, elegant atmosphere that blends traditional warmth with modern simplicity.',
  features: [
    'Soft, nature-inspired green finish',
    'Classic shaker-style cabinetry',
    'Premium build quality and finish',
    'Perfect for modern and transitional interiors'
  ],
  price: 'Starting at $1,750/linear ft'
}
];

export default function FeaturedShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#172128] mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our most popular cabinet collections, each carefully crafted to bring beauty, functionality, and lasting value to your home.
          </p>
        </div>

        <div className="space-y-32">
          {showcaseItems.map((item, index) => (
            <div key={item.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={600}
                    className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="max-w-lg">
                  <h3 className="text-4xl font-bold text-[#172128] mb-6">
                    {item.name}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-[#172128] mb-4">Key Features:</h4>
                    
                    <ul className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#EBEBEB] rounded-xl px-6 py-4">
                      <a href='#contact' className=" rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center">
                        Book a Consultation
                      </a>
                    </div>
                    <a href='https://valleycabinets.ca/collections/samples' className="bg-[#AE9F8F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#79654F] transition-colors duration-300 flex items-center justify-center">
                      Order Sample
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
