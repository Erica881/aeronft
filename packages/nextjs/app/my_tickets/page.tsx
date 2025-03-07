"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Example NFT contract address & ABI (Replace with your real contract)
const NFT_CONTRACT_ADDRESS = "0xYourContractAddress";
const NFT_ABI = [
  {
    constant: true,
    inputs: [{ name: "owner", type: "address" }],
    name: "getUserTickets",
    outputs: [{ name: "", type: "uint256[]" }],
    type: "function",
  },
];

export default function MyTickets() {
  const { address, isConnected } = useAccount();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (isConnected) {
      fetchNFTTickets();
    }
  }, [address, isConnected]);

  const fetchNFTTickets = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, provider);
      const ticketIds = await contract.getUserTickets(address);

      // Example Ticket Data (Replace with real data from your smart contract)
      const mockTickets = ticketIds.map((id) => ({
        id,
        airline: "AirAsia",
        flightNumber: "AK88",
        departure: "Penang (PEN) - 08:00 AM",
        arrival: "Tokyo (HND) - 10:30 PM",
        seat: `12A`,
      }));

      setTickets(mockTickets);
    } catch (error) {
      console.error("Error fetching NFT tickets:", error);
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">My NFT Tickets</h2>

      {!isConnected ? (
        <div className="flex flex-col items-center">
          <p className="mb-4">Connect your wallet to view your tickets.</p>
          <ConnectButton />
        </div>
      ) : tickets.length === 0 ? (
        <p>You have no NFT flight tickets.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <p><strong>Airline:</strong> {ticket.airline}</p>
              <p><strong>Flight:</strong> {ticket.flightNumber}</p>
              <p><strong>Departure:</strong> {ticket.departure}</p>
              <p><strong>Arrival:</strong> {ticket.arrival}</p>
              <p><strong>Seat:</strong> {ticket.seat}</p>
              <p className="text-sm text-gray-300">NFT ID: #{ticket.id.toString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
