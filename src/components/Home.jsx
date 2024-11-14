import React from 'react';
import video from '../assets/video.mp4';

const Home = () => {
  return (
    <div className="Home">
      <header className="relative h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />
           <div className="absolute bottom-10 right-10 text-right z-10">
          <h1 className="text-9xl font-bold mb-4 max-w-2xl opacity-80">News you can watch</h1>
          <p className="text-3xl max-w-md opacity-80">Stay updated on what's happening in North Fortberry and beyond.</p>

          </div>


          <div>
          <nav className="absolute top-5 right-5 m-4 flex space-x-4 opacity-100">
            <a 
          href="#" 
             className="text-blue-500 text-xl hover:text-green-500 hover:underline hover:shadow-[0px_0px_8px_rgba(34,197,94,0.8)] transition duration-300"
           >
             Home
          </a>
          <a 
          href="#" 
            className="text-blue-500 text-xl hover:text-green-500 hover:underline hover:shadow-[0px_0px_8px_rgba(34,197,94,0.8)] transition duration-300"
           >
            Join
          </a>
          <button 
           className="text-yellow-500 text-xl hover:text-green-500 hover:shadow-[0px_0px_8px_rgba(34,197,94,0.8)] transition duration-300"
          >
           ☰
          </button>
         </nav>

        </div>
      </header>

      {/* Podcast Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-500 p-10 inline-block rounded-lg mb-6">
            <p className="text-2xl font-bold mb-4">Watch now</p>
            <div className="flex flex-col space-y-4">
              <button className="bg-white text-black py-2 px-4 rounded">Spotify</button>
              <button className="bg-white text-black py-2 px-4 rounded">Apple Podcast</button>
              <button className="bg-white text-black py-2 px-4 rounded">Google Podcasts</button>
            </div>
          </div>
          <div className="text-center max-w-xl mx-auto">
            <p className="mb-6">Write a paragraph that talks about your video podcast here.</p>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-full font-bold">Login to Enjoy</button>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Latest Episode</h2>
            <p className="text-gray-600">Homegrown Firms to Watch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Episode Card 1 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <img src="image1.jpg" alt="Episode 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Episode 37</h3>
              <p>Citizens React to Local Economic Boom</p>
            </div>
            {/* Episode Card 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <img src="image2.jpg" alt="Episode 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Episode 36</h3>
              <p>Citizens React to Local Economic Boom</p>
            </div>
            {/* Episode Card 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <img src="image3.jpg" alt="Episode 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Episode 35</h3>
              <p>The New City Ordinance Explained</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
