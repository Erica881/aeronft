"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-10">
        <div className="bg-black shadow-lg rounded-lg p-6 w-80 text-center relative">
          <h2 className="text-xl font-bold mb-4">Flight Ticket</h2>
          <p className="text-gray-600 mb-2">Passenger Address:</p>
          <Address address={connectedAddress} />
          <div className="mt-4 flex">
            <div className="flex-grow"></div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              // onClick={() => bookTicket()}
            >
              Book Ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
