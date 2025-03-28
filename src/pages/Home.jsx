import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl px-6"
          >
            <h1 className="font-playfair text-5xl md:text-7xl mb-6">Welcome to Brew & Gather</h1>
            <p className="font-poppins text-xl md:text-2xl mb-8">Where coffee meets community</p>
            <a
              href="#featured"
              className="inline-block bg-cafe-brown text-cream px-8 py-3 rounded-full font-poppins hover:bg-cream hover:text-cafe-brown transition-colors"
            >
              Explore Our Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl text-center mb-16">Featured Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDrinks.map((drink, index) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={drink.image} alt={drink.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-playfair text-2xl mb-2">{drink.name}</h3>
                  <p className="font-poppins text-gray-600 mb-4">{drink.description}</p>
                  <p className="font-poppins text-cafe-brown text-lg">${drink.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredDrinks = [
  {
    name: "Signature Latte",
    description: "House-made vanilla syrup, espresso, and silky steamed milk",
    price: "4.95",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80"
  },
  {
    name: "Pour Over",
    description: "Single-origin beans, hand-poured for optimal flavor extraction",
    price: "3.95",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Cold Brew",
    description: "Smooth, 24-hour steeped cold brew with subtle chocolate notes",
    price: "4.50",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export default Home;