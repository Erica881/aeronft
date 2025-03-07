"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import SearchFlight from "~~/components/SearchFlight";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex flex-col items-center">
      <SearchFlight/>

    </div>
  );
};

export default Home;
