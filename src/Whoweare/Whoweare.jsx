import React from 'react'

function Whoweare() {
  return (
   <>
  


    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="bg-blue-500 text-white text-center py-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Meet Us</h1>
        <p className="text-xl sm:text-2xl mt-4">
          Get to know the people behind the PG.
        </p>
      </section>

      {/* Owner Section */}
      <section className="p-6 bg-white mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Meet the Owner</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src="\IMG_0336.jpg" // Replace with actual image
            alt="Owner"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Amrendar Singh</h3>
            <p className="text-lg text-gray-700 mb-4">
              The owner of Lotus Green Boys PG. A professional with over 5 years of experience in providing students with a comfortable and secure living experience.
            </p>
            <h3 className="text-xl font-bold text-gray-800">I am a civil engineer by profession</h3>
            <p className="text-lg text-gray-700 mb-4">
            dedicated to creating a better, more comfortable life for others.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Contact: <span className="text-blue-500">+91 9110129505</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cook Section */}
      <section className="p-6 bg-white mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Meet the Cook</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src="\an image of a cook.png" // Replace with actual image
            alt="Cook"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Pardeep Kumar</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expert cook with 15+ years of experience. Specializing in nutritious and delicious meals tailored to student needs.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Specialties: <span className="text-blue-500">Indian & Continental Dishes</span>
            </p>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
          <img
            src="\an image of a cook.png" // Replace with actual image
            alt="Cook"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Mama</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our expert cook with 5+ years of experience. Specializing in nutritious and delicious meals tailored to student needs.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Specialties: <span className="text-blue-500">Indian & Continental Dishes</span>
            </p>
          </div>
          
        </div>
      </section>

      {/* Helper Section */}
      <section className="p-6 bg-white mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Meet the Helper</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src="\an image of a cook.png" // Replace with actual image
            alt="Helper"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Sanjeev Kumar</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our diligent helper who ensures the cleanliness and maintenance of the PG. She is always ready to assist students with any needs.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Responsible for: <span className="text-blue-500">Maintenance</span>
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
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


   </>
  )
}

export default Whoweare