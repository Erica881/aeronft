"use client";

import { useRouter } from "next/navigation";

export default function FlightBooking() {
  const router = useRouter();

  const handleBooking = () => {
    router.push("/payment");
  };

  return (
    <div className="px-60 pt-6">
      {/* Flight Details */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6 text-white">
        <h2 className="text-xl font-bold mb-4">Flight Details</h2>
        <div className="flex justify-stretch border p-4 rounded-md">
          
          {/* Departure Flight */}
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Depart (10 March, 2025)</h3>
            <div className="flex items-center gap-2">
              <img src="/images/airasia.png" alt="Airline Logo" width={40} height={40} />
              <p><strong>Airasia</strong> (AK88)</p>
            </div>
            <p><strong>Departure:</strong> 08:00 AM (PEN Penang International Airport)</p>
            <p><strong>Arrival:</strong> 10:30 PM (HND Tokyo Haneda Airport T2)</p>
          </div>

          {/* Return Flight */}
          <div>
            <h3 className="font-bold text-lg mb-2">Return (15 March, 2025)</h3>
            <div className="flex items-center gap-2">
              <img src="/images/japan-airlines.png" alt="Airline Logo" width={40} height={40} />
              <p><strong>Japan Airlines</strong> (JL89)</p>
            </div>
            <p><strong>Departure:</strong> 08:00 AM (HND Tokyo Haneda Airport T2)</p>
            <p><strong>Arrival:</strong> 10:30 PM (PEN Penang International Airport)</p>
          </div>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6 text-white">
        <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
        <div className="flex w-fit gap-4 mb-4 bg-blue-500 text-white px-4 py-2 rounded">
          Passenger 1
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Gender Dropdown */}
          <select className="border p-2 rounded">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* Nationality Dropdown */}
          <select className="border p-2 rounded">
            <option value="">Select Nationality</option>
            <option value="malaysia">Malaysia</option>
            <option value="japan">Japan</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
          </select>

          <input type="date" placeholder="Date of Birth (DD/MM/YYYY)" className="border p-2 rounded" />
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6 text-white">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="text" placeholder="Email" className="border p-2 rounded" />
          <input type="text" placeholder="Contact Number" className="border p-2 rounded" />
        </div>
      </div>

      {/* Fare Summary */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6 text-white">
        <h2 className="text-xl font-bold mb-4">Fare Summary</h2>
        <p>Basic Fare: RM 1634.22</p>
        <p>Taxes, Fees & Surcharges: RM 365.73</p>
        <p>Add-ons: RM 0.00</p>
        <p className="font-bold">Total Amount: RM 1999.95</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full" onClick={handleBooking}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
