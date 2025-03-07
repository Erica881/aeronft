export const aeroFactoryAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "collectionAddress", type: "address" },
      { indexed: false, internalType: "address", name: "creator", type: "address" },
      { indexed: false, internalType: "string", name: "name", type: "string" },
      { indexed: false, internalType: "string", name: "symbol", type: "string" },
      { indexed: false, internalType: "string", name: "baseURI", type: "string" },
    ],
    name: "CollectionCreated",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "collections",
    outputs: [
      { internalType: "address", name: "collectionAddress", type: "address" },
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "string", name: "baseURI", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_symbol", type: "string" },
      { internalType: "string", name: "_baseURI", type: "string" },
    ],
    name: "createNFTCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCollections",
    outputs: [
      {
        components: [
          { internalType: "address", name: "collectionAddress", type: "address" },
          { internalType: "address", name: "creator", type: "address" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "symbol", type: "string" },
          { internalType: "string", name: "baseURI", type: "string" },
        ],
        internalType: "struct AeroFactory.CollectionInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
