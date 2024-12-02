import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  // Ensure the images array is defined here
  const images = [
    "/triple room.jpeg",
    "/Your paragraph text.png",
    "/triple room.jpeg",
    "/Your paragraph text.png",
    "/triple room.jpeg",
    "/Your paragraph text.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative w-full h-fit overflow-hidden border-2">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover transition-opacity duration-500 ease-in-out"
        />
        <div className="w-full h-10 flex justify-evenly text-sm sm:text-3xl gap-8">
          <span className=" flex items-center gap-2 p-2 rounded">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Location:
            <a
              href="https://www.google.com/maps/place/Lotus+Green+boys+PG+%26+Hostels/@28.4672787,77.5033766,43m/data=!3m1!1e3!4m6!3m5!1s0x390ceb01b99e5a0b:0x3da643b894a62a90!8m2!3d28.4671652!4d77.5034616!16s%2Fg%2F11v71027sy?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Lotus Green Boys PG
            </a>
          </span>

          <span className="w-fit flex items-center gap-2 p-2 rounded">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Contact Us:+91 9110129505
          </span>
        </div>
      </div>

      <div className="w-full h-full flex flex-col border-2 mt-4">
  <h2 className="items-center justify-center flex text-xl sm:text-3xl mt-2 font-semibold">
    What We Offer
  </h2>
  
  
  <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 mt-6">
    <img
      src="\Your paragraph text.png" 
      alt="Two-Seater Room"
      className="w-full sm:w-1/2 h-auto rounded-lg"
    />
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Experience Comfort and Privacy!
      </h2>
      <p className="text-gray-700 mb-4">
        Our two-seater rooms are designed to provide a perfect blend of comfort and personal space. Each room is thoughtfully furnished, offering ample storage, cozy beds, and a peaceful ambiance for your studies or relaxation. Ideal for those who value a quieter and more personal living experience.
      </p>
      <p className="text-xl font-semibold text-gray-800">
        <span className="text-blue-500">Price Per Bed:</span> ₹7,500/month
      </p>
    </div>
  </div>

  
  <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col sm:flex-row-reverse items-center gap-6 mt-6">


    <img
      src="\triple room.jpeg" 
      alt="Three-Seater Room"
      className="w-full sm:w-1/2 h-auto rounded-lg"
    />
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Comfort and Space for Three!
      </h2>
      <p className="text-gray-700 mb-4">
        Our three-seater rooms offer the perfect combination of spaciousness and comfort. Designed for those who value both privacy and shared living, each room is equipped with comfortable beds, ample storage, and a serene environment for studying and relaxation. A great choice for students who want to share their living space with friends while maintaining comfort.
      </p>
      <p className="text-xl font-semibold text-gray-800">
        <span className="text-blue-500">Price Per Bed:</span> ₹6,500/month
      </p>
    </div>
  </div>

  <div className="w-full bg-gray-100 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        Facilities We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">24 Hours Electricity</h3>
          <p className="text-gray-600 text-center">
            Enjoy uninterrupted power supply for all your needs at any time of the day or night.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12h-6M9 12H3m6 0l4-4M9 12l4 4"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Water Supply</h3>
          <p className="text-gray-600 text-center">
            Continuous water supply to meet your daily needs for drinking, bathing, and cleaning.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v20m-7-7l7-7 7 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Study Table</h3>
          <p className="text-gray-600 text-center">
            A comfortable study table for each bed to help you stay productive and organized.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v4m0 4v4m0 4h4m0 0h4m-4 0h-4"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Study Lamp</h3>
          <p className="text-gray-600 text-center">
            Each room is equipped with a study lamp to ensure proper lighting for your study sessions.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14l-1 7H6l-1-7z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Cleaning</h3>
          <p className="text-gray-600 text-center">
            Regular cleaning of rooms and common areas to ensure a hygienic and comfortable environment.
          </p>
        </div>
         {/* Facility 5: WiFi */}
         <div className=" flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            className="w-16 h-16 mx-auto text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M5 12C7.212 12 9.273 13.076 10.828 14.414l1.49-1.49a6.975 6.975 0 000-9.852L9.17 4.172C7.616 5.318 5.264 6 3 6m18 6c-2.264 0-4.616-.682-6.17-2.828l-2.148 2.146a6.975 6.975 0 000 9.852L18 15.414C19.727 14.076 21.788 13 24 13"
            />
          </svg>
          <h3 className="text-xl font-bold mt-4">WiFi</h3>
          <p className="text-gray-600">High-speed internet access to keep you connected at all times.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            className="w-16 h-16 mx-auto text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M4 7h16v10H4z"
            />
          </svg>
          <h3 className="text-xl font-bold mt-4">Washing Machine</h3>
          <p className="text-gray-600">Laundry services with a washing machine available for your convenience.</p>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        Hygienic and Clean Separate Bathrooms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h18M5 3v18h14V3H5z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Space</h3>
          <p className="text-gray-600 text-center">
            We provide separate bathrooms for each room, ensuring privacy and convenience for all residents.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 2a2 2 0 012 2v4h8V4a2 2 0 112 2v16H6V4a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hygienic Facilities</h3>
          <p className="text-gray-600 text-center">
            Our bathrooms are cleaned daily and equipped with high-quality sanitary products for your comfort and hygiene.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 12m-8 0a8 8 0 1016 0A8 8 0 0012 12z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh and Clean</h3>
          <p className="text-gray-600 text-center">
            We maintain the highest standards of cleanliness, ensuring the bathrooms are fresh, sanitized, and always ready for use.
          </p>
        </div>
      </div>
    </div>
      <div className="w-full bg-gray-100 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        Hygienic Food - 4 Times a Day
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v20m-7-7l7-7 7 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Breakfast</h3>
          <p className="text-gray-600 text-center">
            Start your day with a healthy and nutritious breakfast served every morning to fuel your day.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v20m-7-7l7-7 7 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Lunch</h3>
          <p className="text-gray-600 text-center">
            Enjoy a delicious and wholesome lunch with fresh ingredients and proper hygiene maintained.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v20m-7-7l7-7 7 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Evening Snacks</h3>
          <p className="text-gray-600 text-center">
            We provide healthy evening snacks to keep you energized and satisfied throughout the day.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2v20m-7-7l7-7 7 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dinner</h3>
          <p className="text-gray-600 text-center">
            A balanced and nutritious dinner to ensure a good night's rest, made with fresh and quality ingredients.
          </p>
        </div>
      </div>
    </div>
    </div>
</div>

<section className="p-6 bg-white mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Menu</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-left">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 border">Day</th>
                <th className="px-4 py-2 border">Breakfast</th>
                <th className="px-4 py-2 border">Lunch</th>
                <th className="px-4 py-2 border">Evening Snacks</th>
                <th className="px-4 py-2 border">Dinner</th>
              </tr>
            </thead>
            <tbody>
              {/* Monday */}
              <tr className="border-b">
                <td className="px-4 py-2 text-gray-800">Monday</td>
                <td className="px-4 py-2">Rice sabji aachar and tea</td>
                <td className="px-4 py-2">Rice, Dal, Chapati ,Sabji ,achar</td>
                <td className="px-4 py-2">Tea</td>
                <td className="px-4 py-2">Rice, daal, Chapati ,Sabji</td>
              </tr>
              {/* Tuesday */}
              <tr className="border-b">
                <td className="px-4 py-2 text-gray-800">Tuesday</td>
                <td className="px-4 py-2">Poaha, Tea</td>
                <td className="px-4 py-2">Rice, Chana_Sabji, Chapati</td>
                <td className="px-4 py-2">Noodels</td>
                <td className="px-4 py-2">Poori Sabji & Kheer</td>
              </tr>
              {/* Wednesday */}
              <tr className="border-b">
                <td className="px-4 py-2 text-gray-800">Wednesday</td>
                <td className="px-4 py-2">Paratha ,Veg Curry </td>
                <td className="px-4 py-2">Rice, veg Curry, Chapati</td>
                <td className="px-4 py-2">Biscuit, Tea</td>
                <td className="px-4 py-2">Dal, Chapati, Paneer</td>
              </tr>
              {/* Thursday */}
              <tr className="border-b">
                <td className="px-4 py-2 text-gray-800">Thursday</td>
                <td className="px-4 py-2">Pasta, Tea</td>
                <td className="px-4 py-2">Chapati, Rice ,Veg_Curry</td>
                <td className="px-4 py-2">BradePakora, Tea</td>
                <td className="px-4 py-2">Rice, Kaala chana ki sabji, Chapati</td>
              </tr>
              {/* Friday */}
              <tr className="border-b">
                <td className="px-4 py-2 text-gray-800">Friday</td>
                <td className="px-4 py-2">Poha, Tea</td>
                <td className="px-4 py-2">Rice, Dal, Veg Curry</td>
                <td className="px-4 py-2">Chai, Biscuit</td>
                <td className="px-4 py-2">Chapati, Rice , curry</td>
              </tr>
              {/* Saturday */}
              <tr className="border-b">
                <td className="px-4 py-2 text-gray-800">Saturday</td>
                <td className="px-4 py-2">Aloo Paratha, Curd</td>
                <td className="px-4 py-2">Pulao, Raita</td>
                <td className="px-4 py-2">Pakora, Tea</td>
                <td className="px-4 py-2">Rice, Chapati,Veg_Curry</td>
              </tr>
              {/* Sunday */}
              <tr>
                <td className="px-4 py-2 text-gray-800">Sunday</td>
                <td className="px-4 py-2">Sandwich, Tea</td>
                <td className="px-4 py-2">Chola Bhatura</td>
                <td className="px-4 py-2">No Evening Snacks</td>
                <td className="px-4 py-2">Rice, paneer or Chicken, Chapati</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
     
    </>
  );
};

export default Home;
