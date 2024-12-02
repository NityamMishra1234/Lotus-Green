import React from 'react'
import { Link } from 'react-router-dom'
function What() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
    {/* Header Section */}
    <section className="bg-blue-500 text-white text-center py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">Visit Us</h1>
      <p className="text-xl sm:text-2xl mt-4">
        Discover the comfort and privacy of our PG!
      </p>
    </section>

    {/* Map Section */}
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Find Us Here</h2>
      <div className="flex justify-center">
        {/* Embed Google Maps */}
        <iframe
          className="w-full sm:w-1/2 h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.871758053981!2d77.5033766!3d28.4672787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb01b99e5a0b%3A0x3da643b894a62a90!2sLotus%20Green%20Boys%20PG%20%26%20Hostels!5e0!3m2!1sen!2sin!4v1707057632617!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="bg-blue-500 text-white text-center py-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Visit a Room</h1>
        <p className="text-xl sm:text-2xl mt-4">
          Explore the rooms and find your perfect fit.
        </p>
      </section>

      {/* Room Selection Section */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Available Rooms</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Two-Seater Room */}
          <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
            <img
              src="\Your paragraph text.png"
              alt="Two-Seater Room"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Two-Seater Room</h3>
            <p className="text-gray-700 mb-4">
              A cozy space designed for two students, offering comfort, privacy, and ample space for your belongings.
            </p>
            <p className="font-bold text-gray-800">Price: ₹7,500/month</p>
            <Link
              to="#" // Link to the detailed page or modal for two-seater room
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Visit Room
            </Link>
          </div>

          {/* Three-Seater Room */}
          <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
            <img
              src="\triple room.jpeg"
              alt="Three-Seater Room"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Three-Seater Room</h3>
            <p className="text-gray-700 mb-4">
              Spacious enough for three students, combining privacy and shared living. Perfect for friends or group living.
            </p>
            <p className="font-bold text-gray-800">Price: ₹6,500/month</p>
            <Link
              to="/three-seater-room" // Link to the detailed page or modal for three-seater room
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Visit Room
            </Link>
          </div>
        </div>
      </section>

      
    </div>
    <section className="p-6 bg-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Information</h2>
      <div className="text-center">
        <p className="text-xl mb-2">Phone: 9110129505</p>
        <p className="text-xl mb-2">Email: amrendras418@gmail.com</p>
      </div>
    </section>
   

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
     

  </div>
  )
}

export default What