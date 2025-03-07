'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('Credit/Debit Card');

  return (
    <div className=" min-h-screen flex flex-col items-center">

      <div className="w-full max-w-5xl flex mt-6 relative">
        {/* Flight Details Section */}
        <div className="w-2/3 p-4">
          <div className="bg-gray-700 p-6 shadow-lg rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2">Flight Details</h2>
            <div className="text-sm text-white">
              <p><strong>Depart:</strong> MH848, MH61 | 09 Jan 2025 (Thursday)</p>
              <p>08:00 - PEN Penang International Airport</p>
              <p>22:30 - NRT Tokyo Narita International Airport T2</p>
              <p><strong>Return:</strong> MH70, MH809 | 15 Jan 2025 (Wednesday)</p>
              <p>08:00 - NRT Tokyo Narita International Airport T2</p>
              <p>22:30 - PEN Penang International Airport</p>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="bg-gray-700 p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Select a Payment Method</h2>
            <div className="text-black grid grid-cols-6 gap-2 mb-4">
              {['MetaMask', 'FPX', 'Credit/Debit Card', 'PayPal'].map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`p-2 border rounded-lg text-sm ${selectedMethod === method ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                >
                  {method}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Sticky Fare Summary */}
        <div className="w-1/3 p-4">
          <div className="bg-gray-700 p-6 shadow-lg rounded-lg  top-6">
            <h2 className="text-lg font-semibold mb-4">Fare Summary</h2>
            <p className="text-sm text-white flex justify-between"><span>Basic Fare</span> <span>RM 1634.22</span></p>
            <p className="text-sm text-white flex justify-between"><span>Taxes, fees & surcharges</span> <span>RM 365.73</span></p>
            <p className="text-sm text-white flex justify-between"><span>Add-ons</span> <span>RM 0.00</span></p>
            <hr className="my-2" />
            <p className="text-lg font-bold flex justify-between"><span>Total Amount</span> <span>RM 1999.95</span></p>

          </div>
        </div>
      </div>

      {/* Confirm Payment Button */}
      <div className="w-full max-w-5xl mt-6">
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-bold">Confirm Payment</button>
      </div>

 
    </div>
  );
}