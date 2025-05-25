import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleFindRides = () => {
    navigate("/confirm", {
      state: {
        pickupLocation: pickup,
        dropLocation: destination,
      },
    });
  };

  return (
    <section className="bg-green-800 dark:bg-[#101826] text-white pt-16 pb-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl text-left">
            {/* ...heading and paragraph code... */}

            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 w-full max-w-ld border border-white/20 dark:border-white/10">
              {/* Pickup */}
              <div className="mb-4 relative">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 dark:text-green-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 dark:placeholder-gray-400 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Destination */}
              <div className="mb-4 relative">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 dark:text-green-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 dark:placeholder-gray-400 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <button
                onClick={handleFindRides}
                className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-medium rounded-md py-3"
              >
                Find Rides
              </button>
            </div>
          </div>

          {/* RIGHT SIDE... (no changes needed there) */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
