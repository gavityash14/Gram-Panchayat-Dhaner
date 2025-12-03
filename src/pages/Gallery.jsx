import React, { useState,useContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AppContext } from "../context/AppContext.jsx";

const images = import.meta.glob('/src/assets/gallery_images/*.{jpg,jpeg,png,gif}', { eager: true });
const videos = import.meta.glob('/src/assets/gallery_videos/*.{mp4,mov,avi}', { eager: true });

export default function Gallery() {
  const { language } = useContext(AppContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Pagination state
  const [imageVisibleCount, setImageVisibleCount] = useState(6);
  const [videoVisibleCount, setVideoVisibleCount] = useState(2);

  // Show next 6 images
  const showMoreImages = () => {
    setImageVisibleCount((prev) => prev + 6);
  };
  // Show next 6 VIDEOS
  const showMoreVideos = () => {
    setVideoVisibleCount((prev) => prev + 6);
  };

  return (
    <div>
      <Header />
      <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 text-center">📸 {language === "en" ? "Gallery" : "गॅलरी"} 🎥 </h1>

        {/* Photos Section */}
        <section className="w-full max-w-6xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">{language === "en" ? "Photo Gallery" : "फोटो गॅलरी"} </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(images).slice(0, imageVisibleCount).map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedImage(photo.default)}
              >
                <img
                  src={photo.default}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {imageVisibleCount < Object.values(images).length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showMoreImages}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Show More
              </button>
            </div>
          )}

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Enlarged" className="w-full h-auto" />
                <button
                  className=" absolute top-2 right-2 mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                  onClick={() => setSelectedImage(null)}>Close</button>

              </div>
            </div>
            )}  

        </section>

        {/* Videos Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">{language === "en" ? "Video Gallery" : "व्हिडिओ गॅलरी"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.values(videos).slice(0, videoVisibleCount).map((video, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition duration-300"
                
              >
                <div className="w-full h-64 object-cover"
                onClick={() => setSelectedVideo(video)}
                >
                <video width="100%"
                  height="315px"
                  src={video.default}
                  title={`Video ${index + 1}`} 
                  muted
                  autoPlay
                  loop
                  playsInline
                  
                  ></video>
                </div>
                <h3 className="p-4 text-lg font-medium text-center">{video.title}</h3>
              </div>
            ))}
          </div>
          {/* Show More Button */}
          {console.log(Object.values(videos).length )}
          {videoVisibleCount < Object.values(videos).length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showMoreVideos}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Show More
              </button>
            </div>
          )}

          {/* Modal */}
          {selectedVideo && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <div className="relative bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
                <video src={selectedVideo.default} controls className="w-full h-auto" />
                <button
                  className=" absolute top-2 right-2 mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                  onClick={() => setSelectedVideo(null)}>Close</button>
              </div>
            </div>
          )}

        </section>
      </div>  
      <Footer />
    </div>
  );
}