// import { DebugContracts } from "./_components/DebugContracts";
import InputComponent from "./components/nftCollectionInfo";
import type { NextPage } from "next";

// import { Address } from "~~/components/scaffold-eth";

const Page: NextPage = () => {
  return (
    <div className="text-center mt-8 bg-secondary p-10">
      <h1 className="text-4xl my-0">Generate Collections</h1>
      <InputComponent />
    </div>
  );
};

export default Page;
