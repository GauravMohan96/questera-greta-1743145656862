import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl mb-6">Visit Us</h1>
          <p className="font-poppins text-xl text-gray-600">
            We'd love to hear from you or see you in person!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="font-playfair text-3xl mb-6">Contact Info</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-playfair text-xl mb-2">Address</h3>
                <p className="font-poppins text-gray-600">
                  123 Coffee Street<br />
                  Cityville, ST 12345
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl mb-2">Hours</h3>
                <p className="font-poppins text-gray-600">
                  Monday - Friday: 7am - 8pm<br />
                  Saturday - Sunday: 8am - 9pm
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl mb-2">Contact</h3>
                <p className="font-poppins text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: hello@brewandgather.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="font-playfair text-3xl mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block font-poppins text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown"
                />
              </div>
              <div>
                <label className="block font-poppins text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown"
                />
              </div>
              <div>
                <label className="block font-poppins text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-brown"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cafe-brown text-cream py-3 rounded-md font-poppins hover:bg-warm-gray transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;