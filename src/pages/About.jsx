import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl mb-6">Our Story</h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2020, Brew & Gather was born from a simple idea: create a space where great coffee and community come together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
            alt="Coffee being prepared"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-playfair text-3xl mb-6">Our Philosophy</h2>
            <p className="font-poppins text-gray-600 mb-4">
              We believe that every cup of coffee has a story to tell. From the farmers who nurture the beans to the baristas who craft each drink, we're committed to quality at every step.
            </p>
            <p className="font-poppins text-gray-600">
              Our space is designed to be your third place – not home, not work, but a community hub where you can relax, connect, and enjoy exceptional coffee.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-cafe-brown mb-4">{value.icon}</div>
              <h3 className="font-playfair text-xl mb-4">{value.title}</h3>
              <p className="font-poppins text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    icon: "☕️",
    title: "Quality First",
    description: "We source the finest beans and ingredients, ensuring every cup meets our high standards."
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Committed to eco-friendly practices and supporting sustainable coffee farming."
  },
  {
    icon: "🤝",
    title: "Community",
    description: "Creating a welcoming space where everyone feels at home."
  }
];

export default About;