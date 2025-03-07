"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";

const flights = [
  {
    id: 1,
    airline: "Malaysia Airlines",
    departure: "08:00",
    arrival: "22:30",
    duration: "14h 30m",
    stops: "1 Stop (1h 15m at Kuala Lumpur)",
    price: "RM1252",
    logo: "/images/malaysia-airlines.png",
  },
  {
    id: 2,
    airline: "AirAsia",
    departure: "13:15",
    arrival: "21:10",
    duration: "07h 55m",
    stops: "Non-Stop",
    price: "RM1552",
    logo: "/images/airasia.png",
  },
  {
    id: 3,
    airline: "Singapore Airlines",
    departure: "10:10",
    arrival: "20:35",
    duration: "10h 25m",
    stops: "1 Stop (1h 30m at Singapore)",
    price: "RM1942",
    logo: "/images/singapore-airlines.png",
  },
  {
    id: 4,
    airline: "Japan Airlines",
    departure: "09:15",
    arrival: "17:45",
    duration: "07h 55m",
    stops: "Non-Stop",
    price: "RM2090",
    logo: "/images/japan-airlines.png",
  },
  {
    id: 5,
    airline: "All Nippon Airways",
    departure: "08:35",
    arrival: "17:00",
    duration: "07h 55m",
    stops: "Non-Stop",
    price: "RM1999",
    logo: "/images/all-nippon-airways.png",
  },
  {
    id: 6,
    airline: "Malaysia Airlines",
    departure: "18:30",
    arrival: "10:30",
    duration: "16h 00m",
    stops: "1 Stop (2h at Kuala Lumpur)",
    price: "RM2111",
    logo: "/images/malaysia-airlines.png",
  },
  {
    id: 7,
    airline: "AirAsia",
    departure: "07:30",
    arrival: "18:30",
    duration: "11h 00m",
    stops: "1 Stop (3h at Bangkok)",
    price: "RM2552",
    logo: "/images/airasia.png",
  },
  {
    id: 8,
    airline: "Singapore Airlines",
    departure: "23:45",
    arrival: "14:20",
    duration: "14h 35m",
    stops: "1 Stop (2h at Singapore)",
    price: "RM2750",
    logo: "/images/singapore-airlines.png",
  },
  {
    id: 9,
    airline: "Japan Airlines",
    departure: "21:00",
    arrival: "13:30",
    duration: "16h 30m",
    stops: "1 Stop (1h 50m at Tokyo)",
    price: "RM2899",
    logo: "/images/japan-airlines.png",
  },
  {
    id: 10,
    airline: "All Nippon Airways",
    departure: "11:30",
    arrival: "23:50",
    duration: "12h 20m",
    stops: "1 Stop (1h 45m at Osaka)",
    price: "RM2320",
    logo: "/images/all-nippon-airways.png",
  },
];


export default function SearchResultPage() {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState("cheapest");

  const handleSelectDepatureFlight = (flightId: number) => {
    router.push('/return_flight_result');
  };

  return (
    <div>

    <div className="px-60 pt-6">
      {/* Search Header */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex justify-between items-center">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold">Departing Flight</h1>
          <div>From: Penang International Airport (PEN)</div>
          <div>To: Tokyo Haneda Airport (HND)</div>
          <div>Date: March 10, 2025</div>
        </div>
        <div className="flex self-end items-center">
          <label className="mr-2 text-white">Sort by:</label>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="cheapest">Cheapest</option>
            <option value="fastest">Fastest</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div className="flex my-4">
        <div className="w-1/4 max-w-60 h-fit bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="font-semibold text-lg mb-2 flex items-center">
            <BsFilter className="mr-2" /> Filter by
          </h2>
          <div>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Direct flight only
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> In-flight WiFi included
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Hide unavailable flights
            </label>
          </div>

          <h3 className="font-semibold mt-4">Stops</h3>
          <div>
            <label className="block">
              <input type="checkbox" name="stops" className="mr-2" /> Non-Stop
            </label>
            <label className="block">
              <input type="checkbox" name="stops" className="mr-2" /> Up to 1 Stop
            </label>
            <label className="block">
              <input type="checkbox" name="stops" className="mr-2" /> Up to 2 Stops
            </label>
          </div>

          <h3 className="font-semibold mt-4">Airlines</h3>
          <div>
            <label className="block my-1">
              <input type="checkbox" name="stops" className="mr-2" /> <img src="/images/malaysia-airlines.png" alt="" className="w-5 h-5 inline-block mr-2" /> Malaysia Airlines
            </label>
            <label className="block my-1">
              <input type="checkbox" name="stops" className="mr-2" /> <img src="/images/airasia.png" alt="" className="w-5 h-5 inline-block mr-2" /> AirAsia
            </label>
            <label className="block my-1">
              <input type="checkbox" name="stops" className="mr-2" /> <img src="/images/singapore-airlines.png" alt="" className="w-5 h-5 inline-block mr-2" /> Singapore Airlines
            </label>
            <label className="block my-1">
              <input type="checkbox" name="stops" className="mr-2" /> <img src="/images/japan-airlines.png" alt="" className="w-5 h-5 inline-block mr-2" /> Japan Airlines
            </label>
            <label className="block my-1">
              <input type="checkbox" name="stops" className="mr-2" /> <img src="/images/all-nippon-airways.png" alt="" className="w-5 h-5 inline-block mr-2" /> All Nippon Airways
            </label>
          </div>

        </div>

        {/* Flight List */}
        <div className="w-full ml-6">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-slate-500 p-4 rounded-lg shadow mb-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <img src={flight.logo} alt={flight.airline} className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="font-bold">{flight.airline}</h3>
                  <div className="flex items-center text-black">
                    <FaPlaneDeparture className="mr-2 text-black" /> {flight.departure} -{" "}
                    <FaPlaneArrival className="ml-2 text-black" /> {flight.arrival}
                  </div>
                  <p className="text-sm text-black">{flight.duration} | {flight.stops}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{flight.price}</p>
                <button
                  onClick={() => handleSelectDepatureFlight(flight.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}