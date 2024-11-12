import React from 'react';

function About() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 bg-white bg-opacity-80 rounded-lg">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300 transform hover:scale-105">
            About PodClub
          </h1>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-orange-600">
            <h2 className="text-2xl font-semibold text-black-600 mb-4 transform hover:translate-x-2 transition-all duration-300">
              What is a Podcast?
            </h2>
            <p className="text-lg leading-relaxed text-black hover:text-gray-100 transition-colors duration-300">
              A podcast is a digital program made available for download over the Internet, designed to entertain, inform, and inspire.
              It is the modern way to consume content, from interviews and discussions to storytelling and educational insights.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-7 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-orange-600">
            <h2 className="text-2xl font-semibold text-black-600 mb-4 transform hover:translate-x-2 transition-all duration-300">
              The Art of Music
            </h2>
            <p className="text-lg leading-relaxed text-black hover:text-gray-100 transition-colors duration-300">
              Music is the universal language that transcends all boundaries. It is the art of arranging sounds to create harmony, rhythm,
              and melody that speaks to the heart. Although its definition can vary across cultures, music is an essential part of every
              human society, bringing people together in ways that words alone cannot.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-orange-600">
            <h2 className="text-2xl font-semibold text-black-600 mb-4 transform hover:translate-x-2 transition-all duration-300">
              Why PodClub?
            </h2>
            <p className="text-lg leading-relaxed text-black hover:text-gray-100 transition-colors duration-300 mb-4">
              PodClub is more than just a platform for podcasts. It is a community for people who share a common love for music, podcasts,
              and all things audio. Whether you are here to find the latest trending podcasts, engage in conversations with like-minded
              individuals, or simply relax and enjoy the soothing sounds, PodClub is the place where your audio passions come alive.
            </p>
            <p className="text-lg leading-relaxed text-black hover:text-gray-100 transition-colors duration-300">
              Join us, and discover a space to connect, share, and celebrate the art of sound.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-12 transform hover:scale-105 hover:bg-orange-600">
          {/* <p className="text-lg leading-relaxed text-black mb-4 hover:text-gray-100 transition-colors duration-300">
            Welcome to <strong className="text-black-600">PodClub</strong> – your ultimate destination for everything related to podcasts and music.
          </p>
          <p className="text-lg leading-relaxed text-black hover:text-gray-100 transition-colors duration-300">
            At PodClub, we believe in the power of sound, the joy of music, and the magic of storytelling through podcasts.
            Whether you are a creator or an enthusiast, our platform brings together people with shared passions to connect,
            socialize, and discover new content.
          </p> */}
          <p className="text-lg leading-relaxed text-black hover:text-gray-100 mt-6 transition-colors duration-300">
              Join us, and discover a space to connect, share, and celebrate the art of sound.
            </p>
        </section>

        <footer className="text-center mt-8">
          <button className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-orange-700 transform hover:scale-105">
            Join Now
          </button>
        </footer>
      </div>
    </div>
  );
}

export default About;
