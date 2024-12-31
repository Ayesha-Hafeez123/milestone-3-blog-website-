
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-pink-50 p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-pink-600 mb-6 sm:mb-8 lg:mb-10">Let's Chat About Ice Cream!</h1>

        <div className="bg-white p-6 sm:p-8 lg:p-12 shadow-lg rounded-xl max-w-3xl sm:max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-4 sm:mb-6 lg:mb-8">Get in Touch with Us</h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-4 sm:mb-6 lg:mb-8">
            Have a favorite flavor you want us to try? Or maybe a cool ice cream idea? We’d love to hear from you! Fill out the form below and share your thoughts with us. 🍦
          </p>

          <form className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                Send Us Your Sweet Thoughts!
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
