'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('Credit/Debit Card');

  const router = useRouter();

  const handlePayment = () => {
    router.push('/payment_confirmation');
  };

  return (
    <div className=" min-h-screen px-60 pt-6 flex flex-col items-center">

      <div className="w-full">
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

        {/* Fare Summary */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6 text-white">
          <h2 className="text-xl font-bold mb-4">Fare Summary</h2>
          <p>Basic Fare: RM 1634.22</p>
          <p>Taxes, Fees & Surcharges: RM 365.73</p>
          <p>Add-ons: RM 0.00</p>
          <p className="font-bold">Total Amount: RM 1999.95</p>
        </div>
      </div>

      {/* Confirm Payment Button */}
      <div className="w-full max-w-5xl mt-6">
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-bold" onClick={handlePayment}>Confirm Payment</button>
      </div>

 
    </div>
  );
}