"use client";

import { useRouter } from 'next/navigation';

export default function FlightBooking() {
  const router = useRouter();

  const handleBooking = () => {
    router.push('/payment');
  };

  return (
    <div className="px-60 pt-6">
      {/* Flight Details */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Flight Details</h2>
        <div className="border p-4 rounded-md">
          <p><strong>Depart:</strong> PEN (Penang International Airport) → NRT (Tokyo Narita Airport T2)</p>
          <p><strong>Return:</strong> NRT (Tokyo Narita Airport T2) → PEN (Penang International Airport)</p>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
        <div className="flex w-fit gap-4 mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        Passenger 1
        </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="border p-2 rounded" />
            <input type="text" placeholder="Last Name" className="border p-2 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Gender" className="border p-2 rounded" />
            <input type="text" placeholder="Nationality" className="border p-2 rounded" />
            <input type="text" placeholder="Date of Birth (DD/MM/YYYY)" className="border p-2 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="ID Type" className="border p-2 rounded" />
            <input type="text" placeholder="ID Expiry Date" className="border p-2 rounded" />
            <input type="text" placeholder="ID Number" className="border p-2 rounded" />
          </div>

      </div>

      {/* Contact Details */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Contact Details</h2>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="text" placeholder="Email" className="border p-2 rounded" />
          <input type="text" placeholder="Contact Number" className="border p-2 rounded" />
        </div>
      </div>

      {/* Fare Summary */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Fare Summary</h2>
        <p>Basic Fare: RM 1634.22</p>
        <p>Taxes, Fees & Surcharges: RM 365.73</p>
        <p>Add-ons: RM 0.00</p>
        <p className="font-bold">Total Amount: RM 1999.95</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full" onClick={handleBooking}>Proceed to Payment</button>
      </div>
    </div>

  );
}
