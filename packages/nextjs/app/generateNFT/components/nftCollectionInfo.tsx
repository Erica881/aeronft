"use client";

import { useState } from "react";
import { aeroFactoryAbi } from "../../../abi/AeroFactory";
// import { base } from "viem/chains";
import { useWriteContract } from "wagmi";
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
    <div className="flex flex-col mt-8 bg-secondary px-10 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex  flex-col mb-4">
        <label htmlFor="collectionName" className=" relative inset-y-0 left-0 w-16 font-bold m-5">
          Name:
        </label>
        <InputBase name="collectionName" placeholder="_name" value={name} onChange={setName} />
        <label htmlFor="collectionSymbol" className="relative inset-y-0 left-0 w-16 font-bold m-5">
          Symbol:
        </label>
        <InputBase name="collectionSymbol" placeholder="_symbol" value={symbol} onChange={setSymbol} />

        <label htmlFor="baseURI" className="relative inset-y-0 left-0 w-20 font-bold m-5">
          Base URI:
        </label>
        <InputBase name="baseURI" placeholder="baseURI" value={uri} onChange={setUri} />
      </div>
      <button
        className="m-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        onClick={onSubmit}
      >
        Generate Collections
      </button>
    </div>
  );
}
