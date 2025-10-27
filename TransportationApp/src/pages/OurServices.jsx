import React from "react";

function OurServices() {
  const services = [
    {
      category: "KATHMANDU",
      routes: [
        { from: "Kathmandu", to: "Pokhara", price: "$15" },
        { from: "Chitwan", to: "Kathmandu", price: "$22" },
        { from: "Pokhara", to: "Chitwan", price: "$20" },
      ],
    },
    {
      category: "POKHARA",
      routes: [
        { from: "Pokhara", to: "", price: "$16" },
        { from: "Kathmandu", to: "Lumbini", price: "$18" },
        { from: "Lumbini", to: "Pokhara", price: "$21" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive transportation and logistics solutions
            tailored for the beautiful landscapes of Nepal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((serviceGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
                {serviceGroup.category}
              </h2>

              <div className="space-y-6">
                {serviceGroup.routes.map((route, routeIndex) => (
                  <div
                    key={routeIndex}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex-1 mb-3 sm:mb-0">
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {route.from} {route.to && `to ${route.to}`}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-green-600">
                        {route.price}
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 TransNepal. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default OurServices;
