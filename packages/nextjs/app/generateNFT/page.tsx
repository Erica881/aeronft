// import { DebugContracts } from "./_components/DebugContracts";
import InputComponent from "./components/nftCollectionInfo";
import type { NextPage } from "next";

// import { InputBase } from "~~/components/scaffold-eth";
// import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// export const metadata = getMetadata({
//   title: "Generate NFTs",
//   description: "generate collections with your own metadata",
// });

const Page: NextPage = () => {
  return (
    <div className="text-center mt-8 bg-secondary p-10">
      <h1 className="text-4xl my-0">Generate NFTs</h1>
      <InputComponent />
    </div>
  );
};

export default Page;
