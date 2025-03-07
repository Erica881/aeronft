'use client';

import React from 'react';
// import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

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
      <div className="bg-gray-700 p-6 rounded-lg mt-6 w-2/3">
        <div className="flex justify-between text-black font-semibold">
          <div>
            <h2 className="text-lg">Depart</h2>
            <p>🛫 MH88, MH61 - 09 Jan 2025 (Thursday)</p>
            <p>08:00 - PEN Penang International Airport</p>
            <p className="text-sm">Transfer in Kuala Lumpur - 6h 15m</p>
            <p>22:30 - NRT Tokyo Narita International Airport T2</p>
          </div>
          <div>
            <h2 className="text-lg">Return</h2>
            <p>🛬 MH70, MH89 - 15 Jan 2025 (Wednesday)</p>
            <p>08:00 - NRT Tokyo Narita International Airport T2</p>
            <p className="text-sm">Transfer in Kuala Lumpur - 6h 15m</p>
            <p>22:30 - PEN Penang International Airport</p>
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