"use client";

import { useState } from "react";
import { aeroFactoryAbi } from "../../../abi/AeroFactory";
// import { base } from "viem/chains";
import { useWatchContractEvent, useWriteContract } from "wagmi";
import { InputBase } from "~~/components/scaffold-eth";

export default function InputComponent() {
  const [uri, setUri] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [name, setName] = useState<string>("");
  const { writeContract } = useWriteContract();

  const onSubmit = () => {
    if (!uri || !symbol || !name) {
      alert("Please fill all fields");
      return;
    }
    writeContract({
      abi: aeroFactoryAbi,
      address: "0xcE5e53c5D48D89ca9168D0C00227b3C5167f737d",
      functionName: "createNFTCollection",
      args: [name, symbol, uri],
    });
  };

  return (
    <div className="flex flex-col mt-8 bg-secondary p-10 rounded-lg shadow-lg max-w-md mx-auto py-10">
      <label htmlFor="collectionName" className="font-bold mb-1">
        Name:
      </label>
      <InputBase name="collectionName" placeholder="_name" value={name} onChange={setName} />
      <label htmlFor="collectionSymbol" className="font-bold mb-1">
        Symbol:
      </label>
      <InputBase name="collectionSymbol" placeholder="_symbol" value={symbol} onChange={setSymbol} />

      <label htmlFor="baseURI" className="font-bold mb-1">
        Base URI:
      </label>
      <InputBase name="baseURI" placeholder="baseURI" value={uri} onChange={setUri} />

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        onClick={onSubmit}
      >
        Generate Collections
      </button>
    </div>
  );
}
