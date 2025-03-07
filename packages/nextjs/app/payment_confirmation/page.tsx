'use client';

import React from 'react';

const PaymentConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center ">

      {/* Confirmation Message */}
      <div className="text-center mt-10">
        {/* <CheckCircle size={60} className="text-blue-500 mx-auto" /> */}
        <h1 className="text-xl font-semibold mt-4">
          Your booking (Booking Reference: <span className="font-bold">NV64R2</span>) has been successfully completed.
        </h1>
        <p className="text-white">Thank you for your booking!</p>
      </div>

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

      {/* Confirmation Email Message */}
      <p className="mt-6 text-white">A booking confirmation email has been sent to your mailbox.</p>
      <p className="mt-2 text-blue-600 underline cursor-pointer">Click here to download your receipt</p>

    </div>
  );
};

export default PaymentConfirmation;