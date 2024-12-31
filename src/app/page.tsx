import Link from 'next/link';
import Navbar from './components/navbar';
import Categories from './Categories/page';
import Comments from './Comments/page';
import Footer from './components/footer';

const Home = () => {
  return (
    <div className="flex flex-col h-50 h-96">
      {/* Navbar */}
      <Navbar />


<div className="bg-gradient-to-r from-pink-500 to-teal-500 text-white shadow-lg p-12 flex-1">

<h1 className="text-4xl font-bold text-center mb-8"></h1>

<div className="bg-gradient-to-r from-pink-700 to-teal-500 shadow-md rounded-lg mb-8 max-w-xl mx-auto h-auto p-6">
  <h2 className="text-3xl font-semibold text-center mb-4">Welcome to the World of Ice Cream!</h2>
  <p className="text-xl text-gray-600 text-center mb-4 font-semibold">
    Ice cream is not just a treat, it's an experience! Explore the best ice cream flavors, shops, and recipes with us. Dive into the world of creamy, delicious ice cream today!
  </p>
  
  {/* Adjusting the button position */}
  <div className="flex justify-center mt-4">
    <Link href="/Categories">
      <button className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-500">
        Click Here
      </button>
    </Link>
  </div>
</div>

        {/* Categories and Comments Sections */}
        <Categories />
        <Comments />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;