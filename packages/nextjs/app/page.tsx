"use client";

import { useState } from "react";
import { abiAeroTicket } from "../abi/AeroTicket";
import type { NextPage } from "next";
import { useAccount, useWriteContract } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  // const { writeContractAsync } = useScaffoldWriteContract("AeroFactory");
  const { writeContract } = useWriteContract();

  const [loading, setLoading] = useState(false);

  const handleMint = () => {
    if (!connectedAddress) return alert("Please connect your wallet first!");

    try {
      // setLoading(true);
      writeContract({
        abi: abiAeroTicket,
        address: "0x866269DCF41698361eEec2614F77f33135653652",
        functionName: "mintNFT",
        args: [connectedAddress, "sundate"],
      });
      console.log("Ticket NFT Minted Successfully!");
      // alert("Ticket NFT Minted Successfully!");
    } catch (error) {
      console.error("Minting failed:", error);
      alert("Failed to mint NFT");
    }
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-10">
      <div className="bg-black shadow-lg rounded-lg p-6 w-80 text-center relative">
        <h2 className="text-xl font-bold mb-4 text-white">Flight Ticket</h2>
        <p className="text-gray-400 mb-2">Passenger Address:</p>
        <Address address={connectedAddress} />
        <div className="mt-4 flex justify-end items-center w-full">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleMint}
          >
            {loading ? "Booking..." : "Book Ticket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
