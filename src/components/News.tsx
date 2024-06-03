import React, { useState } from "react";

const newsItems = [
  {
    title: "Altar Client Raises $2M as it Continues to Delight Users",
    description:
      "Our client, Fave, the app for superfans to connect with like-minded music lovers and obsess over their favourite artists, has",
    imgSrc: "https://altar.io/wp-content/uploads/2023/12/three-people-team.png",
    link: "https://techcrunch.com/2023/10/12/fave-the-app-for-superfans-raises-2-million/?guccounter=1#new_tab",
  },
  {
    title: "Altar Named Leading Global Company in Manifest 2022 Awards",
    description:
      "We are thrilled to share that we have been recognized as a global industry leader by The Manifest in their",
    imgSrc: "https://altar.io/wp-content/uploads/2023/12/three-people-team.png",
    link: "#",
  },
  {
    title: "Altar Named Top B2B company by Manifest",
    description:
      "We made it into the top 3 for “most reviewed software developers in Portugal.” Thank you to everyone who wrote",
    imgSrc: "https://altar.io/wp-content/uploads/2023/12/three-people-team.png",
    link: "#",
  },
  {
    title: "Altar Co-Founder CEO Interviewed by Forbes",
    description:
      "Daniel was invited to share what we’ve been doing and the evolution of our business lands",
    imgSrc: "https://altar.io/wp-content/uploads/2023/12/three-people-team.png",
    link: "#",
  },
  // ...more items
];

const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage =
    window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % newsItems.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + newsItems.length) % newsItems.length
    );
  };

  return (
    <div className="container mx-auto px-8 py-12 relative">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">News</h1>
        <p className="text-lg text-gray-600">
          Read the latest stories from our world.
        </p>
      </header>
      <div className="overflow-hidden mx-2 sm:mx-12">
        <div className="flex space-x-6">
          {newsItems
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item, index) => (
              <div
                key={index}
                className="flex-none w-64 sm:w-80 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="h-24 w-24 rounded-full"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-4 inline-block text-pink-500 font-semibold"
                >
                  Read more
                </a>
              </div>
            ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default News;
