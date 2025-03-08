"use client";

import { useState } from "react";
import Image from "next/image";
import { abiAeroTicket } from "../abi/AeroTicket";
import type { NextPage } from "next";
import { useAccount, useWriteContract } from "wagmi";

const ticketData = [
  {
    date: "14th Dec 2024",
    from: "KUL",
    to: "Penang",
    flightNumber: "AK1234",
    departureTime: "10:30 AM",
    arrivalTime: "11:45 AM",
    gate: "A12",
    seat: "12C",
    terminal: "T1",
    airline: "AirAsia",
    duration: "1h 15m",
    destinationCode: "sundate",
  },
  {
    date: "25th Dec 2024",
    from: "KUL",
    to: "China",
    flightNumber: "MH5678",
    departureTime: "2:00 PM",
    arrivalTime: "8:30 PM",
    gate: "B5",
    seat: "22A",
    terminal: "T2",
    airline: "Malaysia Airlines",
    duration: "6h 30m",
    destinationCode: "china",
  },
];

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { writeContract } = useWriteContract();
  const [loading, setLoading] = useState(false);

  const handleMint = (destination: string) => {
    if (!connectedAddress) return alert("Please connect your wallet first!");
    try {
      setLoading(true);
      writeContract({
        abi: abiAeroTicket,
        address: "0x866269DCF41698361eEec2614F77f33135653652",
        functionName: "mintNFT",
        args: [connectedAddress, destination],
      });
    } catch (error) {
      console.error("Minting failed:", error);
      alert("Failed to mint NFT");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {ticketData.map((ticket, index) => (
        <div
          key={index}
          className="bg-gray-700 text-white shadow-lg rounded-lg p-4 w-[600px] flex flex-row items-center m-4"
        >
          {/* Airline Logo */}
          <div className="flex items-center justify-center w-24">
            <Image
              src={`/images/${ticket.airline.toLowerCase().replace(/ /g, "-")}.png`}
              alt="Airline Logo"
              width={50}
              height={50}
            />
          </div>

          {/* Flight Details */}
          <div className="flex-1 grid grid-cols-2 gap-2 px-4">
            <div>
              <h3 className="font-bold text-lg">{ticket.airline}</h3>
              <p className="text-sm">{ticket.flightNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">
                Trip Date: <span className="font-bold">{ticket.date}</span>
              </p>
            </div>
            <div>
              <p>
                <strong>Departure:</strong> {ticket.departureTime} {ticket.from} T{ticket.terminal}
              </p>
              <p>
                <strong>Arrival:</strong> {ticket.arrivalTime} {ticket.to}
              </p>
            </div>
            <div className="text-right">
              <p>
                <strong>Gate:</strong> {ticket.gate} | <strong>Seat:</strong> {ticket.seat}
              </p>
              <p>
                <strong>Duration:</strong> {ticket.duration}
              </p>
            </div>
          </div>

          {/* Book Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => handleMint(ticket.destinationCode)}
            // disabled={loading}
          >
            {loading ? "Booking..." : "Book Ticket"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
