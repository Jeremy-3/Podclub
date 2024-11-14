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
          <div className="absolute bottom-10 right-10 text-right z-10 max-w-2xl">
            <h1 className="text-[10rem] font-bold mb-4 opacity-90">
              News you can watch
            </h1>
            <p className="text-5xl opacity-90">
              Stay updated on what's happening in North Fortberry and beyond.
            </p>
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
              <img src="https://lite-images-i.scdn.co/image/ab67656300005f1f82efc4d612291ac3a455d0db " alt="Episode-2" />
             <h3 className="text-xl font-bold">Episode 66</h3>
              <p>Fluffy Goes To India | Gabriel Iglesias

              </p>
            </div>
            {/* Episode Card 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <img src="https://i.scdn.co/image/ab6765630000ba8a8a9df8f640f0ba4e62085c40" alt="Episode 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Episode 2</h3>
              <p>Blue Uniform - Mkurugenzi Minisodes 7</p>
            </div>
            {/* Episode Card 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <img src="https://s.yimg.com/ny/api/res/1.2/yK.xyeCYPEqnl6Hk3uJSzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMg--/https://media.zenfs.com/en/buzzfeed_articles_778/dc265499563da586732ff0a69e241230" 
              alt="Episode 35" 
              className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Episode 35</h3>
              <p>Kids this Days.
              </p>
            </div>
          </div>


        </div>
      </section>
      {/* Podcast Section */}
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center p-4"> 
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-lg w-full space-y-6"> 
          <header className="text-center"> 
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Watch Now
            </h1> 
            </header> 
            <section className="space-y-4"> 
              <div className="flex justify-around"> 
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-2 px-6 rounded transition duration-300">
                  Spotify
                </button> 
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold text-lg py-2 px-6 rounded transition duration-300">
                    Apple Podcast
                </button> 
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-2 px-6 rounded transition duration-300">
                  Google Podcasts
                </button> 
                </div> 
              <div className="text-center"> 
                <p className="text-gray-700 dark:text-gray-400 text-lg leading-7">
                   Write a paragraph that talks about your video podcast here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo maiores omnis! Magni quae nobis officia, fugiat in aperiam nam a tenetur tempora cum expedita dolorum odio neque. 
                   </p> 
              </div> 
              </section> 
              <footer className="text-center space-y-4"> 
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-2 px-6 rounded transition duration-300">
                  Login to Enjoy
                </button> 
              </footer>
            </div> 
            
          </div>

    
    </div>
  );
};

export default Home;
